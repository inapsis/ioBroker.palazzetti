exports.StateControl = function(adapter, obj) {
    return [
        adapter.setStateAsync("control.pwr", obj.DATA.PWR, true),
        adapter.setStateAsync("control.f2l", obj.DATA.F2L, true),
        adapter.setStateAsync("control.setp", obj.DATA.SETP, true),
        adapter.setStateAsync("control.onoff", obj.DATA.STATUS === 0 ? false : true, true)
    ]
};

exports.StateGet = function(adapter, obj) {
    return [
        adapter.setStateAsync("get.aplwday", obj.DATA.APLWDAY, true),
        adapter.setStateAsync("get.status", obj.DATA.STATUS, true),
        adapter.setStateAsync("get.fdr", obj.DATA.FDR, true),
        adapter.setStateAsync("get.t1", obj.DATA.T1, true),
        adapter.setStateAsync("get.t2", obj.DATA.T2, true),
        adapter.setStateAsync("get.t3", obj.DATA.T3, true),
        adapter.setStateAsync("get.t4", obj.DATA.T4, true),
        adapter.setStateAsync("get.t5", obj.DATA.T5, true),
        adapter.setStateAsync("get.pqt", obj.DATA.PQT, true),
        adapter.setStateAsync("get.in", obj.DATA.IN, true),
        adapter.setStateAsync("get.out", obj.DATA.OUT, true),
        adapter.setStateAsync("get.f1v", obj.DATA.F1V, true),
        adapter.setStateAsync("get.f2v", obj.DATA.F2V, true),
        adapter.setStateAsync("get.f2lf", obj.DATA.F2LF, true),
        adapter.setStateAsync("get.pump", obj.DATA.PUMP, true),
        adapter.setStateAsync("get.dpt", obj.DATA.DPT, true),
        adapter.setStateAsync("get.dp", obj.DATA.DP, true),
        adapter.setStateAsync("get.f1rpm", obj.DATA.F1RPM, true),
        adapter.setStateAsync("get.chrstatus", obj.DATA.CHRSTATUS, true)
    ]
};

exports.StateInfo = function(adapter, obj) {
    return [
        adapter.setStateAsync("info.model", obj.DATA.MOD, true),
        adapter.setStateAsync("info.aplts", obj.DATA.APLTS, true),
        adapter.setStateAsync("info.mac", obj.DATA.MAC, true),
        adapter.setStateAsync("info.fwdate", obj.DATA.FWDATE, true),
        adapter.setStateAsync("info.ver", obj.DATA.VER, true),
        adapter.setStateAsync("info.mbtype", obj.DATA.MBTYPE, true)
    ]
};

exports.StateLabel = function(adapter, obj) {
    return [adapter.setStateAsync("info.name", obj.DATA.LABEL, true)];
};

exports.StateTimer = function(adapter, obj) {
    return [
        adapter.setStateAsync("timer.p1", JSON.stringify(obj.DATA.P1), true),
        adapter.setStateAsync("timer.p2", JSON.stringify(obj.DATA.P2), true),
        adapter.setStateAsync("timer.p3", JSON.stringify(obj.DATA.P3), true),
        adapter.setStateAsync("timer.p4", JSON.stringify(obj.DATA.P4), true),
        adapter.setStateAsync("timer.p5", JSON.stringify(obj.DATA.P5), true),
        adapter.setStateAsync("timer.p6", JSON.stringify(obj.DATA.P6), true),

        adapter.setStateAsync("timer.d1", JSON.stringify(obj.DATA.D1), true),
        adapter.setStateAsync("timer.d2", JSON.stringify(obj.DATA.D2), true),
        adapter.setStateAsync("timer.d3", JSON.stringify(obj.DATA.D3), true),
        adapter.setStateAsync("timer.d4", JSON.stringify(obj.DATA.D4), true),
        adapter.setStateAsync("timer.d5", JSON.stringify(obj.DATA.D5), true),
        adapter.setStateAsync("timer.d6", JSON.stringify(obj.DATA.D6), true),
        adapter.setStateAsync("timer.d7", JSON.stringify(obj.DATA.D7), true)
    ]
};