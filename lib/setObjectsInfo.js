exports.State = function(adapter, obj) {
    adapter.setStateAsync("info.model", obj.DATA.MOD, true);
    adapter.setStateAsync("info.aplts", obj.DATA.APLTS, true);
    adapter.setStateAsync("info.mac", obj.DATA.MAC, true);
    adapter.setStateAsync("info.fwdate", obj.DATA.FWDATE, true);
    adapter.setStateAsync("info.ver", obj.DATA.VER, true);
    adapter.setStateAsync("info.mbtype", obj.DATA.MBTYPE, true);
};

exports.StateLabel = function(adapter, obj) {
    adapter.setStateAsync("info.name", obj.DATA.LABEL, true);
};