﻿/*书摘好句 by fly6022*/
/*最后一次更新时间:2020-1-4 16:58:14*/
var len=337;//书摘数量
var rnd=Math.floor(Math.random()*len);
var txt=new Array(len);
txt[0]="“怕什么？一切要来的都得来，不必怕。”<br> —— 沈从文 《边城》";
txt[1]="“我一生渴望被人收藏好，妥善安放，细心保存。免我惊，免我苦，免我四下流离，免我无枝可依。但那人，我知，我一直知，他永不会来。 ”<br> —— 《时有女子》";
txt[2]="“孤独一人也没关系，<br>只要能发自内心地爱着一个人，<br>人生就会有救，<br>哪怕不能和他生活在一起。”<br> —— 村上春树 《1Q84》";
txt[3]="“也许我爱的已不是你，而是对你付出的热情。就像一座神庙，即使荒芜，仍然是祭坛。一座雕像，即使坍塌，仍然是神。”<br>—— 莱蒙托夫 《献给我不真实的爱人》";
txt[5]="“在这个吵得人分不清东南西北的世界里，我们手里所持有的干干净净的初衷，不多了，握好了，别丢了，明天还要赶很远的路。”<br>—— 七堇年《灯下尘》";
txt[6]="“小时候真傻，居然盼着长大。”<br>—— 丰子恺";
txt[7]="“世界上其实根本没有感同身受这回事，针不刺到别人身上，他们就不知道有多痛。”<br>—— 独木舟 《深海里的星星》";
txt[8]="“不要问丧钟为谁而鸣，它就为你而鸣。”<br>——约翰·多恩 《没有人是一座孤岛》";
txt[9]="“找一样我认为重要的东西，理想也好，爱情也好，我需要这样的东西来提醒我，我不是靠活着的惯性活着的。”<br>—— 笛安 《告别天堂》";
txt[10]="“真正有气质的淑女，从不炫耀她所拥有的一切，她不告诉人她读过什么书，去过什么地方，有多少件衣服，买过什么珠宝，因为她没有自卑感。”<br>—— 《圆舞》";
txt[11]="“能够说出的委屈，便不算委屈；能够抢走的爱人，便不算爱人。”<br>—— 《开到荼蘼》";
txt[12]="“最佳的报复不是仇恨，而是打心底发出的冷淡，干嘛花力气去恨一个不相干的人。”—— 《我的前半生》";
txt[13]="“无论做什么，记得为自己而做，那就毫无怨言。”<br>—— 《流金岁月》";
txt[14]="“能够哭就好，哭是开始痊愈的象征。”<br>—— 《绝对是个梦》";
txt[15]="“我的归宿就是健康与才干，一个人终究可以信赖的，不过是他自己，能够为他扬眉吐气的也是他自己，我要什么归宿？我已找回我自己，我就是我的归宿。”<br>—— 《胭脂》";
txt[16]="“要生活得漂亮，需要付出极大忍耐，一不抱怨，二不解释，绝对是个人才。”<br>—— 《变形记》";
txt[17]="“凡事想别人感激，那是必然要失望的。”<br>—— 《故园》 ";
txt[18]="“人为感情烦恼永远是不值得原谅的，感情是奢侈品，有些人一辈子也没有恋爱过。恋爱与瓶花一样，不能保持永久生命。”<br>—— 《城市故事》";
txt[19]="“生命像流水，这些不快的事总要过去，如果注定一辈子要这么过，再不开心也没有用。”<br>—— 《女人三十》";
txt[20]="“穷是一种心态，你若一辈子坚持自己是穷人，拥有大量金钱也救不了你。”<br>—— 《邻室的音乐》";
txt[21]="“生命从来不是公平的，得到多少，便要靠那个多少做到最好，努力的生活下去。”<br>—— 《我们不是天使》 ";
txt[22]="“你大概误会大学文凭是世界之匙，开启顺风顺水之门，这并不正确。读书目的是进修学问，拓阔胸襟。人生所有烦恼会不多不少永远追随，只不过学识涵养可以使一个人更加理智冷静地分析处理这些难题而已。” <br>—— 《花常好月常圆人长久》";
txt[23]="“幸运者做猪不幸者做人，我是个幸运的不幸者，起码我睡的象猪。”<br>—— 《天若有情》";
txt[24]="“这是一个高度竞争的社会，没有资格走的人最好不要走，否则要回头这个位置已经被人占去，再也没有空隙，闲时闹意气，一点用处也没有。”<br>—— 《曾经深爱过》";
txt[25]="“行乐及时，上天给你什么，就享受什么。千万不要去听难堪的话，一定不去见难看的人。或者是做难做的事情，爱上不应爱的人。”<br>—— 《电光幻影》";
txt[26]="“生活中无论有什么闪失，统统是自己的错，与人无尤，从错处学习改过，精益求精，直至不犯同一错误，从不把过失推诿到他人肩膀上去，免得失去学乖的机会。”<br>—— 《阿修罗》";
txt[27]="“现今还有谁会照顾谁一辈子，那是多沉重的一个包袱。所以非自立不可。”<br>—— 《不易居》";
txt[28]="“真正的才华如火焰般难以收藏，总会燎原。”<br>—— 《曾经深爱过》";
txt[29]="“人一定要受过伤才会沉默专注，无论是心灵或肉体上的创伤，对成长都有益处。”<br>—— 《花解语》";
txt[30]="“一个成熟的人往往发觉可以责怪的人越来越少，人人都有他的难处。”<br>—— 《我们不是天使》";
txt[31]="“失去的东西，其实从来未曾真正地属于你，也不必惋惜。”<br>—— 《玫瑰的故事》";
txt[32]="“何必向不值得的人证明什么，生活得更好，乃是为你自己。”<br>—— 《忽而今夏》";
txt[33]="“两个人在一起生活，岂是一项艺术，简直是修万里长城，艰苦的工程。”<br>—— 《玫瑰的故事》";
txt[34]="“有能力的人影响别人，没能力的一群受人影响。”<br>—— 《喜宝》";
txt[35]="“麻烦来找你，你才去应付它，如不，任它沉睡。”<br>—— 《花解语》 ";
txt[36]="“我要很多很多的爱。如果没有爱，那么就很多很多的钱，如果两件都没有，有健康也是好的。”<br>—— 《喜宝》";
txt[37]="“聪明人，无谓争意气。”<br>—— 《连环》";
txt[38]="“如果有人用钞票扔你，跪下来，一张张拾起，不要紧，与你温饱有关的时候，一点点自尊不算什么。”<br>—— 《喜宝》";
txt[39]="“我提着一个袋子，边走边拾。一路上拾起无数我不想要的东西。当我遇到我真正想要的东西之时，袋子已经装满了。”<br>—— 《印度墨》";
txt[40]="“一个人走不开，不过因为他不想走开；一个人失约，乃因他不想赴约，一切借口均属废话，都是用以掩饰不愿牺牲。”<br>—— 《一千零一妙方》";
txt[41]="“人们不解释的主要原因是根本不在乎对方的想法，无关重要的人，对无关重要的事有点儿误会，有什么关系，你信也好，不信也好，都于当事人生活毫无影响，何劳解释。”<br>—— 《阿修罗》";
txt[42]="“如花美眷，也敌不过似水流年。”<br>—— 《风信子》 ";
txt[43]="“人生短短数十载，最要紧是满足自己，不是讨好他人。”<br>—— 《美丽新世界》";
txt[44]="“人们往往只相信他们愿意相信的事。”<br>—— 《旧欢如梦》 ";
txt[45]="“世上没有免费午餐，无论什么，总得付出代价。”<br>——《花解语》";
txt[46]="“十年寒窗，十年苦干，再加上十足十的运气，才能有一份事业，你别把事情看得太容易，大多数人只能有一份职业，借之糊口，辛劳一生，有多少人敢说他的工作是事业？”<br>—— 《圆舞》";
txt[47]="“在金钱与爱情面前卖弄自尊，是最愚蠢的事。”<br>—— 《我的前半生》";
txt[48]="“人是那样复杂的一种动物，想了解对方根本是不可能的一件事，没有了解，又不能相处，倒不如独身。”<br>—— 《美娇袅》";
txt[49]="“做不到是你自己的事，午夜梦回，你爱怎么回味就怎么回味，但人前人后，我要你装出什么都没有发生过的样子。你可以的，我们都可以，人都是这般活下来的。”<br>—— 《叹息桥》";
txt[50]="“一生不知要捱多少批斗：力争上游是不自量力，精打细算变为太工心计，保护自身即是自私自利，简直做什么错什么，被欺压得退往墙角，不外是因为无人撑腰。”<br>——《黑羊》 ";
txt[51]="“你要改是因为你自己愿意改，不要为任何人，怕只怕那人会令你失望，你又得打回原形。”<br>—— 《不易居》";
txt[52]="“一代不如一代，一代比一代辛苦，这一代最辛苦的是已经认为辛苦是理所当然的一件事。”——《假梦真泪》";
txt[53]="“一个人要超越他的环境及出身，进步是不够的，非要进化不可，那样大业，岂能人人做到。”<br>—— 《风满楼》";
txt[54]="“一生像似太长，却又太短，待搞清楚有何心愿，二十一年已经过去，那么四十岁之前若不匆匆把所有该做或不该做之事做妥，之后也无甚作为，所以人人不够时间。”<br>—— 《红尘》";
txt[55]="“有得有失，才是人生，切忌忿忿不平。”<br>—— 《天上所有的星》 ";
txt[56]="“自由社会，自由选择，要笑得出才能笑，否则，笑比哭还难看，也不必勉强。”<br>—— 《艳阳天》";
txt[57]="“做人凡事要静；静静地来，静静地去，静静努力，静静收获，切忌喧哗。”<br>—— 《直至海枯石烂》 ";
txt[58]="“认识自己的无知是认识世界的最可靠的方法。”<br>—— 《随笔集》";
txt[59]="“大人都学坏了，上帝正考验他们呢，你还没有受考验，你应当照着孩子的想法生活。”<br>—— 《童年》";
txt[60]="“一个人并不是生来要被打败的，你尽可以把他消灭掉，可就是打不败他。”<br>—— 《老人与海》";
txt[61]="“我从没有爱过这世界，它对我也一样。”<br>—— 《拜伦诗选》";
txt[62]="“自己的行为最惹人耻笑的人，却永远是最先去说别人坏话的人。”<br>—— 《伪君子》";
txt[63]="“如果冬天来了，春天还会远吗?”<br>—— 《雪莱诗选》";
txt[64]="“对有信仰的人，死是永生之门。<br>—— 《失乐园》”";
txt[65]="“只要你是天鹅蛋，就是生在养鸡场里也没有什么关系。”<br>—— 《安徒生童话》";
txt[66]="“谁都可能出个错儿，你在一件事情上越琢磨得多就越容易出错。”<br>—— 《好兵帅克历险记》";
txt[67]="“离你越近的地方，路途越远；最简单的音调，需要最艰苦的练习。”<br>—— 《泰戈尔诗选》";
txt[68]="“悲伤使人格外敏锐。”<br>—— 《约翰·克里斯朵夫》";
txt[69]="“不要向井里吐痰，也许你还会来喝井里的水。”<br>—— 《静静的顿河》";
txt[70]="“一个人只要有意志力，就能超越他的环境。”<br>—— 《马丁·伊登》";
txt[71]="“站在痛苦之外规劝受苦的人，是件很容易的事。”<br>—— 《被缚的普罗米修斯》";
txt[72]="“世界上一切好东西对于我们，除了加以使用外，实在没有别的好处。”<br>—— 《鲁滨逊漂流记》";
txt[73]="“念书不能增添智慧。”<br>—— 《痛症楼》";
txt[74]="“人最宝贵的是生命，生命属于人只有一次。人的一生应当这样度过：当他回首往事时，不会因虚度年华而悔恨，也不会因碌碌无为而羞耻。这样，临终前他就可以自豪地说：“我已经把自己整个生命和全部精力都献给了世界上最壮丽的事业——为人类的解放而奋斗。”<br>—— 《钢铁是怎样炼成的》";
txt[75]="“凡是有甜美的鸟歌唱的地方，也都有毒蛇嘶嘶地叫。”<br>—— 《德伯家的苔丝》";
txt[76]="“盲目可以增加你的勇气，因为你无法看到危险。”<br>—— 《格列佛游记》";
txt[77]="“宽宏大量，是惟一能够照亮伟大灵魂的光芒。”<br>—— 《巴黎圣母院》";
txt[78]="“世间的一切虚伪，正像过眼云烟，只有真理才是处世接物的根据。虚伪的黑暗，必为真理的光辉所消灭。”<br>—— 《一千零一夜》";
txt[79]="“海涛拍击岩石和沙滩的声音永无休止地喧响着。几乎像一条白线似的浪花从远处奔腾而来，猛碰到岸边，发出富有韵律的激溅的声音，然后迸着泡沫，消失在沙石之间。后面一排浪花又紧接着追逐上来……”<br>—— 秦牧 《黄金海岸》";
txt[80]="“风亲切地抚摸着海的绸缎似的胸膛，太阳用自己的热烈的光线温暖着它，而海，在这些爱抚的温柔力量之下睡梦似的喘息着，使得沸腾的空气充满了蒸发的盐味。淡绿的波浪跑到黄沙上来，抛掷着雪白的泡沫，它就在这滚烫的沙砾上轻轻地响着消散下来，润湿着沙土。”<br> ——〔苏〕高尔基《马尔华》";
txt[81]="“他面前是一片壮丽宁静、碧蓝无边、像光滑的大理石一般的海。在眼光所能看到的远处，海和淡蓝色的云天相连：涟波反映着融化的太阳，现出一片片的火焰。远处连绵的群山，在晨雾中隐现着。<br>懒洋洋的波浪亲切地朝着脚边爬过来，舐着海岸的金色的沙滩。”<br>——〔苏〕奥斯特洛夫斯基《钢铁是怎样炼成的》";
txt[82]="“月亮已经升得很高了。天空和大海也显得更加清明可爱了。风，轻轻地吹着，掠过了银波闪闪的海面，带来了周围小岛上的五月的花香。在那银波粼粼的海面上，有一条显得特别明亮的银色的光带，笔直地通往月亮升起的地方，使人联想起这是一条通往月宫的大路。这大路，就好像是一片灿烂的碎银铺成的。我们的船，就沿着这条碎银铺成的大路，迎着月亮，向前飞驰前进。”<br>—— 竣青 《海燕》";
txt[83]="“春天。枯黄的原野变绿了。新绿的叶子在枯枝上长出来。阳光温柔地对每个人微笑，鸟儿在歌唱飞翔。花开放着，红的花，白的花，紫的花。星闪耀着，红的星，黄的星，白的星。蔚蓝的天，自由的风，梦一般美丽的爱情。<br>每个人都有春天。无论是你，或者是我，每个人在春天里都可以有欢笑，有爱情，有陶醉。” <br>—— 巴金 《春天里的秋天》";
txt[84]="“正是三月天，城外天显得极高，也极清。田野酥酥软软的，草发得十分嫩，其中有了蒲公英，一点一点的淡黄，使人心神儿几分荡漾了。远远看着杨柳，绿得有了烟雾，晕得如梦一般，禁不住近去看时，枝梢却没叶片，皮下的脉络是楚楚地流动绿。<br>路上行人很多，有的坐着车，或是谋事；有的挑着担，或是买卖。春光悄悄儿走来，只有他们这般儿悠闲，醺醺然。也只有他们深得这春之妙味了。” <br>—— 贾平凹 《品茶》 ";
txt[85]="“上海弄堂的激动来自于最日常的情景，这激动不是云水激荡的，而是一点一点累积起来。”<br>—— 王安忆 《长恨歌》";
txt[86]="“那个地方，在清晨的曙光里，珠子在草地的野花上颤动，珠子落在绿草上，珠子被汹狂的海浪一大把一大把地撒在沙滩上。”<br>—— 《商人》";
txt[87]="“湖边的一行棕树，向暝暗的天空撞着头；羽毛零乱的乌鸦，静悄悄地栖在罗望子的枝上，河的东岸正被乌沉沉的暝色所侵袭。”<br>—— 《雨天》";
txt[88]="“当大雨倾泻在竹叶子上好几个钟头，而我们的窗户为狂风震得格格发响的时候，我就爱独自和你坐在屋里，妈妈，听你讲童话里的特潘塔沙漠的故事。”<br>—— 《流放的地方》";
txt[89]="“你呢，无论找到什么便去做你的快乐的游戏，我呢，却把我的时间与力气都浪费在那些我永不能得到的东西上。”<br>—— 《玩具》";
txt[90]="“他知道有无穷的快乐藏在妈妈的心的小小一隅里，被妈妈亲爱的手臂所拥抱，其甜美远胜过自由。”<br>—— 《孩童之道》";
txt[91]="“我在星光下独自走着的路上停留了一会，我看见黑沉沉的大地展开在我的面前，用她的手臂拥抱着无量数的家庭，在那些家庭里有着摇篮和床铺，母亲们的心和夜晚的灯，还有年轻轻的生命，他们满心欢乐，却浑然不知这样的欢乐对于世界的价值。”<br>—— 《家庭》";
txt[92]="“我们就是这样苍老的，从时光的一端辗转到时光的另一端，请别说再见，不需要再见。”<br>——《校服的裙摆》";
txt[93]="“轻吟一句情话，执笔一幅情画。绽放一地情花，覆盖一片青瓦。共饮一杯清茶，同研一碗青砂。挽起一面轻纱，看清天边月牙。爱像水墨青花，何惧刹那芳华。”<br>—— 《水墨青花》";
txt[94]="“每个人来到世上，都是匆匆过客，有些人与之邂逅，转身忘记，有些人与之擦肩，必然回首，所有的相遇和回眸都是缘分，当你爱上了某个背影，贪恋某个眼神，意味着你已心系一段情缘。自己是缘深缘浅任谁都无从把握，聚散无由，我们都要以平常心相待。”<br>—— 《刹那缘起》";
txt[95]="“你接收了生命们从萌生到稳健成熟的种种苦恼，挣扎，失望，焦虑，怨仇和哀伤，你也容纳了它们的欢乐，得意，胜利，收获和颂赞，你告诉我：生命的过程注定是有激越到安详，由绚烂到平淡。一切情绪上的激荡终会过去，一切色彩喧哗终会消隐。如果你爱生命，你该不怕去体尝。”<br>—— 《写给秋天》";
txt[96]="“有人曾经说过，当你停下来思考自己是否爱着某个人的时候，那就表示你已经不再爱他了。”<br>—— 《风之影》";
txt[97]="“人生的缘分就像是一盏茶，瞬间又暖转凉，由浓到淡。亦可以一饮而尽。再来回味，只有萦绕在嘴里的淡淡的余香，低诉那段缘起的从前。”<br>—— 《烟月不知人事改》";
txt[98]="“钢是在烈火里燃烧、高度冷却中炼成的,因此它很坚固。我们这一代人也是在斗争中和艰苦考验中锻炼出来的，并且学会了在生活中从不灰心丧气。”<br>—— 《钢铁是怎样炼成的》";
txt[99]="“任何一个傻瓜在任何时候都能结束自己！这是最怯弱也是最容易的出路。”<br>—— 《钢铁是怎样炼成的》";
txt[100]="“领袖的逝世没有引起党的队伍涣散。.就像一棵大树一样，强有力的将根深深地扎入土壤中，即使削掉树梢，也绝不会因此而凋零。”<br>—— 《钢铁是怎样炼成的》";
txt[101]="“一个人精神是否充实,或者说活得有无意义,主要取决于他对劳动的态度。”<br>—— 《平凡的世界》";
txt[102]="“很多时候，缘分就是那样，只有陪你一起 经历过那些事的那个人，才能进驻到你的生命中，此后无论再来多少个人，错过了那阵子，就错过了一辈子。”<br>—— 《木玉成约》";
txt[103]="“不那么执着那么在意，就会比较容易快乐。”<br>—— 《清梦无痕》";
txt[104]="“树大招风，高处不胜寒，而且也估计。“第一”的头衔很风光，也很诱人，但背后确实危机四伏，随时都有人想取代你，所谓“一将功成万骨枯”，可知一代名将的名声是由多少具白骨堆砌而成的呢？”<br>——  《席婵娟》";
txt[105]="“天下没有单纯的黑与白，也没有完全的好人，只要是人总有自私自利的时候，人并没有错，错的是环境。”<br>—— 《相公，爱我吗？》";
txt[106]="“人的生命里，看似很多巧合相撞而成一件事，事实上，世间没有巧合，只有老天爷的捉弄。”<br>—— 《天官赐福》";
txt[107]="“每个人都以为自己很有耐心，自已会为某件事物某个人等待很长的一段世间，但是当他们回首的时候就会发现，原来自己的耐心只是那么短短的几个小时，又或者是短短的几天而已，这点时间和自己预计的是十年，一百年，甚至是一千年好像相差甚远，这些也许就是现实和梦想的距离。”<br>—— 《亲爱的，是你吗？》";
txt[108]="“隔绝着，隔绝着，最后变成了错过。”<br>—— 《不问花语》";
txt[109]="““你转身的一瞬，我萧条的一生”<br>“有些人的伤口是在时间中慢慢痊愈，如我”<br>“有些人的伤口是在时间中慢慢腐烂，如他”<br>“你以后会明白，如果这世界上曾经有那个人出现过，其他人都会变成将就。”他说：“我不愿意将就。”<br>—— 《何以笙箫默》”";
txt[110]="“我们继续奋力向前，逆水行舟，被不断地向后推，直至回到往昔岁月。<br>—— 《了不起的盖茨比》”";
txt[111]="“我独自在横跨过田地的路上走着，夕阳像一个守财奴似的，正藏起它的最后的金子。”<br>—— 泰戈尔 《新月集》";
txt[112]="“他的乡村的家坐落在荒凉的边上，在甘蔗田的后面，躲藏在香蕉树，瘦长的槟榔树，椰子树和深绿色的贾克果树的阴影里。”<br>—— 泰戈尔 《新月集》";
txt[113]="“我在星光下独自走着的路上停留了一会，我看见黑沉沉的大地展开在我的面前，用她的手臂拥抱着无量数的家庭，在那些家庭里有着摇篮和床铺，母亲们的心和夜晚的灯，还有年轻轻的生命，他们满心欢乐，却浑然不知这样的欢乐对于世界的价值。”<br>—— 泰戈尔 《新月集》";
txt[114]="“孩子有成堆的黄金与珠子，但他到这个世界上来，却像一个乞丐。”<br>—— 泰戈尔 《家庭》";
txt[115]="“我是波浪，你是陌生的岸。<br>我奔流而进，进，进，笑哈哈地撞碎在你的膝上。<br>世界上就没有一个人会知道我们俩在什么地方。”<br>—— 泰戈尔 《云与波》";
txt[116]="“人世间有许多奇迹，人比所有奇迹更神奇。”<br>—— 〔古希腊〕索福克勒斯 《安提戈涅》　";
txt[117]="“人是多么了不起的一件作品！理性是多么高贵，力量是多么无穷！仪表和举止是多么端正、多么出色，论行动，多么像天使！论了解，多么像天神！宇宙的精华，万物的灵长！”<br>——〔英〕莎士比亚 《哈姆雷特》";
txt[118]="“人是万物的尺度，是存在的事物存在的尺度，也是不存在的事物不存在的尺度。”<br>——〔古希腊〕 普罗泰戈拉 《著作残篇》";
txt[119]="“人是任性的动物，只能诱导，不能强迫。”<br>——〔英〕丹尼尔 《女王的阿卡迪亚》";
txt[120]="“人，实际上一切有理性者，所以存在，是由于自身是个目的，并不是只供这个或那个意志任意利用的工具；因此，无论人的行为是对自己的或是对其他有理性者的，在他的一切行为上，总要把人当作目的。”<br>——〔德〕康德 《伦理学的形而上学的基本原理》";
txt[121]="“寄蜉蝣于天地，渺沧海之一粟，哀吾生之须臾，羡长江之无穷。”—— 苏轼 《前赤壁赋》";
txt[122]="“人生天地之间，若白驹过郤，忽然而已。”<br>—— 庄周 《庄子·知北游》";
txt[123]="“所谓人生，是一刻也不停地变化着的。就是肉体生命的衰弱和灵魂生活的强化、扩大。”<br>—— 〔俄〕 列夫·托尔斯泰 《读书之轮》";
txt[124]="“吾十有五而志于学，三十而立，四十而不惑，五十而知天命，六十而耳顺，七十而从心所欲，不逾矩。”<br>—— 孔丘 《论语·为政篇》";
txt[125]="“人到二十不秀，则永不再秀；三十不壮，则永不再壮；四十不富，则永不再富；五十不慧，则永不再慧。”<br>—— 〔英〕 乔·赫伯特 《外国谚语名句选》";
txt[126]="“人生是患难与欢乐所组成。”<br>—— 陶行知 《育才十字诀》 ";
txt[127]="“人和动物的真正区别，在于他内在的、无形的力量和价值。”<br>—— 〔印〕 泰戈尔 《民族主义》";
txt[128]="“人就是宇宙，凡愿以天下为己任的人永垂不朽！”<br>—— 〔俄国〕 高尔基 《福马·高尔杰耶夫》";
txt[129]="“如果人与一个更明朗、更充实的世界合为一体的话，人就能够真正成为他自己。”<br>—— 〔德〕 雅斯贝尔斯 《什么是教育》";
txt[130]="“人是一部机器，消耗的是食物，创造的是思想。”<br>—— 〔美国〕 英格索尔 《诸神》";
txt[131]="“人生，我认为就是战斗。”<br>—— 〔法〕 罗曼·罗兰 《罗曼·罗兰回忆录》";
txt[132]="“有劳动有欢乐，有好景有坏运，这就是人生。”<br>—— 〔挪威〕 汉姆生 《大地的成长》";
txt[133]="“行人匆匆，全不知路上发生过的悲欢离合。”<br>—— 木心 《云雀叫了一整天》";
txt[134]="“也许你我终将行踪不明<br>但是你该知道我曾因你动情<br>不要把一个阶段幻想得很好<br>而又去幻想等待后的结果<br>那样的生活只会充满依赖<br>我的心思不为谁而停留<br>而心总要为谁而跳动。”<br>—— 波德莱尔 《恶之花》";
txt[135]="“当我们正在为生活疲于奔命的时候，生活已经离我们而去。”<br>—— 约翰·列侬";
txt[136]="“我回到了故国，却发现自己就像旅客。<br>”—— 卡勒德·胡赛尼 《追风筝的人》";
txt[137]="“因为我既不生活在过去，也不生活在未来，我只有现在，它才是我感兴趣的。如果你能永远停留在现在，那你将是最幸福的人。你会发现沙漠里有生命，发现天空中有星星，发现士兵们打仗是因为战争是人类生活的一部分。生活就是一个节日，是一场盛大庆典。因为生活永远是，也仅仅是我们现在经历的这一刻。”<br>——保罗·戈埃罗 《牧羊少年奇幻之旅》";
txt[138]="“都说梨花像雪，其实苹果花才像雪。雪是厚重的，不是透明的。梨花像什么呢？——梨花的瓣子是月亮做的。”<br>——汪曾祺 《人间草木》";
txt[139]="“人是一根系在动物和超人之间的绳子。也就是深渊上方的绳索。走过去危险，停在中途也危险，颤抖也危险，停住也危险。”<br>——尼采 《查拉图斯特拉如是说》";
txt[140]="“有人总说 已经晚了，实际上， 现在就是最好的时光。对于一个真正有所追求的人来说 ，生命的每个时期都是年轻的，及时的。”<br>——《人生永远没有太晚的开始》";
txt[141]="““如果我的孤独是鱼，想必连鲸鱼都会慑于其巨大与狰狞而逃之夭夭。”<br>“如果我的勇气是鱼，反射着阳光的河面都会由于其巨大与朝气而更加耀眼吧。”<br>“如果我的挫折是鱼，无论河川或大海都会由于其悲痛与滑稽而不再提供栖身之处吧。”<br>——伊坂幸太郎 《一首朋克救地球》";
txt[142]="“今夜雨，明天要见你，还会下雨么？”<br>——木心 《即兴判断》";
txt[143]="“迪伦，你不是事故中的唯一幸存者。你是唯一一个没有逃出来的人。”<br>—— 克莱儿·麦克福尔 《摆渡人》";
txt[144]="“越王歌舞今何在?<br>时有鹧鸪飞去来。”<br>—— 汤显祖 《牡丹亭》";
txt[145]="“如果你掉进了黑暗里，你能做的，不过是静心等待，直到你的双眼适应黑暗。”<br>—— 村上春树 《挪威的森林》";
txt[146]="“人类大部分的冲突和争论都源于人们过于关注自己的意见而并非去寻找问题的真正答案。”<br>—— 戴维·迈尔斯 《社会心理学》";
txt[147]="“你看那天，看那墙，看那秋海棠，今天还是星期一。”<br>—— 加西亚马尔克斯 《百年孤独》";
txt[148]="“时间不过是一条承载着过往的河流。”<br>——《水形物语》";
txt[149]="“我曾说过的这句话或许恰如其分：先前的文化将变成一堆废墟，最后变成一堆灰烬，但精神将在灰烬的上空迂回盘旋。”<br>—— 维特根斯坦 《文化与价值》";
txt[150]="“活在世上，你好像随时都在期待着，期待着有什么可以看一看的事。有时你疲疲困困，你的心休息，你的生命匍伏着像一条假寐的狗，而一到有什么事情来了，你醒豁过来，白日里闪来了清晨。”<br>—— 汪曾祺 《邂逅》";
txt[151]="“人的心声是绝对不能无视的。”<br>—— 东野圭吾 《解忧杂货店》";
txt[152]="“凡是自然的东西，都是缓慢的。太阳一点点升起，一点点落下;花一朵朵开，一瓣瓣地落下;稻谷成熟;都慢得很啊。”<br>—— 毕淑敏 《星光下的灵魂》";
txt[153]="“即使靠一枝笔沦落于赤贫之中<br>我微弱而敏感的心灵也已无法和文学分开。”<br>—— 川端康成 《独影自命》";
txt[154]="“许多年过去了，人们说陈年旧事可以被埋葬，然而我终于明白这是错的，因为往事会自行爬上来。”<br>—— 卡勒德·胡赛尼 《追风筝的人》";
txt[155]="“不知者无罪；但是，知而无为，就是一种不可否认的罪孽。”<br>—— 鲁基乌斯 《秽翼的尤斯蒂娅》";
txt[156]="“人间四月芳菲尽，山寺桃花始盛开。长恨春归无觅处，不知转入此中来。”<br>—— 白居易 《大林寺桃花》";
txt[157]="“人生的美妙之处在于迷上一样东西<br>人生苦短，少做些虚无缥缈的事<br>夜晚的灯塔一直都在，只是灯亮的时候，你才看见它。”<br>—— 刘慈欣《球状闪电》";
txt[158]="“有时候，昨天的事恍若去年的，而去年的事恍若昨天的。严重的时候，居然觉得明天的事仿佛昨天的。”<br> ——村上春树";
txt[159]="“我可不能赞成爱里面一点责任没有。我当然反对它成为一种枷锁，也不能同意它是一场宴会。”<br>—— 王小波《爱你就像爱生命》";
txt[160]="“所谓美，就是星光一闪的瞬间，两个不同的时代跨越岁月的距离突然相遇。美是编年的废除，是对时间的对抗。”<br>—— 米兰·昆德拉《笑忘录》";
txt[161]="“时方七月，绿树阴浓，水面风来，蝉鸣聒耳。日落时登土山观晚霞夕照，随意联吟，有“兽云吞落日，弓月弹流星”之句。”<br>—— 沈复 《浮生六记》";
txt[162]="“在夏天，我们吃绿豆，<br>桃，樱桃和甜瓜。<br>在各种意义上都漫长且愉快，<br>日子发出声响。”<br>—— 罗伯特·瓦尔泽 《夏天》";
txt[163]="“向死而生的意义是：当你无限接近死亡，才能深切体会生的意义。如果我能向死而生，承认并且直面死亡，我就能摆脱对死亡的焦虑和生活的琐碎。只有这样，我才能自由地做自己。”<br>—— 海德格尔 《存在与时间》";
txt[164]="“在所有应该得到，而且已经拥有的岁月里，不管是悲伤的事，或是快乐的事，全部都是真实、平等地灌溉着我。”<br>—— 奈良美智 《小星星通信》";
txt[165]="“悲观主义是知识的初级、知识的终极，谁不是凭借甘美的绝望，而过尽其自鉴自适的一生。”<br>——木心 《琼美卡随想录》";
txt[166]="“这世上肯定有某个角落，存在着能完全领会我想表达的意思的人。”<br>—— 村上春树";
txt[167]="“满天都是星星，好像一场冻结了的大雨。那时候我们一无所有，也没有什么能妨碍我们享受静夜。”<br>—— 王小波 《三十而立》";
txt[168]="“大风从东吹到西，从北刮到南，无视黑夜和黎明<br>你所说的曙光究竟是什么意思。”<br>—— 海子 《春天，十个海子》";
txt[169]="“亲近的人是不应该分开太久的。没见面的时候朝思暮想，可一旦见到，是否双方都会无可奈何地感觉到这条鸿沟呢？虽然可怕，但这也许更接近事实。”<br>—— 中岛敦 《山月记》";
txt[170]="“你知道人类最大的武器是什么吗？”<br>“是豁出去的决心。”<br>—— 伊坂幸太郎 《金色梦乡》";
txt[171]="“太剧烈的快乐与太剧烈的悲哀是有共同点的：一样需要远离人群。”<br>—— 张爱玲 《十八春》";
txt[172]="“仁和寺低声告诉我，<br>没人能在时间里赴汤蹈火。”<br>——袁绍珊《仁和寺的午后》";
txt[173]="“从没有人说过八月什么话，<br>夏天过去了，也不到秋天。<br>但我望着田垄，土墙上的瓜，<br>仍不明白生活同梦怎样的连牵。”<br>—— 林徽因 《八月的忧愁》";
txt[174]="“此刻太阳，已躲进云层。<br>我已熟习，和万物道别的眼神。”<br>—— 袁绍珊 《仁和寺的午后》";
txt[175]="“什么都很难准确表达，这就是人与人之间的完美关系难以找到的原因。”<br>—— 福楼拜《情感教育》";
txt[176]="“我们行走，<br>四周都是秋天里最后的飞鸟，<br>而岁月看不见的火焰低吟，<br>在我们身体的树林里。”<br>——菲利普·雅各泰《夏末的散步》";
txt[177]="“我们可能很难发现，在所有那些古怪的虚荣、自负、要求和敌意后面，都有一个正在受苦的自己。”<br>—— 卡伦·霍妮 《我们时代的神经症人格》";
txt[178]="“古战场的四月，黑眼眶中开一朵白蔷，碧血灌溉的鲜黄苜蓿。”<br>—— 余光中 《四月，在古战场》";
txt[179]="“她冰冷的纤手在屋顶拂弄着无数的黑键啊灰键啊，把晌午一下子奏成了黄昏。”<br>—— 余光中 《听听那冷雨》";
txt[180]="“两睫交瞬之顷，一瞥往返大千，御风而行，泠然善也，泠然善也。”<br>—— 余光中 《逍遥游》";
txt[181]="“在战争之上，你应举起自己的笔，在饥馑，在黑死病之上。星裔罗列，虚悬于永恒的一顶皇冠，多少克拉多少克拉的荣耀，可以为智者，为勇者加冕，为你加冕。如果你保持清醒，而且屹立得够久，你是空无，你是一切。无回音的大真空中，光，如是说。”<br>—— 余光中 《逍遥游》";
txt[182]="“若非群玉山头见，会向瑶台月下逢。”<br>—— 李白 《清平调·其一》";
txt[183]="“其实地上本没有路，走的人多了，也便成了路。”<br>—— 鲁迅《故乡》";
txt[184]="“此后如竟没有炬火，我便是唯一的光。”<br>—— 鲁迅 《热风》";
txt[185]="“时间就像被吞进鱼腹的铅坠，昏暗而钝重。”<br>—— 村上春树 《袭击面包店》";
txt[186]="“世间事物，宣传太过，即使真的了不起，也很难使人满足。”<br>—— 汪曾祺 《一定要，爱着点什么》";
txt[187]="“当星星不眨眼，你将为它闪耀。”<br>“When the stars don't blink, you will shine for it.”<br>—— 莎士比亚 《十四行诗》";
txt[188]="“如今的我，谈不上幸福，也谈不上不幸。<br>一切都会过去的。<br>在所谓‘人世间’摸爬滚打至今，我唯一愿意视为真理的，就只有这一句话。<br>一切都会过去的。”<br>—— 太宰治 《人间失格》";
txt[189]="“在政治上，是没有人，只有主义，没有感情，只有利害。在政治上，我们不是杀一个人，而是移去一个障碍物。”<br>—— 大仲马 《基督山伯爵》";
txt[190]="“生活是很枯燥的。我的一生就是力求不要在平庸中虚度光阴。”<br>—— 阿瑟·柯南·道尔 《福尔摩斯全集》";
txt[191]="“一条路不能回头，就是一生要走许多路，有成长之路。很多事情不能自己掌控，即使再孤单再寂寞，仍要继续走下去，不许停也不能回头。”<br>—— 《千与千寻》";
txt[192]="“夕阳，将世界像血一样染红了的，太阳的最终宿命，我还可以看多少次，这种悲哀的天色。”<br>—— 《名侦探柯南》";
txt[193]="“这个世界里没有什么规则，就算有，那也是由我创造的。”<br>—— 《黑执事》";
txt[194]="“正因为生命有限，所以才显得更重要，正因为生命有限，所以才更应该努力不懈。”<br>—— 《名侦探柯南》";
txt[195]="“虚伪的眼泪会伤害别人，虚伪的笑会伤害自己！”<br>——《叛逆的鲁鲁修》";
txt[196]="“与输赢没关系，这是愿望。”<br>—— 《叛逆的鲁鲁修》";
txt[197]="“曾经发生过的事情不可能忘记，只不过是想不起而已。”<br>—— 《千与千寻》";
txt[198]="“只是生活着，悲伤的事物就会逐渐累积。”<br>—— 《秒速5厘米》";
txt[199]="“我要用什么样的速度，才能与你相遇。”<br>—— 《秒速5厘米》";
txt[200]="“一朵花坠落的速度，连时间都放慢了脚步。”<br>—— 《秒速5厘米》";
txt[201]="“人生就是一列开往坟墓的列车，路途上会有很多站，很难有人可以自始至终陪着走完。当陪你的人要下车时，即使不舍也该心存感激，然后挥手道别。”<br>—— 《千与千寻》";
txt[202]="“眼泪这东西啊，是流出来就能把辛酸和悲伤都冲走的好东西。可等你们长大成人了就会明白，人生还有眼泪也冲刷不干净的巨大悲伤，还有难忘的痛苦让你们即使想哭也不能流泪，所以真正坚强的人，都是越想哭反而笑得越大声，怀揣着痛苦和悲伤，即使如此也要带上它们笑着前行。”<br>—— 《银魂》";
txt[203]="“我一直以来都弄不明白，为什么不管做了多么明智合理的选择，在结果出来之前，谁都无法知道它的对错。到头来我们被允许做的，只是坚信那个选择，尽量不留下后悔而已。”<br>—— 《进击的巨人》";
txt[204]="“只要有你在，我就无所不能。”<br>—— 《进击的巨人》";
txt[205]="“绝望是虚假的，但希望亦是如此。”<br>—— 《东京食尸鬼》";
txt[206]="“不是强者必胜，而是胜者必强，他们比我们强，仅此而已。”<br>—— 《黑子的篮球》";
txt[207]="“人永远不知道，谁哪次不经意的跟你说了再见之后，就真的不会再见了。”<br>—— 《千与千寻》";
txt[208]="“不相信自己的人，连努力的价值都没有。”<br>—— 《火影忍者》";
txt[209]="“只管把目标定在高峰，人家要笑就让他去笑！”<br>—— 《海贼王》";
txt[210]="“人因为有难忘的记忆而变得坚强，这就是所谓的成长吧。”<br>—— 《火影忍者》";
txt[211]="“不管前方的路有多苦，只要走的方向正确，不管多么崎岖不平，都比站在原地更接近幸福。”<br>—— 《千与千寻》";
txt[212]="“时间能冲淡痛苦，但是，我并不想用时间来治愈一切。”<br>—— 《黑执事》";
txt[213]="“你既然已经做出了选择，又何必去问为什么选择。”<br>——《秦时明月》";
txt[214]="“我只能送你到这里了，剩下的路你要自己走，不要回头。”<br>—— 《千与千寻》";
txt[215]="“谁都不可能和谁在一起一辈子。人就是这样，必须去习惯失去。”<br>—— 《秒速5厘米》";
txt[216]="“我不是天生的王者，但我骨子里流动着不让我低头的血液。”<br>—— 《海贼王》";
txt[217]="“不管夜晚多么黑暗，黎明总是会到来。”<br>—— 《叛逆的鲁鲁修》";
txt[218]="“将爱形容为美丽的，是不了解爱的人；将爱形容为丑陋的，是自以为了解爱的人。”<br>—— 《死神》";
txt[219]="“有阳光的地方就会有阴影，所以有阴影的地方也一定会有阳光。绝望的颜色越是浓厚，在哪里也一定会存在耀眼的希望之光。”<br>—— 《银魂》";
txt[220]="“只要努力的飞翔，即便是再弱小的蝴蝶也能飞得更高！”<br>—— 《侠岚》";
txt[221]="“在无限延伸的梦想后面，穿越冷酷无情的世界！”<br>——《数码宝贝》";
txt[222]="“我不再装模作样地拥有很多朋友，而是回到了孤单之中，以真正的我开始了独自的生活。有时我也会因为寂寞而难以忍受空虚的折磨，但我宁愿以这样的方式来维护自己的自尊，也不愿以耻辱为代价去换取那种表面的朋友。”<br> —— 余华 《在细雨中呐喊》";
txt[223]="“谁在夜色中都惶恐，走在喧嚣中都寂寞。”<br>—— 《东京食尸鬼》";
txt[224]="“小时候，天空分明触手可及，于是喜欢上雨，因它带来天空的气味。”<br>—— 《言叶之庭》";
txt[225]="“狂妄也是要有本事的！而我恰好有！”<br>—— 《果宝特攻》";
txt[226]="“如果什么都不做，那就什么也不会开始。”<br>—— 《元气少女缘结神》";
txt[227]="“我不愿忽略自己力所能及的事，之后再后悔。”<br>—— 《夏目友人帐》";
txt[228]="“了解自身的弱小，人就可以变得无比坚强和善良。”<br>——《妖精的尾巴》";
txt[229]="“鲁鲁修，你知道雪为什么是白色的吗？因为它忘记了自己曾经的颜色。”<br>—— 《Code Geass 反叛的鲁鲁修》";
txt[230]="“为了再次起誓，我要变得更强。”<br>—— 《海贼王》";
txt[231]="“我时时刻刻想着你，但请你让我继续追求梦想。”<br>—— 《解忧杂货店》";
txt[232]="“朝闻道，夕死可矣。”<br>—— 《论语》";
txt[233]="“他在海岛仙府门外的仙树下站着，向我轻轻一笑，恍若东风拂过，三千桃花灼灼开放。”<br>—— 《桃花债》";
txt[234]="“放弃不难，但坚持一定很酷。”<br>—— 东野圭吾 《解忧杂货店》";
txt[235]="“我只是在静静地等待，等到天起凉风，日影飞去的时候，你答应过，你将转回来，带我同去。”<br>—— 三毛 《梦里花落知多少》";
txt[236]="“山河岁月，绵绵地来，匆匆地去。什么？什么人在赶路？不会是我。我的路，在去年的梦里，已被指定是这一条了，我只是顺着路在带着我远去罢了。”<br>—— 三毛 《梦里花落知多少》";
txt[237]="“这是我们的宿命。我们平时是瘦弱难看、不起眼的小人物，但是在某些时候我们可以和别人不一样。我不知道你平时受到怎样的嘲笑，但不管什么时候，你都可以选择你的独特。选择自己是一种勇敢。”<br>—— 郝景芳 《孤独深处》";
txt[238]="“当你的自由和世界的自由冲突，你就不自由。你的自由不重要，得到自由的办法是融入世界的大自由。这是世界的法则。”<br>—— 郝景芳 《孤独深处》";
txt[239]="“我们该怎样说「再见」？<br>就像我们当初见面时说「你好」。”<br>—— 电影 《末代皇帝》";
txt[240]="“不要说死亡的烛光何须倾倒，<br>生命依然生长在忧愁的河水上，<br>月光照着月光，月光普照，<br>今夜美丽的月光合在一起流淌。”<br>—— 海子 《月光》";
txt[241]="“梦想已从大地上消失，我们为了寻求安慰，对着几万亿英里的天空——向与宇宙之夜相关的第二个地球，转移光辉灿烂的梦想。”<br>—— 芥川龙之介 《罗生门》";
txt[242]="“独自出生，独自离世，人都是孤独的存在，不过，一个人无法生存也是事实。”<br>—— 日剧 《卖房子的女人》";
txt[243]="“人们都希望被别人需要，却往往事与愿违，一点一点放弃自己的想法，想哭的时候一笑了之，或许，人们都是这样生活下去的。”<br>—— 日剧 《逃避虽可耻但有用》";
txt[244]="“我身体里的火车从来不会错轨<br>所以允许大雪，风暴，泥石流，和荒谬”<br>—— 余秀华 《摇摇晃晃的人间》";
txt[245]="“不可以过度期待，所谓奇迹，就是发生概率低于万分之一的事。”<br>—— 东野圭吾 《拉普拉斯的魔女》";
txt[246]="“因为不知道未来如何，人类才能拥有梦想。”<br>—— 东野圭吾 《拉普拉斯的魔女》";
txt[247]="“最是人间留不住，朱颜辞镜花辞树。”<br>—— 王国维 《蝶恋花·阅尽天涯离别苦》";
txt[248]="“满堂花醉三千客，一剑霜寒十四州。”<br>—— 贯休 《献钱尚父》";
txt[249]="“我是人间惆怅客，知君何事泪纵横，断肠声里忆平生。”<br>—— 纳兰容若 《浣溪沙·残雪凝辉冷画屏》";
txt[250]="“不是这么简单。”他说，“这涉及生命本身。你想没想过生命是什么东西？它是禁锢在一个身体里面的东西吗？不是的。它是超越身体的存在。我们每一个，每一个副本，都是同一个生命。这就好比，好比一本书，你销毁了一本书，能说你把这本书消灭了吗？不能。只要还有纸，就还能复制一本出来，还是同一本书。书的灵魂是它的内容，和纸张没关系。即使这个世界上所以书的拷贝都消失了，这本书也还存在。”<br>—— 郝景芳 《孤独深处 - 最后一个勇敢的人》";
txt[251]="“每个人心里都有一团火，路过的人只看到烟，但总有一个人，总有那么一个人能看到这团火，然后走过来，陪我一起。我带着我的热情，我的冷漠，我的狂暴，我的温和，以及对爱情毫无理由的相信，走得上气不接下气，我结结巴巴地对她说，你叫什么名字。从你叫什么名字开始，后来，有了一切。”<br>—— 梵高 《给提奥的信》";
txt[252]="“天才和我们之间的距离仅有一步之遥，但是为了理解这一步，我们必须要知道，一百里路我们走了九十九里，那只是走了一半这样的超数学道理。”<br>—— 芥川龙之介 《罗生门》";
txt[253]="“我们趋行在这个亘古的旅途，在坎坷中奔跑，在挫折中涅槃，忧愁，缠满全身。痛苦飘洒一地。我们累却无处从歇，我们苦却无法回避。”<br>—— 马尔克斯 《百年孤独》";
txt[254]="“无畏来源于无知。弱小和无知不是生存的障碍，傲慢才是。”<br>—— 刘慈欣 《三体》";
txt[255]="“当你凝视深渊时，深渊也在凝视着你。”<br>—— 尼采 《善恶的彼岸》";
txt[256]="“分携如昨，人生到处萍漂泊。偶然相聚还离索。多病多愁，须信从来错。尊前一笑休辞却，天涯同是伤沦落。故山犹负平生约。西望峨嵋，长羡归飞鹤。”<br>—— 苏轼 《醉落魄》";
txt[257]="“尊酒何人怀李白，草堂遥指江东。珠帘十里卷香风。花开又花谢，离恨几千重。轻舸渡江连夜到，一时惊笑衰容。语音犹自带吴侬。夜阑对酒处，依旧梦魂中。”<br>—— 苏轼 《临江仙》";
txt[258]="“云何，当此去，人生底事，来往如梭。待闲看，秋风洛水清波。”<br>—— 苏轼 《满庭芳》";
txt[259]="此插件来自『书摘。』好句摘录（https://book.fly6022.fun）<br>制作者: fly6022（https://fly6022.fun/）";
txt[260]="“恰如灯下，故人万里，归来对影。口不能言，心下快活自省。”<br>—— 黄庭坚 《品令·茶词》";
txt[261]="“自从我们相遇的那一刻，你是我白天黑夜不落的星。”<br>—— 莱蒙托夫 《乌黑的眼睛》";
txt[262]="“欣赏者心中自有朝霞，有露珠和常年盛开的花朵。漠视者冰结心城，海水枯竭，丛生荒芜。”<br>—— 培根";
txt[263]="“做孩子时感到无聊，盼望着长大。长大后又向往着返回童年。我们浪费自己的健康去赢得个人的财富，然后又浪费自己的财富去重建自身的健康。我们焦虑地憧憬未来，忘记了眼前的生活。活得既不是为了现在也不是为了将来。我们活得似乎永远不会死，我们死得也好像从来没活过。”<br>—— 莱辛 《幸存者回忆录》";
txt[264]="“大部分的痛苦，都是不肯离场的结果。没有命定的不幸，只有死不放手的执着。”<br>—— 素黑";
txt[265]="“人生应当这样过：用前半生的时间去得到一些东西，再用后半生的时间一件件失去。一定要留一些时间给失去。抛物线是最美的，自由落体的闭幕，那才是一个瓜熟蒂落。我只是想劝你放慢脚步，劝你歇一歇，劝你温存片刻。你是抓得太多，面目才不觉狰狞起来。”<br>—— 张悦然 《赠言》";
txt[266]="“色如聚沫，痛如浮泡。<br>皆悉空寂，无有真正。”<br>—— 《眠空》";
txt[267]="“彻底的圆满只不过是彻底的无路可走。”<br>—— 史铁生";
txt[268]="“从此无心爱良夜，任他明月下西楼。”—— 李益 《写情》";
txt[269]="“世间好物不坚牢，彩云易散琉璃脆。”—— 白居易 《简简吟》";
txt[270]="“一切都明明白白，<br>但我们仍匆匆错过，<br>因为你相信命运，<br>因为我怀疑生活。”<br>—— 顾城 《错过》";
txt[271]="“悲剧将人生的有价值的东西毁灭给人看，喜剧将那无价值的撕破给人看。”<br>—— 鲁迅";
txt[272]="“羁鸟恋旧林，池鱼思故渊。”<br>—— 陶渊明 《归园田居》";
txt[273]="“一川明月疏星，浣纱人影婀婷。”<br>—— 辛弃疾 《清平乐·博山道中即事》";
txt[274]="“七八个星天外，两三点雨山前。旧时茅店社林边，路转溪桥忽见。”<br>—— 辛弃疾 《西江月·夜行黄沙道中》";
txt[275]="“山中何事？松花酿酒，春水煎茶。”<br>—— 张可久 《人月圆 山中书事》";
txt[276]="“愿为西南风，长逝入君怀。”<br>—— 曹植 《明月上高楼》";
txt[277]="“后来春雨落汴京，只君一人雨中停。”<br>—— 黄仁宇 《汴京残梦》";
txt[278]="“如今想起来，我真是空费了自己那一点仅有的才能，徒然在口头上卖弄着什么“人生一事不为则太长，欲为一事则太短”的警句，可事实是，唯恐暴露才华不足的卑怯的畏惧，和厌恶钻营刻苦的惰怠，就是我的全部了。”<br>—— 中岛敦 《山月记》";
txt[279]="“我与世界相遇，我自与世界相识，我自不辱使命，使我与众生相聚。”<br>——剑桥大学 校训";
txt[280]="“天下只有两种人。比如一串葡萄到手，一种人挑最好的先吃，另一种人把最好的留到最后吃。照例第一种人应该乐观，因为他每吃一颗都是吃剩的葡萄里最好的；第二种人应该悲观，因为他每吃一颗都是吃剩的葡萄里最坏的。不过事实却适得其反，缘故是第二种人还有希望，第一种人只有回忆。”<br>—— 钱钟书 《围城》";
txt[281]="“对于丑人，细看是一种残忍。”<br>—— 钱钟书 《围城》";
txt[282]="“流言这东西，比流感蔓延的速度更快，比流星所蕴含的能量更巨大，比流氓更具有恶意，比流产更能让人心力憔悴。”<br>—— 钱钟书 《围城》";
txt[283]="“婚姻是一座围城，城外的人想进去，城里的人想出来。”<br>—— 钱钟书 《围城》";
txt[284]="“我爱的人，我要能够占领他整个生命，他在碰见我之前，没有过去，留着空白等待我。”<br>—— 钱钟书 《围城》";
txt[285]="“爱情多半是不成功的，要么苦于终成眷属的厌倦，要么苦于未能终成眷属的悲哀。”<br>—— 钱钟书 《围城》";
txt[286]="“不受教育的人，因为不识字，上人的当；受教育的人，因为识了字，上印刷品的当。”<br>—— 钱钟书 《围城》";
txt[288]="“要人知道自己有个秘密，而不让人知道是个什么秘密，等他们问，要他们猜，这是人性的虚荣。”<br>—— 钱钟书 《围城》";
txt[289]="“忠厚老实人的恶毒，像饭里的沙砾或者出骨鱼片里未淨的刺，会给人一种不期待的伤痛。”<br>—— 钱钟书 《围城》";
txt[290]="“好东西不用你去记，它自会留下很深的印象。”<br>—— 钱钟书  《围城》";
txt[291]="“胆小鬼连幸福都会害怕，碰到棉花都会受伤，有时还被幸福所伤。”<br>—— 太宰治 《人间失格》";
txt[292]="“我知道有人是爱我的，但我好像缺乏爱人的能力。”<br>—— 太宰治 《人间失格》";
txt[293]="“为你<br>千千万万遍”<br>—— 《追风筝的人》";
txt[294]="“面对大河我无限惭愧<br>我年华虚度 空有一身疲倦<br>和所有以梦为马的诗人一样<br>岁月易逝 一滴不剩”<br>—— 海子 《以梦为马》";
txt[295]="“我们终此一生，就是要摆脱他人的期待，找到真正的自己。”<br>—— 《无声告白》";
txt[296]="“曾经那个愿为我千千万万次捡风筝的人已经逝去，人生中错过了就不会再得到，也许我们会忏悔，会救赎，但这些似乎都已经晚了。”<br>—— 《追风筝的人》";
txt[297]="“如果打算爱一个人，你要想清楚，是否愿意为了他，放弃如上帝般自由的心灵，从此心甘情愿有了羁绊。”<br>—— 《了不起的盖茨比》";
txt[298]="“星光不问赶路人，时光不负有心人。<br>这个世界上真的有人在过着你想要的生活。<br>而那些人大都曾隐忍过你尚未经历的挫折。”<br>—— 大冰 《我不》";
txt[299]="“只知道我们总是在战胜空间，却对时间无能为力。”<br>—— 陶立夏 《分开旅行》";
txt[300]="“我想成为一个温柔的人，因为曾被温柔的人那样对待，深深了解那种被温柔相待的感觉。”<br>—— 《夏目友人帐》";
txt[301]="“对敏锐的观察者来说，哪怕是最随意的挥洒，也隐藏着灵魂最深处的秘密。”<br>—— 《月亮与六便士》";
txt[302]="“月亮照回湖心<br>野鹤奔向闲云<br>我步入你<br>一场大雪便封住了世间万物”<br>—— 仓央嘉措";
txt[303]="“我始终相信<br>走过平湖烟雨 岁月山河<br>那些历尽劫数 尝遍百味的人<br>会更加生动而干净”<br>—— 白落梅";
txt[304]="“你可知这百年 爱人只能陪半途<br>你且信这世上 至多好景可虚度<br>你且听这荒唐 春秋走来一步步<br>你且迷这风浪 永远二十赶朝暮”<br>—— 《记昨日书》";
txt[305]="“一切都明明白白<br>但我们仍匆匆错过<br>因为你相信命运<br>因为我怀疑生活”<br>—— 顾城";
txt[306]="“自从我们相遇的那一刻，你是我白天黑夜不落的星。”<br>—— 莱蒙托夫 《乌黑的眼睛》";
txt[307]="“我不知道世间有什么是确定不变的<br>我只知道<br>只要一看到星星<br>我就会做梦”<br>—— 梵高";
txt[308]="“茫茫人生，譬如荒野。”<br>—— 樱庭一树 《荒野》";
txt[309]="“唯尽力自持，方不致癫狂。”<br>—— 《人间失格》";
txt[310]="“没有了音乐就退化了耳朵<br>没有了戒律就灭掉了烛火<br>没有了剃刀就封锁语言<br>没有了心脏却活了九年”<br>—— 《路边野餐》";
txt[311]="“天也欢喜，地也欢喜，人也欢喜。欢喜你遇到了我，我遇到了你。当时是你心里有了一个我，我心里有了一个你。从今后是朝朝暮暮在一起，地久天长，同心比翼，相敬相爱相扶持，偶然发点小脾气也要规劝勉励。在工作中学习，在服务上努力，追求真理，抗战到底，为着大我，忘却小己。直等到最后胜利，再从容生一两个孩子，一半儿像我，一半儿像你。”<br>—— 陶行知";
txt[312]="“我想让你见识一下什么是真正的勇敢，而不是错误地认为一个人手里拿把枪就是勇敢。勇敢就是，在你还没开始的时候就知道自己注定会输，但依然义无反顾地去做，并且不管发生什么都坚持到底。一个人很少能赢，但也总会有赢的时候。”<br>—— 《杀死一只知更鸟》";
txt[313]="“孤独不是受到了冷落和遗弃，而是无知己，不被理解。真正的孤独者不言孤独，偶尔作些长啸，如我们看到的兽。”<br>—— 贾平凹";
txt[314]="“一生只爱一次的人是肤浅的，他们把那叫做忠贞不渝，我却叫做习惯性懒惰或是缺乏想象力。情感生活的忠贞不渝就如同智力生活的一成不变一样，简直是承认失败。”<br>—— 王尔德";
txt[315]="“吾寓于生，吾寓于死<br>吾固重生，尤重于死<br>生有时限，死无穷期”<br>—— 小仲马";
txt[316]="“钟敲响十二下的时候，荷西将我抱在手臂里，说“快许十二个愿望”。我心里重复着十二句同样的话：‘但愿人长久，但愿人长久，但愿人长久……’”<br>—— 三毛";
txt[317]="“我们根本就是自己秘密与谎言的化身，只要真相令人不悦，我们就谎话连篇，直到我们忘记这件事。”<br>—— 《切尔诺贝利》";
txt[318]="“悲莫悲生离别，乐莫乐新相识。”<br>—— 辛弃疾《水调歌头》";
txt[319]="“屏弃于温暖之外，满足于荒凉的寂寞。有孤独，才能保持永远澄澈。”<br>—— 杜运燮 《井》";
txt[320]="“生，老，病，死，都没有什么表示，生了就任其自然的长大，长大就长大，长不大就算了。”<br>—— 萧红 《呼兰河传》";
txt[321]="“一位老人辞世了，就像一座图书馆被烧毁了。”<br>—— 贝纳尔·韦尔贝";
txt[322]="“月亮照在路上，像是撒满了盐。”<br>—— 余华";
txt[323]="“世上没有事是有意义的，都是人赋予的，而坚持本身就是一个无比闪亮的意义。”<br>—— 陈铭";
txt[324]="“世上的事情都经不起推敲，一推敲，哪一件都藏着委屈。”<br>—— 刘震云  《一句顶一万句》";
txt[325]="“不是每个游荡的人都迷了路，或许他正在追逐一个你无法想象的梦。”<br>—— 《小丑》";
txt[326]="“黄金的体积每年要磨去区一干四百万分之一，这就是所谓的损耗，从此全世界流通的十四亿每年要损耗一百万，这一百万黄金化作灰尘，飞扬飘荡，变成轻的能够吸入呼出的原子，这种吸入剂像重担样，压在人的良心上，跟灵魂起了化学作用。富人变得傲慢，穷人变得凶狠。”<br>—— 雨果";
txt[327]="“我要做远方忠诚的儿子和物质的短暂情人。”<br>—— 海子";
txt[328]="“你看着一个人死还不够，还想站的更近吗？”<br>—— 《绿里奇迹》";
txt[329]="“生者流离，死者不作，坠欢莫拾，酒痕在衣。”<br>—— 李叔同 《西湖夜游记》";
txt[330]="“把小蛋糕敲晕了再吃,安抚可乐等气消了再喝,夹心饼干劝分了再泡牛奶,讲个笑话把冰块气哭了再咬。”<br>—— 《菊次郎的夏天》";
txt[331]="“世上最没用的三种教育方法就是：讲道理、发脾气、刻意感动。”<br>—— 卢梭";
txt[332]="“恐婚不是病，劝别人结婚的人才有病。”<br>—— 李诞";
txt[333]="“一个人的品行是从小养成的。”<br>—— 《怦然心动》";
txt[334]="“一切正好，有看云的闲情，也有犹热的肝胆，有尚未收敛也不想收敛的遭人妒的地方，也有平凡敦实容许别人友爱的余裕，有高龄父母仍容我娇痴无忌如稚子，也有广大的国家容我去展怀一抱如母亲，有霍然而怒的盛气，也有湛然一笑的淡然。”<br>—— 张晓风";
txt[335]="“两个人如果读过同一本书，他们之间就有了一条纽带。”<br>—— 爱默生";
txt[336]="“我最近真的认为，要把一天的义务，当作一辈子的义务，严肃地努力实践，不可敷衍了事。对于喜欢的人，也要尽早不加粉饰地告诉对方。肮脏的算计就别做了。无悔地坦率行动。剩下的，只能交给天意。”<br>—— 太宰治";
document.write(txt[rnd]);
document.write ('<script type="text/javascript" src="https://js.users.51.la/20302875.js"></script>');