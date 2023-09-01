import locationRawData from "locationRawData";
const neighborRawDataV1 = [
  {
    "name": "維克多",
    "description": "鎮長",
    "locations": ['鎮公所'],
    "first": [
      "珠寶哈密瓜",
      "發光手錶"
    ],
    "second": [
      "哈密瓜",
      "拌飯",
      "松茸",
      "玉蜀黍",
      "白米",
      "哈密瓜果醬"
    ],
    "third": [
      "花香香水",
      "春風行進曲",
      "珠寶戒指",
      "營火",
      "氣派的路燈",
      "豪華路燈",
      "木製長椅",
      "鐵製長椅"
    ],
    "fourth": [
      "蕪菁種子",
      "哈密瓜種子",
      "稻米",
      "牛奶",
      "石頭",
      "玻璃石"
    ],
    "isMarriageCandidate": false,
    "gender": "M"
  },
  {
    "name": "雅科波",
    "description": "橄欖鎮吉祥物/鎮長兒子",
    "locations": ['鎮公所'],
    "first": [
      "鑽石",
      "巨大海鮮披薩",
      "發光手錶"
    ],
    "second": [
      "義大利漁夫麵",
      "青醬義大利麵",
      "披薩",
      "蔬食披薩",
      "珠寶墜子"
    ],
    "third": [
      "果香香水",
      "魅惑香水",
      "春風三月",
      "炎帝華爾茲",
      "珠寶戒指"
    ],
    "fourth": [
      "高麗菜",
      "洋蔥",
      "雞蛋",
      "牛奶"
    ],
    "isMarriageCandidate": false,
    "gender": "M"
  },
  {
    "name": "葛爾克",
    "description": "船長",
    "locations": ['動物商店'],
    "first": [
      "心型菠菜",
      "頂級雞蛋",
      "頂級烏骨雞蛋",
      "雞蛋沙拉"
    ],
    "second": [
      "雞蛋",
      "烏骨雞蛋",
      "羊毛毛料",
      "馬鈴薯沙拉",
      "荷包蛋"
    ],
    "third": [
      "羊毛",
      "頂級羊毛",
      "綿羊線"
    ],
    "fourth": [
      "蘿蔔種子",
      "馬鈴薯種子",
      "洋蔥",
      "牛奶"
    ],
    "isMarriageCandidate": false,
    "gender": "M"
  },
  {
    "name": "奈吉爾",
    "description": "木匠",
    "locations": ['木工店'],
    "first": [
      "發光手錶"
    ],
    "second": [
      "果醬三明治",
      "蔬菜三明治",
      "雞蛋三明治",
      "鮪魚三明治"
    ],
    "third": [
      "木材加工機",
      "絲線加工機",
      "金屬塊加工機",
      "磚頭加工機",
      "巨型木材製造機"
    ],
    "fourth": [
      "毛料製造機",
      "布料加工機",
      "優格加工機"
    ],
    "isMarriageCandidate": false,
    "gender": "M"
  },
  {
    "name": "傑森",
    "description": "旅店老闆",
    "locations": ['旅館＆咖啡廳'],
    "first": [
      "老舊的羅盤",
      "老舊的地圖"
    ],
    "second": [
      "扶桑花",
      "椰子",
      "餅乾",
      "杏仁餅乾",
      "珠寶墜子",
      "時髦手環",
      "發光手錶"
    ],
    "third": [
      "花香香水",
      "百花香水",
      "果香香水",
      "春風進行曲",
      "珠寶戒指"
    ],
    "fourth": [
      "哈密瓜種子",
      "扶桑花種子",
      "美式鬆餅",
      "布丁"
    ],
    "isMarriageCandidate": false,
    "gender": "M"
  },
  {
    "name": "麥奇",
    "description": "小胖子",
    "locations": ['旅館＆咖啡廳'],
    "first": [
      "香蕉"
    ],
    "second": [
      "日式拿坡里義大利麵",
      "披薩",
      "地瓜燒",
      "美式鬆餅",
      "可可亞",
      "閃電熔結岩",
      "水砷鐵銅石",
      "橄欖結晶",
      "獨角仙雕像(ヤマトカブトムシの像)"
    ],
    "third": [
      "玻璃石",
      "鐵礦石",
      "銀礦石",
      "金礦石",
      "奧利哈鋼礦石",
      "烤蘋果",
      "蜂蜜優格"
    ],
    "fourth": [
      "石頭",
      "醃漬小魚",
      "醃漬香菇",
      "酸黃瓜"
    ],
    "isMarriageCandidate": false,
    "gender": "M"
  },
  {
    "name": "克萊門斯",
    "description": "升級工具和做背包的",
    "locations": ['工具行'],
    "first": [
      "芬蘭甜菜沙拉",
      "栗子飯",
      "蒙布朗",
      "發光手錶"
    ],
    "second": [
      "大蒜",
      "奧利哈鋼礦石",
      "酸黃瓜",
      "燉馬鈴薯",
      "蒜味辣椒義大利麵",
      "栗子最中餅"
    ],
    "third": [
      "金屬塊加工機",
      "珠寶加工機",
      "栗子",
      "日式煮魚",
      "腐皮烏冬面"
    ],
    "fourth": [
      "蕃薯",
      "絲線加工機",
      "毛線加工機",
      "優格製造機"
    ],
    "isMarriageCandidate": false,
    "gender": "M"
  },
  {
    "name": "拉修",
    "description": "機車男",
    "locations": ['工具行'],
    "first": [
      "栗子飯",
      "披薩",
      "蒙布朗",
      "魅惑香水",
      "時髦手環",
      "發光手錶"
    ],
    "second": [
      "芬蘭甜菜沙拉",
      "蔬食披薩",
      "栗子最中餅",
      "珠寶戒指",
      "珠寶墜子"
    ],
    "third": [
      "栗子",
      "花香香水",
      "百花香水",
      "春風進行曲"
    ],
    "fourth": [
      "牛奶",
      "雞蛋",
      "歐姆蛋",
      "茄汁焗豆",
      "蚌殼湯"
    ],
    "isMarriageCandidate": false,
    "gender": "M"
  },
  {
    "name": "賽門",
    "description": "牛仔帽老爺爺",
    "locations": ['雜貨店'],
    "first": [
      "田園野菇派",
      "布丁",
      "時髦手環",
      "發光手錶"
    ],
    "second": [
      "粉蝶花",
      "香菇",
      "鴻喜菇",
      "松茸",
      "醃漬香菇",
      "蜂蜜布丁",
      "咖啡布丁"
    ],
    "third": [
      "蜂窩蜜",
      "工蜂乳",
      "蜂王漿",
      "春風進行曲",
      "珠寶戒指"
    ],
    "fourth": [
      "牛奶",
      "雞蛋",
      "洋蔥",
      "蜂蜜地瓜燒"
    ],
    "isMarriageCandidate": false,
    "gender": "M"
  },
  {
    "name": "關",
    "description": "花店爺爺",
    "locations": ['花店'],
    "first": [
      "神秘的魚餌"
    ],
    "second": [
      "ヌシ釣りエサ",
      "泰式涼拌冬粉沙拉",
      "韓式年糕湯",
      "三種牡丹餅"
    ],
    "third": [
      "鬱金香",
      "向日葵種子",
      "小型魚釣餌",
      "大型魚釣餌"
    ],
    "fourth": [
      "粉蝶花",
      "沙丁魚",
      "鯖魚"
    ],
    "isMarriageCandidate": false,
    "gender": "M"
  },
  {
    "name": "馬可斯",
    "description": "漁夫爸爸",
    "locations": ['馬可斯的家'],
    "first": [
      "巨型蕃薯",
      "巨大海鮮披薩",
      "堅果瑪芬蛋糕"
    ],
    "second": [
      "蕃薯",
      "拿波里水煮魚",
      "鯛魚生魚片",
      "意大利漁夫麵",
      "楓糖瑪芬蛋糕"
    ],
    "third": [
      "醃漬小魚",
      "蚌殼湯",
      "蛤蜊巧達濃湯",
      "捕魚網"
    ],
    "fourth": [
      "蕃薯種子",
      "馬鈴薯",
      "沙丁魚",
      "柳葉魚",
      "竹莢魚"
    ],
    "isMarriageCandidate": false,
    "gender": "M"
  },
  {
    "name": "勞爾",
    "description": "漁夫小弟,桃紅色T恤,武士頭",
    "locations": ['馬可斯的家'],
    "first": [
      "香蕉",
      "美乃滋",
      "香蕉牛奶",
      "香蕉果醬",
      "時髦手環"
    ],
    "second": [
      "美乃滋加工機",
      "醃漬小魚",
      "拿波里水煮魚",
      "意大利漁夫麵",
      "珠寶墜子"
    ],
    "third": [
      "蚌殼湯",
      "馬賽魚湯",
      "烤魚",
      "日式煮魚",
      "捕魚網"
    ],
    "fourth": [
      "牛奶",
      "雞蛋",
      "沙丁魚",
      "柳葉魚",
      "竹莢魚"
    ],
    "isMarriageCandidate": false,
    "gender": "M"
  },
  {
    "name": "道節",
    "description": "少主侍從",
    "locations": ['清心庵'],
    "first": [
      "巨大的蔥",
      "飯糰",
      "栗子最中餅"
    ],
    "second": [
      "蔥",
      "乒乓菊",
      "醬油",
      "蚌殼湯",
      "日式蔬菜豆腐湯"
    ],
    "third": [
      "稻米",
      "茶葉",
      "樹汁",
      "紫萁",
      "板栗",
      "紅豆麻糬湯",
      "白飯",
      "珠寶戒指"
    ],
    "fourth": [
      "蕪菁",
      "蘿蔔",
      "小麥",
      "豆子",
      "鹽",
      "胡椒",
      "糖",
      "醋"
    ],
    "isMarriageCandidate": false,
    "gender": "M"
  },
  {
    "name": "諾曼",
    "description": "食材店/地中海禿",
    "locations": ['食材店'],
    "first": [
      "黃金蘋果",
      "神秘魚餌",
      "烤蘋果",
      "蘋果汁",
      "蘋果果醬"
    ],
    "second": [
      "蘋果",
      "神秘的魚餌",
      "馬鈴薯沙拉",
      "芬蘭甜菜沙拉",
      "時髦手環",
      "發光手錶"
    ],
    "third": [
      "可可亞",
      "牛奶",
      "小型魚釣餌",
      "各種調味料"
    ],
    "fourth": [
      "蕪菁",
      "洋蔥",
      "大蒜",
      "菠蘿",
      "沙丁魚"
    ],
    "isMarriageCandidate": false,
    "gender": "M"
  },
  {
    "name": "最喜番",
    "description": "孤獨的美食家",
    "locations": ['最喜翻的家'],
    "first": [
      "義式番茄起司沙拉",
      "拿波里水煮魚",
      "香菇",
      "飯團"
    ],
    "second": [
      "巨型蘿蔔",
      "星狀馬鈴薯",
      "義式蔬菜湯",
      "番茄汁",
      "時髦手環"
    ],
    "third": [
      "頂級牛奶",
      "醃漬小魚",
      "蚌殼湯",
      "烤魚"
    ],
    "fourth": [
      "蘿蔔",
      "馬鈴薯",
      "高麗菜",
      "酸黃瓜",
      "白飯"
    ],
    "isMarriageCandidate": false,
    "gender": "M"
  },
  {
    "name": "葛洛莉雅",
    "description": "鎮長太太",
    "locations": ['鎮公所', '博物館'],
    "first": [
      "金色草莓",
      "百花香水",
      "大地協奏曲",
      "珠寶墜子"
    ],
    "second": [
      "草莓",
      "報春花",
      "紅寶石",
      "糖漬水果",
      "草莓牛奶",
      "草莓醬"
    ],
    "third": [
      "白色蛋白石",
      "時髦手環",
      "閃電熔結岩"
    ],
    "fourth": [
      "草莓種子",
      "哈密瓜",
      "鬱金香",
      "奧利哈鋼礦石"
    ],
    "isMarriageCandidate": false,
    "gender": "F"
  },
  {
    "name": "派翠西亞",
    "description": "動物商店店長",
    "locations": ['動物商店'],
    "first": [
      "黃金桃子",
      "月夜夜曲",
      "珠寶墜子"
    ],
    "second": [
      "矮牽牛",
      "桃子",
      "蜂蜜",
      "蜂巢蜜",
      "工蜂乳",
      "蜂王漿"
    ],
    "third": [
      "兔毛",
      "灰色兔毛",
      "桃色兔毛",
      "寵物零食",
      "軟軟球"
    ],
    "fourth": [
      "柳橙",
      "杏仁",
      "檸檬",
      "羊毛",
      "薩福克羊羊毛"
    ],
    "isMarriageCandidate": false,
    "gender": "F"
  },
  {
    "name": "莎莉",
    "description": "咖啡廳貴婦",
    "locations": ['旅館＆咖啡廳'],
    "first": [
      "柳橙果醬",
      "百花香水",
      "珠寶戒指"
    ],
    "second": [
      "鐵線蓮",
      "黑玫瑰",
      "柳橙",
      "紅寶石",
      "美式鬆餅",
      "柳橙汁",
      "茶"
    ],
    "third": [
      "奧勒岡葉",
      "鼠尾草",
      "檸檬",
      "萬壽菊",
      "金雨迷迭香",
      "春風進行曲"
    ],
    "fourth": [
      "黑玫瑰種子",
      "高麗菜",
      "小黃瓜",
      "洋蔥"
    ],
    "isMarriageCandidate": false,
    "gender": "F"
  },
  {
    "name": "貝絲",
    "description": "紅毛雙馬尾眼鏡娘",
    "locations": ['博物館', '旅館＆咖啡廳'],
    "first": [
      "發光手錶",
      "古代飾品",
      "老舊的鏡子",
      "橄欖水晶",
      "閃電熔結岩"
    ],
    "second": [
      "富貴菊",
      "泡菜",
      "酸辣湯",
      "泡菜鍋",
      "咖哩飯",
      "時髦手環"
    ],
    "third": [
      "珠寶戒指",
      "珠寶墜子"
    ],
    "fourth": [
      "辣椒",
      "玻璃石",
      "紅寶石"
    ],
    "isMarriageCandidate": false,
    "gender": "F"
  },
  {
    "name": "美紗希",
    "description": "小餐館美魔女",
    "locations": ['小餐館'],
    "first": [
      "醃漬小魚",
      "醃漬香菇",
      "百花香水",
      "魅惑香水",
      "月夜夜曲",
      "雪花輪舞曲"
    ],
    "second": [
      "百合",
      "檸檬",
      "紅寶石",
      "奶油",
      "提拉米蘇",
      "花香香水",
      "珠寶戒指"
    ],
    "third": [
      "沙丁魚",
      "柳葉魚",
      "鹽",
      "辣椒",
      "面粉",
      "起司"
    ],
    "fourth": [
      "馬鈴薯",
      "洋蔥",
      "稻米",
      "小麥",
      "豆子",
      "茶葉"
    ],
    "isMarriageCandidate": false,
    "gender": "F"
  },
  {
    "name": "潔西",
    "description": "老婆婆",
    "locations": ['雜貨店'],
    "first": [
      "蜂王漿",
      "蜂蜜布丁",
      "雪花輪舞曲"
    ],
    "second": [
      "陸蓮花",
      "蜂巢蜜",
      "工蜂乳",
      "蜂蜜優格",
      "蜂蜜番薯",
      "布丁"
    ],
    "third": [
      "香菇",
      "蜂蜜巢蜜",
      "蜂巢巢蜜",
      "石頭",
      "白色蛋白石",
      "花香香水"
    ],
    "fourth": [
      "陸蓮花種子",
      "玻璃石",
      "蕃薯"
    ],
    "isMarriageCandidate": false,
    "gender": "F"
  },
  {
    "name": "安琪拉",
    "description": "雜貨店老闆娘",
    "locations": ['雜貨店'],
    "first": [
      "咖啡布丁",
      "春風進行曲",
      "時髦手環",
      "櫻桃果醬",
    ],
    "second": [
      "風鈴草",
      "櫻桃",
      "藍寶石",
      "鹽",
      "胡椒",
      "糖",
      "布丁",
      "蜂蜜布丁"
    ],
    "third": [
      "羊毛",
      "薩福克羊羊毛",
      "奶油",
      "起司",
      "美乃滋",
      "優格",
      "毛線加工機",
      "布料加工機"
    ],
    "fourth": [
      "稻米",
      "小麥",
      "豆子",
      "茶葉",
      "蜂蜜",
      "蜂蜜巢蜜",
      "咖啡"
    ],
    "isMarriageCandidate": false,
    "gender": "F"
  },
  {
    "name": "辛蒂",
    "description": "小女孩",
    "locations": ['雜貨店'],
    "first": [
      "櫻桃冷湯",
      "蜂蜜布丁",
      "優格乳",
      "櫻桃果醬",
      "春風進行曲"
    ],
    "second": [
      "鬱金香",
      "櫻桃",
      "優格",
      "菠菜泥優格沙拉",
      "布丁",
      "咖啡布丁"
    ],
    "third": [
      "羊毛",
      "薩福克羊羊毛",
      "草莓牛奶",
      "香蕉牛奶"
    ],
    "fourth": [
      "櫻桃幼苗",
      "粉蝶花",
      "三色蓳",
      "香蕉",
      "蜂蜜"
    ],
    "isMarriageCandidate": false,
    "gender": "F"
  },
  {
    "name": "曼紐拉",
    "description": "漁夫太太",
    "locations": ['馬可斯的家'],
    "first": [
      "葡萄牙海鮮銅鍋料理",
      "水果歐蕾",
      "鳯梨果醬",
      "百花香水",
      "珠寶墜子"
    ],
    "second": [
      "鳯梨",
      "秋海棠",
      "祖母綠",
      "醃漬小魚",
      "意大利漁夫麵",
      "義式奶酪"
    ],
    "third": [
      "龍宮湯",
      "蚌殼湯",
      "烤魚",
      "日式煮魚",
      "捕魚網"
    ],
    "fourth": [
      "牛奶",
      "沙丁魚",
      "柳葉魚",
      "竹莢魚",
      "珠星三塊魚",
      "鯡魚",
      "鰻魚"
    ],
    "isMarriageCandidate": false,
    "gender": "F"
  },
  {
    "name": "席妮",
    "description": "女強人",
    "first": [
      "優格",
      "葡萄汁",
      "葡萄果醬",
      "百花香水",
      "炎帝華爾茲",
      "發光手錶"
    ],
    "second": [
      "黑玫瑰",
      "葡萄",
      "鑽石",
      "バナジェッツ",
      "番茄汁",
      "花香香水"
    ],
    "third": [
      "可可豆",
      "祖母綠",
      "芬蘭甜菜沙拉",
      "茶"
    ],
    "fourth": [
      "柳橙",
      "杏仁",
      "檸檬",
      "牛奶",
      "烏骨雞蛋"
    ],
    "isMarriageCandidate": false,
    "gender": "F"
  },
  {
    "name": "卡琳娜",
    "description": "黑皮設計師",
    "locations": ['美人沙龍'],
    "first": [
      "巨型酪梨",
      "花束香水",
      "果味香水",
      "大地協奏曲",
      "時髦手環"
    ],
    "second": [
      "黑色三色堇",
      "紅寶石",
      "義式番茄起司沙拉",
      "青醬義大利麵",
      "茶",
      "花香香水"
    ],
    "third": [
      "酪梨",
      "藍寶石",
      "蔬菜沙拉",
      "醃漬小魚"
    ],
    "fourth": [
      "酪梨幼苗",
      "洋蔥",
      "草莓",
      "玫瑰",
      "茶葉"
    ],
    "isMarriageCandidate": false,
    "gender": "F"
  },
  {
    "name": "琴",
    "description": "美容師",
    "locations": ['美人沙龍'],
    "first": [
      "拉明頓蛋糕",
      "摩卡",
      "花香香水",
      "百花香水",
      "果香香水"
    ],
    "second": [
      "三色蓳",
      "祖母綠",
      "可可粉",
      "巧克力蛋糕",
      "提拉米蘇",
      "巧克力曲奇",
      "可可亞"
    ],
    "third": [
      "酪梨",
      "巨大酪梨",
      "可可豆",
      "紅寶石",
      "藍寶石"
    ],
    "fourth": [
      "可可幼苗",
      "白色蛋白石",
      "美式鬆餅",
      "餅乾"
    ],
    "isMarriageCandidate": false,
    "gender": "F"
  },
  {
    "name": "小琳",
    "description": "花店老闆的女兒",
    "locations": ['花店'],
    "first": [
      "橄欖",
      "金槍魚",
      "花束香水",
      "炎帝華爾滋",
      "華麗手環"
    ],
    "second": [
      "聖誕玫瑰",
      "夢幻的面料",
      "泰式涼拌冬粉沙拉",
      "和風牡丹餅三拼",
      "茶"
    ],
    "third": [
      "鬱金香",
      "向日葵",
      "玫瑰",
      "果香香水",
      "華麗手環"
    ],
    "fourth": [
      "鬱金香種子",
      "茶葉",
      "布料",
      "紅寶石",
      "曲奇餅"
    ],
    "isMarriageCandidate": true,
    "gender": "F"
  },
  {
    "name": "布萊兒",
    "description": "旅館&咖啡廳夫婦的女兒",
    "locations": ['旅館＆咖啡廳'],
    "first": [
      "雛菊",
      "鑽石",
      "花束香水",
      "春風行進曲",
      "華麗手環"
    ],
    "second": [
      "玫瑰",
      "櫻桃",
      "蔬菜沙拉",
      "茶",
      "珠寶指環"
    ],
    "third": [
      "白色蛋白石",
      "紅寶石",
      "藍寶石",
      "祖母綠",
      "紅綠柱石"
    ],
    "fourth": [
      "玫瑰種子",
      "茶葉",
      "鬱金香",
      "奶",
      "紅綠柱石的原石"
    ],
    "isMarriageCandidate": true,
    "gender": "F"
  },
  {
    "name": "菈菈",
    "description": "觀光導遊",
    "locations": ['食材店', '觀光服務中心'],
    "first": [
      "橄欖",
      "金槍魚",
      "炎帝華爾滋",
      "花束香水",
      "華麗手環"
    ],
    "second": [
      "金盞花",
      "紅寶石",
      "向日葵",
      "蔬菜汁"
    ],
    "third": [
      "花香/果香香水",
      "春風進行曲",
      "月下小夜曲",
      "雪華倫舞曲"
    ],
    "fourth": [
      "向日葵的種子",
      "扶桑花",
      "橄欖苗",
      "沙丁魚",
      "鑽石"
    ],
    "isMarriageCandidate": true,
    "gender": "F"
  },
  {
    "name": "蕾娜",
    "description": "博物館",
    "locations": ['博物館'],
    "first": [
      "芒果",
      "芒果糯米飯",
      "芒果果汁",
      "芒果果醬",
      "雪花圓舞曲",
      "珠寶墜子"
    ],
    "second": [
      "鐵線蓮",
      "橙",
      "玻璃",
      "橙果醬",
      "珠寶戒指"
    ],
    "third": [
      "櫻桃",
      "杏仁",
      "海玻璃頭",
      "紅寶石",
      "花香香水"
    ],
    "fourth": [
      "檸檬苗",
      "蜜瓜",
      "牛奶",
      "沙丁魚",
      "鐵礦石頭"
    ],
    "isMarriageCandidate": true,
    "gender": "F"
  },
  {
    "name": "布莉琪",
    "description": "動物商店",
    "locations": ['動物商店'],
    "first": [
      "頂級牛奶",
      "牛頭牌鮮奶",
      "彩虹花束",
      "珠寶戒指"
    ],
    "second": [
      "高級飼料",
      "粉蝶花",
      "頂級雞蛋",
      "草莓蛋糕"
    ],
    "third": [
      "普通飼料",
      "牛奶",
      "雞蛋",
      "羊毛",
      "松鼠雕像"
    ],
    "fourth": [
      "沒有資料"
    ],
    "isMarriageCandidate": true,
    "gender": "F"
  },
  {
    "name": "拉夫",
    "description": "巡林員",
    "locations": ['木工店'],
    "first": [
      "家常菜湯",
      "華麗手環"
    ],
    "second": [
      "黃色蔬菜濃湯",
      "粽合蔬菜湯",
      "蚌殼湯",
      "麵包",
      "閃耀的手錶"
    ],
    "third": [
      "果香香水",
      "魅惑香水",
      "春風行進曲",
      "雪花圓舞曲",
      "珠寶指環"
    ],
    "fourth": [
      "蕪菁",
      "大豆",
      "鬱金香",
      "奶",
      "清湯火鍋"
    ],
    "isMarriageCandidate": true,
    "gender": "M"
  },
  {
    "name": "伊織",
    "description": "武士裝",
    "locations": ['清心庵'],
    "first": [
      "松茸",
      "奇妙釣餌",
      "飯糰",
      "閃耀的手錶"
    ],
    "second": [
      "鐵線蓮",
      "香菇",
      "魚王釣餌",
      "醬油",
      "鯛魚生魚片"
    ],
    "third": [
      "米",
      "杏鮑菇",
      "小型魚釣餌",
      "烤魚",
      "珠寶指環"
    ],
    "fourth": [
      "蕪菁",
      "鬱金香",
      "奶",
      "雞蛋",
      "沙丁魚"
    ],
    "isMarriageCandidate": true,
    "gender": "M"
  },
  {
    "name": "艾米里歐",
    "description": "漁夫兒子,花襯衫",
    "locations": ['馬可斯的家'],
    "first": [
      "西瓜",
      "海鮮番茄意面",
      "珠寶墜子",
      "華麗手環"
    ],
    "second": [
      "向日葵",
      "醋汁小魚",
      "海鮮燴",
      "起司蛋糕",
      "珠寶戒指"
    ],
    "third": [
      "蕪菁種子",
      "洋蔥",
      "番茄",
      "橙",
      "奶"
    ],
    "fourth": [
      "蕪菁",
      "鬱金香",
      "奶",
      "雞蛋",
      "沙丁魚"
    ],
    "isMarriageCandidate": true,
    "gender": "M"
  },
  {
    "name": "傑克",
    "description": "雜貨店兒子",
    "locations": ['雜貨店'],
    "first": [
      "杏仁",
      "中華拉麵",
      "閃耀時鐘",
      "大熊木雕"
    ],
    "second": [
      "南瓜",
      "布丁",
      "咖啡",
      "珠寶戒指",
      "老舊硬幣"
    ],
    "third": [
      "花香香水",
      "百花香水",
      "春風進行曲",
      "炎帝華爾茲",
      "月夜夜曲"
    ],
    "fourth": [
      "沒有資料"
    ],
    "isMarriageCandidate": true,
    "gender": "M"
  },
  {
    "name": "戴蒙",
    "description": "動物商店兒子",
    "first": [
      "咖啡",
      "時髦手環",
      "閃耀時鐘"
    ],
    "second": [
      "黑色三色堇",
      "紅寶石",
      "咖啡布丁",
      "奧利哈鋼",
      "羊駝毛布料"
    ],
    "third": [
      "羊駝毛",
      "紅寶石原礦",
      "玻璃",
      "銀礦",
      "珠寶戒指"
    ],
    "fourth": [
      "沒有資料"
    ],
    "isMarriageCandidate": true,
    "gender": "M"
  },
];

const neighborRawData = [];

neighborRawDataV1.forEach(role => {
  const roleData = {
    name: role.name,
    description: role.description,
    locations: role.locations ? role.locations.map(rLoc => locationRawData.find(loc => rLoc === loc.name).shortName ) : [],
    isMarriageCandidate: role.isMarriageCandidate,
    gender: role.gender,
    gifts: [],
  }

  role.first.forEach(gift => {
    roleData.gifts.push({'name': gift, 'level': 1});
  });
  role.second.forEach(gift => {
    roleData.gifts.push({'name': gift, 'level': 2});
  });
  role.third.forEach(gift => {
    roleData.gifts.push({'name': gift, 'level': 3});
  });
  role.fourth.forEach(gift => {
    roleData.gifts.push({'name': gift, 'level': 4});
  });

  neighborRawData.push(roleData);
})

export default neighborRawData;