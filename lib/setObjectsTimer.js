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