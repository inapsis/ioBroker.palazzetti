exports.Objects = function(adapter) {

    adapter.setObjectAsync("timer", {
        type: "channel",
        common: {
            name: "timer",
            type: "string",
            role: "info",
            desc: "timer channel"
        },
        native: {},
    });

    adapter.setObjectAsync("timer.p1", {
        type: "state",
        common: {
            name: "timer.p1",
            type: "string",
            role: "state",
            desc: "timer program 1",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("timer.p2", {
        type: "state",
        common: {
            name: "timer.p2",
            type: "string",
            role: "state",
            desc: "timer program 2",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("timer.p3", {
        type: "state",
        common: {
            name: "timer.p3",
            type: "string",
            role: "state",
            desc: "timer program 3",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("timer.p4", {
        type: "state",
        common: {
            name: "timer.p4",
            type: "string",
            role: "state",
            desc: "timer program 4",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("timer.p5", {
        type: "state",
        common: {
            name: "timer.p5",
            type: "string",
            role: "state",
            desc: "timer program 5",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("timer.p6", {
        type: "state",
        common: {
            name: "timer.p6",
            type: "string",
            role: "state",
            desc: "timer program 6",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("timer.d1", {
        type: "state",
        common: {
            name: "timer.d1",
            type: "string",
            role: "state",
            desc: "timer Monday",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("timer.d2", {
        type: "state",
        common: {
            name: "timer.d2",
            type: "string",
            role: "state",
            desc: "timer Tuesday",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("timer.d3", {
        type: "state",
        common: {
            name: "timer.d3",
            type: "string",
            role: "state",
            desc: "timer Wednesday",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("timer.d4", {
        type: "state",
        common: {
            name: "timer.d4",
            type: "string",
            role: "state",
            desc: "timer Thursday",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("timer.d5", {
        type: "state",
        common: {
            name: "timer.d5",
            type: "string",
            role: "state",
            desc: "timer Friday",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("timer.d6", {
        type: "state",
        common: {
            name: "timer.d6",
            type: "string",
            role: "state",
            desc: "timer Suterday",
            read: true,
            write: false
        },
        native: {},
    });

    adapter.setObjectAsync("timer.d7", {
        type: "state",
        common: {
            name: "timer.d7",
            type: "string",
            role: "state",
            desc: "timer Sunday",
            read: true,
            write: false
        },
        native: {},
    });
};

exports.State = function(adapter, obj) {
    adapter.setStateAsync("timer.p1", JSON.stringify(obj.DATA.P1), true);
    adapter.setStateAsync("timer.p2", JSON.stringify(obj.DATA.P2), true);
    adapter.setStateAsync("timer.p3", JSON.stringify(obj.DATA.P3), true);
    adapter.setStateAsync("timer.p4", JSON.stringify(obj.DATA.P4), true);
    adapter.setStateAsync("timer.p5", JSON.stringify(obj.DATA.P5), true);
    adapter.setStateAsync("timer.p6", JSON.stringify(obj.DATA.P6), true);

    adapter.setStateAsync("timer.d1", JSON.stringify(obj.DATA.D1), true);
    adapter.setStateAsync("timer.d2", JSON.stringify(obj.DATA.D2), true);
    adapter.setStateAsync("timer.d3", JSON.stringify(obj.DATA.D3), true);
    adapter.setStateAsync("timer.d4", JSON.stringify(obj.DATA.D4), true);
    adapter.setStateAsync("timer.d5", JSON.stringify(obj.DATA.D5), true);
    adapter.setStateAsync("timer.d6", JSON.stringify(obj.DATA.D6), true);
    adapter.setStateAsync("timer.d7", JSON.stringify(obj.DATA.D7), true);
};