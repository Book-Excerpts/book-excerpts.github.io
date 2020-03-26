﻿/*『书摘。』诗词插件 by fly6022*/
/* 本插件开源遵循 MIT 协议 */

/* 最后编辑者：fly6022 */
/*最后更新时间:2020-2-14 13:38:44*/
function shici() {
    var len=27;//诗词数量
    var rnd=Math.floor(Math.random()*len);
    var shici=new Array(len);
        shici[0]="“一春梦雨常飘瓦，尽日灵风不满旗。”<br>—— 唐代：李商隐 《重过圣女祠》";
        shici[1]="“风丝袅，水浸碧天清晓。一镜湿云青未了，雨晴春草草。”<br>—— 清代：纳兰性德 《谒金门·风丝袅》";
        shici[2]="“巴水忽可尽，青天无到时。”<br>—— 唐代：李白 《上三峡》";
        shici[3]="“天生我材必有用，千金散尽还复来。”<br>—— 唐代：李白 《将进酒》";
        shici[4]="“明月几时有？把酒问青天。”<br>—— 宋代：苏轼 《水调歌头·明月几时有》";
        shici[5]="“山不在高，有仙则名。水不在深，有龙则灵。”<br>—— 唐代：刘禹锡 《陋室铭》";
        shici[6]="“俱往矣，数风流人物，还看今朝。 ”<br>—— 近现代：毛泽东 《沁园春·雪》";
        shici[7]="“莫等闲，白了少年头，空悲切！”<br>—— 宋代：岳飞 《满江红·写怀》";
        shici[8]="“国破山河在，城春草木深。”<br>—— 唐代：杜甫 《春望》";
        shici[9]="“春江潮水连海平，海上明月共潮生。”<br>—— 唐代：张若虚 《春江花月夜》";
        shici[10]="“问君能有几多愁？恰似一江春水向东流。”<br>—— 五代：李煜 《虞美人·春花秋月何时了》";
        shici[11]="“借问酒家何处有，牧童遥指杏花村。 ”<br>—— 唐代：杜牧 《清明》";
        shici[12]="“自三峡七百里中，两岸连山，略无阙处。”<br>—— 南北朝：郦道元 《三峡》";
        shici[13]="“胜日寻芳泗水滨，无边光景一时新。”<br>—— 宋代：朱熹 《春日》";
        shici[14]="“人生自古谁无死？留取丹心照汗青。”<br>—— 宋代：文天祥 《过零丁洋》";
        shici[15]="“水何澹澹，山岛竦峙。”<br>—— 两汉：曹操 《观沧海》";
        shici[16]="“最爱湖东行不足，绿杨阴里白沙堤。”<br>—— 唐代：白居易 《钱塘湖春行》";
        shici[17]="“恰同学少年，风华正茂；书生意气，挥斥方遒。”<br>—— 近现代：毛泽东 《沁园春·长沙》";
        shici[18]="“空山新雨后，天气晚来秋。”<br>—— 唐代：王维 《山居秋暝》";
        shici[19]="“会当凌绝顶，一览众山小。”<br>—— 唐代：杜甫 《望岳》";
        shici[20]="“何夜无月？何处无竹柏？但少闲人如吾两人者耳。”<br>—— 宋代：苏轼 《记承天寺夜游》";
        shici[21]="“羁鸟恋旧林，池鱼思故渊。”<br>—— 陶渊明 《归园田居》";
        shici[22]="“一川明月疏星，浣纱人影婀婷。”<br>—— 辛弃疾 《清平乐·博山道中即事》";
        shici[23]="“七八个星天外，两三点雨山前。旧时茅店社林边，路转溪桥忽见。”<br>—— 辛弃疾 《西江月·夜行黄沙道中》";
        shici[24]="“山中何事？松花酿酒，春水煎茶。”<br>—— 张可久 《人月圆 山中书事》";
        shici[25]="“愿为西南风，长逝入君怀。”<br>—— 曹植 《明月上高楼》";
        shici[26]="“后来春雨落汴京，只君一人雨中停。”<br>—— 黄仁宇 《汴京残梦》";
    document.getElementById("shici").innerHTML = "<center>" + shici[rnd] + "</center>";
}

setTimeout("shici()","0");setInterval("shici()","10000"); // 计时器，单位毫秒

document.write("<link rel=\"stylesheet\" href=\"https:\/\/fonts.googleapis.com\/css?family=Noto+Serif+SC:200,300,400,500,600,700,900\">"); // 谷歌字体调用
document.write ('<script type="text/javascript" src="https://js.users.51.la/20302875.js"></script>'); // 浏览统计