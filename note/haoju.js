/*『书摘。』好句插件 v3.0.0 by fly6022*/
/* 本插件开源遵循 MIT 协议 https://book.fly6022.fun/ */

function getdata () { // 数据请求函数
    var url = ["https://book.fly6022.fun/note/haoju/1.json"]; // 数据库JSON文件路径
    var request = new XMLHttpRequest();
        request.open("GET", url, true); // 采用GET方式请求数据
        request.send(null);
        request.onload = function() {
            if (request.status == 200) {
                hdata = eval(JSON.parse(request.responseText));
                console.info("书摘 v3.0.0 (https://book.fly6022.fun/)");
                }
            if (request.status == 404){
                console.error("ERROR!请求书摘数据库时发生错误！");
                }
            }
    }

window.onload = getdata();
setTimeout("getdata()","100");

function dealdata () { // 数据处理函数
    var len=538;// 好句数量（赋值应小于等于数据库数据总量，否则会报错）
    var rnd=Math.floor(Math.random()*len);// 根据好句数量生成随机值
    document.getElementById("haoju").innerHTML = "<center>" + "“" + hdata.haoju_1[rnd].haoju + "”" + "<br>——" + hdata.haoju_1[rnd].author + "&nbsp;" + hdata.haoju_1[rnd].from + "</center>";
}

setTimeout("dealdata()","100");
setInterval("dealdata()","15000"); // 调用数据源