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

// 点击按钮 减少数量
function crement() {
    var newnum = parseInt($("#num1").val()) - 1;
    if (newnum >= 1) {
        $("#num1").val(newnum);
    }
    itemprice();
}

// 点击按钮 增加数量
function increment() {
    var newnum = parseInt($("#num1").val()) + 1;
    $("#num1").val(newnum);
    itemprice();
}

// 计算小计内容 用单价*数量
function itemprice() {
    var danjia = parseFloat($("#itemdanjia1").text().replace("￥", ""));
    var shuliang = parseInt($("#num1").val());
    var xiaoji = danjia * shuliang;
    $("#itemxiaoji1").text("￥" + xiaoji.toFixed(2));
}

// 删除一条商品
function removeitem(e) {
    $("#cartitem" + e).remove();
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
}

// 添加一条商品到购物车
function additem1(goodsid) {
    $("#div1_3").css("display", "none");
    $("#cartxs").css("display", "block");
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
        "<input class='crement' type='button' value='-'' onclick='crement()'><input class='num' id='num1' type='text' value='1' disabled='true'><input class='increment' type='button' value='+' onclick='increment()'>" +
        "</div>" +
        "<div class='itemxiaoji' id='itemxiaoji1'></div>" +
        "<div class='caozuo'><a href='javascript:removeitem(1);'>删除</a></div>" +
        "</div>"
    $("#cartdisplay").append(content);
}

function additem2(goodsid) {
    $("#div1_3").css("display", "none");
    $("#cartxs").css("display", "block");
    var itemdvid = "#itemdv" + goodsid;
    var title = $(itemdvid + " .title").text();


    var content = "<div class='cartitem' id='cartitem2'>" +
        "<div class='cartitemselect'>" +
        "<div class='selectcb'><input type='checkbox'></div>" +
        "<div class='cartitemimage'><img class='itemimage' src='images/favor2.jpg'></div>" +
        "</div>" +
        "<div class='itemshangpin'>斐讯K2 1200M智能双频无线路由器 WIFI穿墙 PSG1218</div>" +
        "<div class='itemdanjia' id='itemdanjia1'>￥78.2</div>" +
        "<div class='itemshuliang'>" +
        "<input class='crement' type='button' value='-'' onclick='crement()'><input class='num' id='num1' type='text' value='1' disabled='true'><input class='increment' type='button' value='+' onclick='increment()'>" +
        "</div>" +
        "<div class='itemxiaoji' id='itemxiaoji1'></div>" +
        "<div class='caozuo'><a href='javascript:removeitem(2);'>删除</a></div>" +
        "</div>"

    $("#cartdisplay").append(content);
}

function additem3(goodsid) {
    $("#div1_3").css("display", "none");
    $("#cartxs").css("display", "block");
    var itemdvid = "#itemdv" + goodsid;
    var title = $(itemdvid + " .title").text();


    var content = "<div class='cartitem' id='cartitem3'>" +
        "<div class='cartitemselect'>" +
        "<div class='selectcb'><input type='checkbox'></div>" +
        "<div class='cartitemimage'><img class='itemimage' src='images/favor3.jpg'></div>" +
        "</div>" +
        "<div class='itemshangpin'>React Native移动开发实战</div>" +
        "<div class='itemdanjia' id='itemdanjia1'>￥399.00</div>" +
        "<div class='itemshuliang'>" +
        "<input class='crement' type='button' value='-'' onclick='crement()'><input class='num' id='num1' type='text' value='1' disabled='true'><input class='increment' type='button' value='+' onclick='increment()'>" +
        "</div>" +
        "<div class='itemxiaoji' id='itemxiaoji1'></div>" +
        "<div class='caozuo'><a href='javascript:removeitem(3);'>删除</a></div>" +
        "</div>"

    $("#cartdisplay").append(content);
}

function additem4(goodsid) {
    $("#div1_3").css("display", "none");
    $("#cartxs").css("display", "block");
    var itemdvid = "#itemdv" + goodsid;
    var title = $(itemdvid + " .title").text();

    var content = "<div class='cartitem' id='cartitem4'>" +
        "<div class='cartitemselect'>" +
        "<div class='selectcb'><input type='checkbox'></div>" +
        "<div class='cartitemimage'><img class='itemimage' src='images/favor4.jpg'></div>" +
        "</div>" +
        "<div class='itemshangpin'>vue.js前端开发 快速入门与专业应用</div>" +
        "<div class='itemdanjia' id='itemdanjia1'>￥35.50</div>" +
        "<div class='itemshuliang'>" +
        "<input class='crement' type='button' value='-'' onclick='crement()'><input class='num' id='num1' type='text' value='1' disabled='true'><input class='increment' type='button' value='+' onclick='increment()'>" +
        "</div>" +
        "<div class='itemxiaoji' id='itemxiaoji1'></div>" +
        "<div class='caozuo'><a href='javascript:removeitem(4);'>删除</a></div>" +
        "</div>"

    $("#cartdisplay").append(content);
};

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