const path = require("path");
const { tests, utils } = require("@iobroker/testing");

var PalazzettiRequest = require('../lib/palazzettiRequest').PalazzettiRequest;

PalazzettiRequest.prototype._request =
    function(sCommand) {
        return new Promise(function(resolve, reject) {
            switch (sCommand) {
                case "GET+ALLS":
                    resolve({
                        DATA: { SETP: 21, MOD: 0, APLTS: 0 }
                    });
                    break;
                case "GET+CHRD":
                    resolve({
                        DATA: {}
                    });
                    break;
                case "GET+LABL":
                    resolve({
                        DATA: { LABEL: "palazzetti" }
                    });
                    break;
                default:
                    console.log(sCommand);
                    reject("not supported");
            }

        });
    };

// Run unit tests - See https://github.com/ioBroker/testing for a detailed explanation and further options
tests.unit(path.join(__dirname, ".."), {

    additionalMockedModules: {
        "{CONTROLLER_DIR}/lib/tools.js": {}
    }

});