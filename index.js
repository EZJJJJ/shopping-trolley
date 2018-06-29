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

);
var d1 = 0;
var d2 = 0;
var d3 = 0;
var d4 = 0;
var d5 = 0;
var d6 = 0;
var d7 = 0;
var d8 = 0;
// 点击按钮 减少数量
function crement(e) {
    var newnum = parseInt($("#numcart_item" + e).val()) - 1;
    if (newnum >= 1) {
        $("#numcart_item" + e).val(newnum);
    }
    itemprice(e);
    zj();
    zs();
}

// 点击按钮 增加数量
function increment(e) {
    var newnum = parseInt($("#numcart_item" + e).val()) + 1;
    $("#numcart_item" + e).val(newnum);
    itemprice(e);
    zj();
    zs();
}

// 计算小计内容 用单价*数量
function itemprice(e) {
    var danjia = parseFloat($("#itemdanjia" + e).text().replace("￥", ""));
    var shuliang = parseInt($("#numcart_item" + e).val());
    var xiaoji = danjia * shuliang;
    $("#itemxiaoji" + e).text("￥" + xiaoji.toFixed(2));
}

//计算总价
function zj() {
    var zjg = 0;
    for (var a = 1; a <= 8; a++) {

        var danjia = parseFloat($("#itemdanjia" + a).text().replace("￥", ""));
        var shuliang = parseInt($("#numcart_item" + a).val());
        if (isNaN(danjia) || isNaN(shuliang)) {
            continue;
        } else {
            

            var xiaoji = danjia * shuliang;
            zjg = zjg + xiaoji;
            
        }

    }
    $("#em").text("￥" + zjg.toFixed(2));
}

//计算总数
function zs() {
    var x = 0;
    for (var a = 1; a <= 8; a++) {
        var shuliang = parseInt($("#numcart_item" + a).val());
        if (isNaN(shuliang)) {
            continue;
        } else {
            x = x + shuliang;
        }
    }

    $("#em2").text(x);
}

// 删除一条商品
function removeitem(e) {
    $("#cart_item" + e).remove();
    switch (e) {
        case 1:
            d1 = 0;
            break;
        case 2:
            d2 = 0;
            break;
        case 3:
            d3 = 0;
            break;
        case 4:
            d4 = 0;
            break;
        case 5:
            d5 = 0;
            break;
        case 6:
            d6 = 0;
            break;
        case 7:
            d7 = 0;
            break;
        case 8:
            d8 = 0;
            break;
        default:
            ;
            break;
    }
    zj();
    zs();
    if(d1+d2+d3+d4+d5+d6+d7+d8==0){
        $("#div1_3").css("display", "block");
        $("#cartxs").css("display", "none");
    }
}


//删除所有商品
function removeall() {
    removeitem(1)
    removeitem(2)
    removeitem(3)
    removeitem(4)
    removeitem(5)
    removeitem(6)
    removeitem(7)
    removeitem(8)
    $("#div1_3").css("display", "block");
    $("#cartxs").css("display", "none");
}

//删除选中商品
function xuanz() {
    for (var i = 1; i <= 8; i++) {
        if ($("#ch"+i).is(':checked')) {
            removeitem(i);
            console.log("if");
        }
    }
    if(d1+d2+d3+d4+d5+d6+d7+d8==0){
        $("#div1_3").css("display", "block");
        $("#cartxs").css("display", "none");
    }
}

function sdf(goodsid) {
    var a;
    switch (goodsid) {
        case 1:
            a = d1;
            break;
        case 2:
            a = d2;
            break;
        case 3:
            a = d3;
            break;
        case 4:
            a = d4;
            break;
        case 5:
            a = d5;
            break;
        case 6:
            a = d6;
            break;
        case 7:
            a = d7;
            break;
        case 8:
            a = d8;
            break;
        default:
            ;
            break;
    }
    return a;
}
// 添加一条商品到购物车
function additem(goodsid) {
    if (sdf(goodsid) == 0) {
        $("#div1_3").css("display", "none");
        $("#cartxs").css("display", "block");
        var itemdvid = "#itemdv" + goodsid;
        var title = $(itemdvid + " .title").text();
        var price = $(itemdvid + " .price").text();
        var imgurl = $("#image" + goodsid).css("background-image");
        var cart_item_id = "cart_item" + goodsid;
        switch (goodsid) {
            case 1:
                d1++;
                break;
            case 2:
                d2++;
                break;
            case 3:
                d3++;
                break;
            case 4:
                d4++;
                break;
            case 5:
                d5++;
                break;
            case 6:
                d6++;
                break;
            case 7:
                d7++;
                break;
            case 8:
                d8++;
                break;
            default:
                ;
                break;
        }

        imgurl = imgurl.split("(")[1].replace(")", "");
        var content = "<div class='cartitem' id=" + cart_item_id + ">" +
            "<div class='cartitemselect'>" +
            "<div class='selectcb' ><input type='checkbox' id='ch"+goodsid+"'></div>" +
            "<div class='cartitemimage'><img class='itemimage' src=" + imgurl + "></div>" +
            "</div>" +
            "<div class='itemshangpin'>" +
            title +
            "</div>" +
            "<div class='itemdanjia' id='itemdanjia" + goodsid + "'>" + price + "</div>" +
            "<div class='itemshuliang'>" +
            "<input class='crement' type='button' value='-'' onclick='crement(" + goodsid + ")'><input class='num' id=" + "num" + cart_item_id + " type='text' value='1' disabled='true'><input class='increment' type='button' value='+' onclick='increment(" + goodsid + ")'>" +
            "</div>" +
            "<div class='itemxiaoji' id='itemxiaoji" + goodsid + "'></div>" +
            "<div class='caozuo'><a href='javascript:removeitem(" + goodsid + ");'>删除</a></div>" +
            "</div>"
        $("#cartdisplay").append(content);
    } else {
        increment(goodsid)
    }
    itemprice(goodsid);
    zj();
    zs();
}



function chitem(goodsid) {

    $("#itemdv" + goodsid + " #favorcart").css("color", "#ffffff");
    $("#itemdv" + goodsid + " #favorcart").css("background-color", "#e4393c");
    $("#itemdv" + goodsid + " #favorcart" + " b").css("background-position", "-28px -56px")

}

function ritem(goodsid) {
    $("#itemdv" + goodsid + " #favorcart").css("color", "#000000");
    $("#itemdv" + goodsid + " #favorcart").css("background-color", "#ffffff");
    $("#itemdv" + goodsid + " #favorcart" + " b").css("background-position", "0 -57px");
}

// function c_hitem(goodsid) {

//     $("#favorcart" + goodsid).css("color", "#ffffff");
//     $("#favorcart" + goodsid).css("background-color", "#e4393c");
//     $("#favorcart" + goodsid + " b").css("background-position", "-28px -56px")

// }

// function r_item(goodsid) {
//     $("#favorcart" + goodsid).css("color", "#000000");
//     $("#favorcart" + goodsid).css("background-color", "#ffffff");
//     $("#favorcart" + goodsid + " b").css("background-position", "0 -57px");
// }

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

function abc() {
    var sure = document.getElementById('sure');
    //获取id名位sure的元素
    var cartdisplay = document.getElementById("cartdisplay"); //获取id名位list的元素
    var lis = cartdisplay.getElementsByTagName('input'); //定义一个变量为lis的元素来获取list内的input标签
    var index = 0;
    //定义index来计数

    sure.onclick = function () {
        if (sure.checked == true) {
            for (var i = 0; i < lis.length; i++) {

                lis[i].checked = true;

                index = 10;
            }


        } else {
            for (var i = 0; i < lis.length; i++) {

                lis[i].checked = false;

                index = 0;
            }
        }

    }

    //以上是对全选框做得函数(只要sure被点击 则全部被选中，否则都不选中。即sure可控制所有按钮的被选择状态)


    for (var i = 0; i < lis.length; i++) { //获取一下i的范围
        lis[i].onclick = function () { //对每个lis[i]设置一个点击函数 如果为真 index++（自增1）
            if (this.checked == true) {
                index++;
                console.log(index); //通过console.log可以实时查看当前index的值
                if (index == lis.length) { //当index的值为i(也就是说明ol下面的所有复选框被选中了)
                    sure.checked = true; //全选框将会自动被选中
                }
            } else {
                index--; //假如lis[i]没有被选中 那么index的值减一
                sure.checked = false; //只要是lis[i]没有全部被选中，sure就默认不被选中
            }
        }
    }

}

function abc2() {
    var suree = document.getElementById('suree');
    //获取id名位sure的元素
    var cartdisplay = document.getElementById("cartdisplay"); //获取id名位list的元素
    var lis = cartdisplay.getElementsByTagName('input'); //定义一个变量为lis的元素来获取list内的input标签
    var index = 0;
    //定义index来计数

    suree.onclick = function () {
        if (suree.checked == true) {
            for (var i = 0; i < lis.length; i++) {

                lis[i].checked = true;

                index = 10;
            }


        } else {
            for (var i = 0; i < lis.length; i++) {

                lis[i].checked = false;

                index = 0;
            }
        }

    }

    //以上是对全选框做得函数(只要sure被点击 则全部被选中，否则都不选中。即sure可控制所有按钮的被选择状态)


    for (var i = 0; i < lis.length; i++) { //获取一下i的范围
        lis[i].onclick = function () { //对每个lis[i]设置一个点击函数 如果为真 index++（自增1）
            if (this.checked == true) {
                index++;
                console.log(index); //通过console.log可以实时查看当前index的值
                if (index == lis.length) { //当index的值为i(也就是说明ol下面的所有复选框被选中了)
                    suree.checked = true; //全选框将会自动被选中
                }
            } else {
                index--; //假如lis[i]没有被选中 那么index的值减一
                suree.checked = false; //只要是lis[i]没有全部被选中，sure就默认不被选中
            }
        }
    }

}