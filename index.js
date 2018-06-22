$(document).ready(
    function () {
        $("#id2").mouseover(function () {
            $(".ycdiv").css("display", "block");
            $("#id2").css("background-color", "#ffffff");
        });
        $("#id2").mouseout(function () {
            $(".ycdiv").css("display", "none");
            $("#id2").css("background-color", "#e3e4e5");
        });
        $("#a1").mouseover(function () {
            $("#a1").css("color", "#e4393c");
            $("#a1").css("border-bottom", "2px solid #e4393c");
            $("#a2").css("color", "#666");
            $("#a2").css("border-bottom", "2px solid #fff");
            $("#ldiv1").css("width", "26px");
            $("#ldiv1").css("background", "#e4393c");
            $("#ldiv2").css("width", "8px");
            $("#ldiv2").css("background", "#aaa");
            $("#ldiv2").css("background", "#aaa");
            $("#div1_4_2").css("display", "block");
            $("#div1_4_3").css("display", "none");
        });
        $("#a2").mouseover(function () {
            $("#a2").css("color", "#e4393c");
            $("#a2").css("border-bottom", "2px solid #e4393c");
            $("#a1").css("color", "#666");
            $("#a1").css("border-bottom", "2px solid #fff");
            $("#ldiv2").css("width", "26px");
            $("#ldiv2").css("background", "#e4393c");
            $("#ldiv1").css("width", "8px");
            $("#ldiv1").css("background", "#aaa");
            $("#div1_4_3").css("display", "block");
            $("#div1_4_2").css("display", "none");
        });
    }
);