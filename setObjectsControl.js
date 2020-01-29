exports.Objects = function(adapter) {

    adapter.setObjectAsync("control", {
        type: "channel",
        common: {
            name: "control",
            type: "string",
            role: "info",
            desc: "control channel"
        },
        native: {},
    });

    adapter.setObjectAsync("control.pwr", {
        type: "state",
        common: {
            name: "control.pwr",
            type: "number",
            role: "state",
            desc: "fire power",
            read: true,
            write: true
        },
        native: {},
    });

    adapter.setObjectAsync("control.f2l", {
        type: "state",
        common: {
            name: "control.f2l",
            type: "number",
            role: "state",
            desc: "fan level",
            read: true,
            write: true
        },
        native: {},
    });

    adapter.setObjectAsync("control.setp", {
        type: "state",
        common: {
            name: "control.setp",
            type: "number",
            role: "state",
            desc: "set point",
            read: true,
            write: true
        },
        native: {},
    });

    adapter.setObjectAsync("control.onoff", {
        type: "state",
        common: {
            name: "control.onoff",
            type: "bool",
            role: "state",
            desc: "power on/off",
            read: true,
            write: true
        },
        native: {},
    });
};

exports.State = function(adapter, obj) {
    adapter.setStateAsync("control.pwr", obj.DATA.PWR, true);
    adapter.setStateAsync("control.f2l", obj.DATA.F2L, true);
    adapter.setStateAsync("control.setp", obj.DATA.SETP, true);

    adapter.setStateAsync("control.onoff", obj.DATA.STATUS === 0 ? false : true, true);

};