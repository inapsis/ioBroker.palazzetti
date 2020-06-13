exports.State = function(adapter, obj) {
    adapter.setStateAsync("control.pwr", obj.DATA.PWR, true);
    adapter.setStateAsync("control.f2l", obj.DATA.F2L, true);
    adapter.setStateAsync("control.setp", obj.DATA.SETP, true);

    adapter.setStateAsync("control.onoff", obj.DATA.STATUS === 0 ? false : true, true);

};