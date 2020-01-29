var request = require("request");

var palazzettiMsg = '/cgi-bin/sendmsg.lua?cmd=';

function PalazzettiRequest(aParams) {
    this.ipaddress = aParams.ipaddress;
    this.port = aParams.port;
};

PalazzettiRequest.prototype.getMessageURL = function() {
    return 'http://' + this.ipaddress + ':' + this.port + palazzettiMsg
};

PalazzettiRequest.prototype._request = function(sCommand) {
    return new Promise(function(resolve, reject) {
        request.get(this.getMessageURL() + sCommand,
            function(error, response, body) {
                if (!error) {
                    var result = JSON.parse(body);
                }
                if (error) {
                    reject(error);
                } else if (!result.SUCCESS) {
                    reject(result.INFO.CMD + ': ' + result.INFO.RSP);
                } else {
                    resolve(result);
                }
            });
    }.bind(this));
};


PalazzettiRequest.prototype.getAlls = function() {
    return this._request('GET+ALLS');
};

PalazzettiRequest.prototype.getTimer = function() {
    return this._request('GET+CHRD');
};

PalazzettiRequest.prototype.setCommand = function(command) {
    return this._request('SET+' + command);
};

PalazzettiRequest.prototype.powerCommand = function(command) {
    return this._request('CMD+' + command);
};

/*
todo commands
CMD+ON 
CMD+OFF
GET+STDT
GET+LABL
GET+TIME

tbd F1V = F!RPM
*/

exports.PalazzettiRequest = PalazzettiRequest;