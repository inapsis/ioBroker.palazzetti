exports.Objects = function(adapter) {

    adapter.setObjectAsync("info.model", {
        type: "state",
        common: {
            name: "info.model",
            type: "string",
            role: "state",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("info.aplts", {
        type: "state",
        common: {
            name: "info.aplts",
            type: "string",
            role: "state",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("info.mac", {
        type: "state",
        common: {
            name: "info.mac",
            type: "string",
            role: "state",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("info.fwdate", {
        type: "state",
        common: {
            name: "info.fwdate",
            type: "string",
            role: "date",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("info.ver", {
        type: "state",
        common: {
            name: "info.ver",
            type: "string",
            role: "state",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("info.mbtype", {
        type: "state",
        common: {
            name: "info.mbtype",
            type: "number",
            role: "state",
            read: true,
            write: false
        },
        native: {},
    });
};

exports.State = function(adapter, obj) {
    adapter.setStateAsync("info.model", obj.DATA.MOD, true);
    adapter.setStateAsync("info.aplts", obj.DATA.APLTS, true);
    adapter.setStateAsync("info.mac", obj.DATA.MAC, true);
    adapter.setStateAsync("info.fwdate", obj.DATA.FWDATE, true);
    adapter.setStateAsync("info.ver", obj.DATA.VER, true);
    adapter.setStateAsync("info.mbtype", obj.DATA.MBTYPE, true);
};