"use strict";

/*
 * Created with @iobroker/create-adapter v1.20.0
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require("@iobroker/adapter-core");
let pollingInterval;

// Load your modules here, e.g.:
var PalazzettiRequest = require('./palazzettiRequest').PalazzettiRequest;

var setObjectsInfo = require('./setObjectsInfo');
var setObjectsGet = require('./setObjectsGet');
var setObjectsControl = require('./setObjectsControl');
var setObjectsTimer = require('./setObjectsTimer');
// const fs = require("fs");

class Palazzetti extends utils.Adapter {

    /**
     * @param {Partial<ioBroker.AdapterOptions>} [options={}]
     */
    constructor(options) {
        super({
            ...options,
            name: "palazzetti",
        });
        this.on("ready", this.onReady.bind(this));
        this.on("stateChange", this.onStateChange.bind(this));
        // this.on("message", this.onMessage.bind(this));
        this.on("unload", this.onUnload.bind(this));
    }

    /**
     * Is called when databases are connected and adapter received configuration.
     */
    async onReady() {
        // Initialize your adapter here

        // The adapters config (in the instance object everything under the attribute "native") is accessible via
        // this.config:
        this.log.info("config ip-address: " + this.config.ipAddress);
        this.log.info("config port: " + this.config.port);
        this.log.info("config poll time: " + this.config.polltime);

        this.palazzettiRequest = new PalazzettiRequest({
            ipaddress: this.config.ipAddress,
            port: this.config.port
        });

        await setObjectsGet.Objects(this);
        await setObjectsControl.Objects(this);
        await setObjectsTimer.Objects(this);

        this.subscribeStates("*");

        this.updateState();

        pollingInterval = setInterval(function() {
            this.updateState();
        }.bind(this), this.config.polltime * 1000 || 60000);

    }

    /**
     * Is called when adapter shuts down - callback has to be called under any circumstances!
     * @param {() => void} callback
     */
    onUnload(callback) {
        try {
            this.log.info("cleaned everything up...");
            clearInterval(pollingInterval);
            callback();
        } catch (e) {
            callback();
        }
    }

    /**
     * Is called if a subscribed state changes
     * @param {string} id
     * @param {ioBroker.State | null | undefined} state
     */
    onStateChange(id, state) {
        if (state) {
            let instanceName = this.name + "." + this.instance;
            // The state was changed
            //this.log.info(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
            switch (id) {
                case instanceName + ".control.f2l":
                    setObjectsGet.StateF2lLabel(this, state.val);
                    if (!state.ack && state.val >= 0 && state.val <= 7) {
                        this.palazzettiRequest.setCommand("RFAN+" + String(state.val)).then(function(result) {
                            this.log.info("set fan level: " + JSON.stringify(result));
                        }.bind(this)).catch(function(err) {
                            this.log.error(err);
                        }.bind(this));
                    }
                    break;
                case instanceName + ".control.setp":
                    if (!state.ack && state.val >= 0 && state.val <= 40) {
                        this.palazzettiRequest.setCommand("SETP+" + String(state.val)).then(function(result) {
                            this.log.info("set point: " + JSON.stringify(result));
                        }.bind(this)).catch(function(err) {
                            this.log.error(err);
                        }.bind(this));
                    }
                    break;
                case instanceName + ".get.aplwday":
                    setObjectsGet.StateAplwdayLabel(this, state.val);
                    break;
                case instanceName + ".get.status":
                    setObjectsGet.StateStatusLabel(this, state.val);
                    break;
                case instanceName + ".get.chrstatus":
                    setObjectsGet.StateChronoStatusLabel(this, state.val);
                    break;
                case instanceName + ".control.pwr":
                    if (!state.ack && state.val >= 0 && state.val <= 5) {
                        this.palazzettiRequest.setCommand("POWR+" + String(state.val)).then(function(result) {
                            this.log.info("set power: " + JSON.stringify(result));
                        }.bind(this)).catch(function(err) {
                            this.log.error(err);
                        }.bind(this));
                    }
                    break;
                case instanceName + ".control.onoff":
                    if (!state.ack && state.val !== null) {
                        this.palazzettiRequest.powerCommand(state.val === false ? 'OFF' : 'ON').then(function(result) {
                            this.log.info("set on/off: " + JSON.stringify(result));
                        }.bind(this)).catch(function(err) {
                            this.log.error(err);
                        }.bind(this));
                    }
                    break;
                default:
                    break;
            }
        } else {
            // The state was deleted
            this.log.info(`state ${id} deleted`);
        }
    }

}

Palazzetti.prototype.updateState = function() {

    let aRequests = [
        this.palazzettiRequest.getAlls(),
        this.palazzettiRequest.getTimer()
    ]

    Promise.all(aRequests).then(
        function(result) {
            setObjectsInfo.State(this, result[0]);
            setObjectsGet.State(this, result[0]);
            setObjectsControl.State(this, result[0]);

            setObjectsTimer.State(this, result[1]);
        }.bind(this)).catch(function(error) {
        this.log.error(error);
    }.bind(this));

}

// @ts-ignore parent is a valid property on module
if (module.parent) {
    // Export the constructor in compact mode
    /**
     * @param {Partial<ioBroker.AdapterOptions>} [options={}]
     */
    module.exports = (options) => new Palazzetti(options);
} else {
    // otherwise start the instance directly
    new Palazzetti();
};