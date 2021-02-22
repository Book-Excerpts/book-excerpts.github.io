/*『书摘。』好句插件 by fly6022*/
/* 本插件开源遵循 MIT 协议 */

/* 书摘好句控制插件 by fly6022 */

function gethaojudata() {  
    
    var haojudata = ["src/haoju/1.js","src/haoju/2.js"]; // 枚举好句数据源

    var js = document.createElement("script"); 
     js.src = haojudata[Math.floor(Math.random()*2)]; // 生成随机数、寻找枚举对象并填充HTML标签参数
     js.type = "text/javascript";   // 引入的文件类型
     document.getElementsByTagName("body")[0].appendChild(js)  // 引入到HTML标签

}

/*function gethaojucss() { 

    var css = document.createElement("link"); 
     css.href = "https://fonts.googleapis.com/css?family=Noto+Serif+SC:200,300,400,500,600,700,900";
     css.rel = "stylesheet";
     document.getElementsByTagName("head")[0].appendChild(css)

}
*/

setTimeout("gethaojudata()","0"); // 调用数据源

/* setTimeout("gethaojucss()","0"); // 调用CSS */