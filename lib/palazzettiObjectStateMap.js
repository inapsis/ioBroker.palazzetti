exports.StateControl = function(adapter, obj) {
    let aRequests = [];

    let addState = function(id, value) {
       if (!!value) {
        aRequests.concat(adapter.setStateAsync(id, value, true)); 
       } 
    }

    addState("control.pwr", obj?.DATA?.PWR);
    addState("control.f2l", obj?.DATA?.F2L);
    addState("control.setp", obj?.DATA?.SETP);
    addState("control.onoff", !!obj?.DATA?.STATUS ? obj.DATA.STATUS === 0 ? false : true : undefined);
    addState("control.f3l", obj?.DATA?.F3L);
    addState("control.f4l", obj?.DATA?.F4L);

    return aRequests;
};

exports.StateGet = function(adapter, obj) {

    let aRequests = [];

    let addState = function(id, value) {
       if (!!value) {
        aRequests.concat(adapter.setStateAsync(id, value, true)); 
       } 
    }

    addState("get.aplwday", obj?.DATA?.APLWDAY),
    addState("get.status", obj?.DATA?.STATUS),
    addState("get.fdr", obj?.DATA?.FDR),
    addState("get.t1", obj?.DATA?.T1),
    addState("get.t2", obj?.DATA?.T2),
    addState("get.t3", obj?.DATA?.T3),
    addState("get.t4", obj?.DATA?.T4),
    addState("get.t5", obj?.DATA?.T5),
    addState("get.pqt", obj?.DATA?.PQT),
    addState("get.in", obj?.DATA?.IN),
    addState("get.out", obj?.DATA?.OUT),
    addState("get.f1v", obj?.DATA?.F1V),
    addState("get.f2v", obj?.DATA?.F2V),
    addState("get.f2lf", obj?.DATA?.F2LF),
    addState("get.pump", obj?.DATA?.PUMP),
    addState("get.dpt", obj?.DATA?.DPT),
    addState("get.dp", obj?.DATA?.DP),
    addState("get.f1rpm", obj?.DATA?.F1RPM),
    addState("get.chrstatus", obj?.DATA?.CHRSTATUS)

    return aRequests;
};

exports.StateInfo = function(adapter, obj) {
    let aRequests = [];

    let addState = function(id, value) {
       if (!!value) {
        aRequests.concat(adapter.setStateAsync(id, value, true)); 
       } 
    }

    addState("info.model", obj?.DATA?.MOD),
    addState("info.aplts", obj?.DATA?.APLTS),
    addState("info.mac", obj?.DATA?.MAC),
    addState("info.fwdate", obj?.DATA?.FWDATE),
    addState("info.ver", obj?.DATA?.VER),
    addState("info.mbtype", obj?.DATA?.MBTYPE)

    return aRequests;
};

exports.StateLabel = function(adapter, obj) {
    let aRequests = [];
    
    if (!!obj?.DATA?.LABEL) {
        aRequests.concat(adapter.setStateAsync("info.name", obj.DATA.LABEL, true));
    }
    return aRequests;
};

exports.StateTimer = function(adapter, obj) {
    let aRequests = [];

    let addState = function(id, value) {
       if (!!value) {
        aRequests.concat(adapter.setStateAsync(id, JSON.stringify(value), true)); 
       } 
    }

    addState("timer.p1", obj?.DATA?.P1),
    addState("timer.p2", obj?.DATA?.P2),
    addState("timer.p3", obj?.DATA?.P3),
    addState("timer.p4", obj?.DATA?.P4),
    addState("timer.p5", obj?.DATA?.P5),
    addState("timer.p6", obj?.DATA?.P6),

    addState("timer.d1", obj?.DATA?.D1),
    addState("timer.d2", obj?.DATA?.D2),
    addState("timer.d3", obj?.DATA?.D3),
    addState("timer.d4", obj?.DATA?.D4),
    addState("timer.d5", obj?.DATA?.D5),
    addState("timer.d6", obj?.DATA?.D6),
    addState("timer.d7", obj?.DATA?.D7)

    return aRequests;
};