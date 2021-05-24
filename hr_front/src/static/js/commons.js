import $ from "jquery"

export var AUTH = localStorage.getItem("auth");
export var ACCESS = localStorage.getItem("token");
export var REFRESH = localStorage.getItem("refresh");
export function ajaxAuthPostCon(obj) {
    var reObj = {};

    $.ajax({
        url: AUTH + obj.url,
        type: "POST",
        data: obj,
        datatype: "json",
        async: false,
        beforeSend: function (xhr){
            xhr.setRequestHeader("Authorization", "1234");//header추가
        },
        error: function(xhr, status, error){
            alert("ERROR :::: " + status);
        },
        success: function (result) {
            reObj = result;
        }
    })
    return reObj;
}

export function refreshAccessToken(){
    if(ACCESS){
        var result = ajaxAuthPostCon({
            url: "statusToken",
            access: ACCESS
        });
        console.log("STATUS :::: " + JSON.stringify(result));
        if(!result.condition){
            result = ajaxAuthPostCon({
                url: "refreshAccessToken",
                access: ACCESS,
                refresh: REFRESH
            }); 
            console.log("refresh :::: " + JSON.stringify(result));
            if(result.condition){
                localStorage.setItem("token",result.token);
            }else{
                localStorage.removeItem("token");
            }
        }
    }

    return localStorage.getItem("token");
}