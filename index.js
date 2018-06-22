$(document).ready(
    function () {
        // 定位
        $("#id2").mouseover(function () {
            $(".ycdiv").css("display", "block");
            $("#id2").css("background-color", "#ffffff");
        });
        $("#id2").mouseout(function () {
            $(".ycdiv").css("display", "none");
            $("#id2").css("background-color", "#e3e4e5");
        });

        // 猜你喜欢随手购
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
    // 添加一条商品到购物车
);

function additem(goodsid) {

    // $("#cartempty").css("display", "none");
    // $("#cartxs").css("display", "block");



    var itemdvid = "#itemdv" + goodsid;
    var title = $(itemdvid + " .title").text();


    var content = "<div class='cartitem' id='cartitem1'>" +
        "<div class='cartitemselect'>" +
        "<div class='selectcb'><input type='checkbox'></div>" +
        "<div class='cartitemimage'><img class='itemimage' src='images/favor1.jpg'></div>" +
        "</div>" +
        "<div class='itemshangpin'>React Native跨平台移动应用开发（第二版）</div>" +
        "<div class='itemdanjia' id='itemdanjia1'>￥78.2</div>" +
        "<div class='itemshuliang'>" +
        "<input class='crement' style='padding: 2px 2px 2px;' type='button' value='-'' onclick='crement()'><input class='num' id='num1' type='text' value='1' disabled='true'><input class='increment' style='padding: 2px 4px 2px;' type='button' value='+' onclick='increment()'>" +
        "</div>" +
        "<div class='itemxiaoji' id='itemxiaoji1'></div>" +
        "<div class='caozuo'><a href='javascript:removeitem();'>删除</a></div>" +
        "</div>"

    $("#cartdisplay").append(content);
}

function chitem(goodsid) {

    $("#favorcart" + goodsid).css("color", "#ffffff");
    $("#favorcart" + goodsid).css("background-color", "#e4393c");
    $("#favorcart" + goodsid + " b").css("background-position", "-28px -56px")

}

function ritem(goodsid) {
    $("#favorcart" + goodsid).css("color", "#000000");
    $("#favorcart" + goodsid).css("background-color", "#ffffff");
    $("#favorcart" + goodsid + " b").css("background-position", "0 -57px");
}
function c_hitem(goodsid) {

    $("#favorcart-" + goodsid).css("color", "#ffffff");
    $("#favorcart-" + goodsid).css("background-color", "#e4393c");
    $("#favorcart-" + goodsid + " b").css("background-position", "-28px -56px")

}

function r_item(goodsid) {
    $("#favorcart-" + goodsid).css("color", "#000000");
    $("#favorcart-" + goodsid).css("background-color", "#ffffff");
    $("#favorcart-" + goodsid + " b").css("background-position", "0 -57px");
}

function cvitem(goodsid) {
    $("#v" + goodsid).css("border", "1px solid #e4393c");
}

function rvitem(goodsid) {
    $("#v" + goodsid).css("border", "1px dashed #cacaca");
}

function c_vitem(goodsid) {
    $("#vv" + goodsid).css("border", "1px solid #e4393c");
}

function r_vitem(goodsid) {
    $("#vv" + goodsid).css("border", "1px dashed #cacaca");
}