import $ from "jquery"

export function ajaxPostCon(obj) {
    var reObj = {};
    $.ajax({
        url: obj.url,
        type: "post",
        data: obj,
        datatype: "json",
        async: false,
        success: function (result) {
            reObj = result;
        }
    })
    return reObj;           
}