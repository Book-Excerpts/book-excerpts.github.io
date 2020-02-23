/*『书摘。』好段插件 by fly6022*/
/* 本插件开源遵循 MIT 协议 */

/* 最后编辑者：fly6022 */
/*最后更新时间:2020-2-22 17:54:03*/
var len=2;//好段数量
var rnd=Math.floor(Math.random()*len);
var haoduan=new Array(len);
haoduan[0]="“不是这么简单。”他说，“这涉及生命本身。你想没想过生命是什么东西？它是禁锢在一个身体里面的东西吗？不是的。它是超越身体的存在。我们每一个，每一个副本，都是同一个生命。这就好比，好比一本书，你销毁了一本书，能说你把这本书消灭了吗？不能。只要还有纸，就还能复制一本出来，还是同一本书。书的灵魂是它的内容，和纸张没关系。即使这个世界上所有书的拷贝都消失了，这本书也还存在。”<br>—— 郝景芳 《孤独深处 - 最后一个勇敢的人》";
haoduan[1]="“风亲切地抚摸着海的绸缎似的胸膛，太阳用自己的热烈的光线温暖着它，而海，在这些爱抚的温柔力量之下睡梦似的喘息着，使得沸腾的空气充满了蒸发的盐味。淡绿的波浪跑到黄沙上来，抛掷着雪白的泡沫，它就在这滚烫的沙砾上轻轻地响着消散下来，润湿着沙土。”<br>—— 〔苏〕 高尔基 《马尔华》";
document.getElementById("haoduan").innerHTML = "<center>" + haoduan[rnd] + "</center>";
document.write("<link rel=\"stylesheet\" href=\"https:\/\/fonts.googleapis.com\/css?family=Noto+Serif+SC:200,300,400,500,600,700,900\">");
document.write ('<script type="text/javascript" src="https://js.users.51.la/20302875.js"></script>');// 浏览统计