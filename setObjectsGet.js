exports.Objects = function(adapter) {

    adapter.setObjectAsync("get.aplwday", {
        type: "state",
        common: {
            name: "get.aplwday",
            type: "number",
            role: "dayofweek",
            desc: "week day",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("get.aplwdayLabel", {
        type: "state",
        common: {
            name: "get.aplwdayLabel",
            type: "string",
            role: "dayofweek",
            desc: "week day label",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("get.status", {
        type: "state",
        common: {
            name: "get.status",
            type: "number",
            role: "info.status",
            desc: "current status",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("get.statusLabel", {
        type: "state",
        common: {
            name: "get.statusLabel",
            type: "string",
            role: "info.status",
            desc: "current status label",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("get.fdr", {
        type: "state",
        common: {
            name: "get.fdr",
            type: "number",
            role: "state",
            desc: "feed rate",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("get.t1", {
        type: "state",
        common: {
            name: "get.t1",
            type: "number",
            role: "value.temperature",
            desc: "temperature room",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("get.t2", {
        type: "state",
        common: {
            name: "get.t2",
            type: "number",
            role: "value.temperature",
            desc: "temperature t2",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("get.t3", {
        type: "state",
        common: {
            name: "get.t3",
            type: "number",
            role: "value.temperature",
            desc: "temperature exhaust",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("get.t4", {
        type: "state",
        common: {
            name: "get.t4",
            type: "number",
            role: "value.temperature",
            desc: "temperature t4",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("get.t5", {
        type: "state",
        common: {
            name: "get.t5",
            type: "number",
            role: "value.temperature",
            desc: "temperature t5",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("get.pqt", {
        type: "state",
        common: {
            name: "get.pqt",
            type: "number",
            role: "value",
            desc: "pellet quantity",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("get.in", {
        type: "state",
        common: {
            name: "get.in",
            type: "number",
            role: "state",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("get.out", {
        type: "state",
        common: {
            name: "get.out",
            type: "number",
            role: "state",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("get.f1v", {
        type: "state",
        common: {
            name: "get.f1v",
            type: "number",
            role: "state",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("get.f2v", {
        type: "state",
        common: {
            name: "get.f2v",
            type: "number",
            role: "state",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("get.f2lf", {
        type: "state",
        common: {
            name: "get.f2lf",
            type: "number",
            role: "state",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("get.pump", {
        type: "state",
        common: {
            name: "get.pump",
            type: "number",
            role: "state",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("get.dpt", {
        type: "state",
        common: {
            name: "get.dpt",
            type: "number",
            role: "state",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("get.dp", {
        type: "state",
        common: {
            name: "get.dp",
            type: "number",
            role: "state",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("get.f1rpm", {
        type: "state",
        common: {
            name: "get.f1rpm",
            type: "number",
            role: "state",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("get.f2lLabel", {
        type: "state",
        common: {
            name: "get.f2lLabel",
            type: "string",
            role: "state",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("get.chrstatus", {
        type: "state",
        common: {
            name: "get.chrstatus",
            type: "number",
            role: "value",
            desc: "chrono status",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("get.chrstatusLabel", {
        type: "state",
        common: {
            name: "get.chrstatusLabel",
            type: "string",
            role: "value",
            desc: "chrono status label",
            read: true,
            write: false
        },
        native: {},
    });
};

exports.State = function(adapter, obj) {
    adapter.setStateAsync("get.aplwday", obj.DATA.APLWDAY, true);
    adapter.setStateAsync("get.status", obj.DATA.STATUS, true);
    adapter.setStateAsync("get.fdr", obj.DATA.FDR, true);
    adapter.setStateAsync("get.t1", obj.DATA.T1, true);
    adapter.setStateAsync("get.t2", obj.DATA.T2, true);
    adapter.setStateAsync("get.t3", obj.DATA.T3, true);
    adapter.setStateAsync("get.t4", obj.DATA.T4, true);
    adapter.setStateAsync("get.t5", obj.DATA.T5, true);
    adapter.setStateAsync("get.pqt", obj.DATA.PQT, true);
    adapter.setStateAsync("get.in", obj.DATA.IN, true);
    adapter.setStateAsync("get.out", obj.DATA.OUT, true);
    adapter.setStateAsync("get.f1v", obj.DATA.F1V, true);
    adapter.setStateAsync("get.f2v", obj.DATA.F2V, true);
    adapter.setStateAsync("get.f2lf", obj.DATA.F2LF, true);
    adapter.setStateAsync("get.pump", obj.DATA.PUMP, true);
    adapter.setStateAsync("get.dpt", obj.DATA.DPT, true);
    adapter.setStateAsync("get.dp", obj.DATA.DP, true);
    adapter.setStateAsync("get.f1rpm", obj.DATA.F1RPM, true);
    adapter.setStateAsync("get.chrstatus", obj.DATA.CHRSTATUS, true);
};

exports.StateF2lLabel = function(adapter, val) {
    var f2lLabel = { "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "High", "7": "Auto" };
    adapter.setStateAsync("get.f2lLabel", f2lLabel[val], true);
};

exports.StateAplwdayLabel = function(adapter, val) {
    var aplwdayLabel = { "1": "Monday", "2": "Tuesday", "3": "Wednesday", "4": "Thursday", "5": "Friday", "6": "Suterday", "7": "Sunday" };
    adapter.setStateAsync("get.aplwdayLabel", aplwdayLabel[val], true);
};

exports.StateStatusLabel = function(adapter, val) {
    var statusLabel = { "0": "Off", "1": "Off Timer", "2": "Test Fire", "3": "Heat Up", "4": "Fuel Ign", "5": "Ign Test", "6": "Burning", "9": "Cool Fluid", "10": "Fire Stop", "11": "Clean Fire", "12": "Cool" };
    adapter.setStateAsync("get.statusLabel", statusLabel[val], true);
};

exports.StateChronoStatusLabel = function(adapter, val) {
    var timerStatusLabel = { "0": "Timer Off", "1": "Timer On" };
    adapter.setStateAsync("get.chrstatusLabel", timerStatusLabel[val], true);
};