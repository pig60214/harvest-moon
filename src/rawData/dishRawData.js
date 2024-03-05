import lang from "./resourse";

const dishRawDataZHTW = [
  {
    "name": "蔬菜沙拉",
    "category": "沙拉",
    "ingredients": {
      "required": ["蔬菜類", "蔬菜類"],
      "topping": "山菜類",
    },
  },
  {
    "name": "馬鈴薯沙拉",
    "category": "沙拉",
    "ingredients": {
      "required": ["馬鈴薯類", "小黃瓜"],
      "topping": "蘋果類",
    },
  },
  {
    "name": "綜合沙拉",
    "category": "沙拉",
    "ingredients": {
      "required": ["蔬菜類", "山菜類", "鴻喜菇"],
      "topping": "哈密瓜類",
    },
  },
  {
    "name": "泰式涼拌冬粉沙拉",
    "category": "沙拉",
    "ingredients": {
      "required": ["鬚赤蝦", "烏賊類", "洋蔥", "小黃瓜"],
      "topping": "大蒜",
    },
  },
  {
    "name": "洋蔥拌炒馬鈴薯",
    "category": "沙拉",
    "ingredients": {
      "required": ["馬鈴薯類", "奧勒岡葉", "美乃滋"],
      "topping": "橄欖油",
    },
  },
  {
    "name": "雞蛋沙拉",
    "category": "沙拉",
    "ingredients": {
      "required": ["蛋類", "櫻桃蘿蔔", "美乃滋"],
      "topping": "酪梨類",
    },
  },
  {
    "name": "水果沙拉",
    "category": "沙拉",
    "ingredients": {
      "required": ["蔬菜類", "水果類", "奧勒岡葉"],
      "topping": "鳳梨",
    },
  },
  {
    "name": "醃漬小魚",
    "category": "沙拉",
    "ingredients": {
      "required": ["小型魚類", "小型魚類", "洋蔥", "醋"],
      "topping": "檸檬",
    },
  },
  {
    "name": "豆子沙拉",
    "category": "沙拉",
    "ingredients": {
      "required": ["蕪菁類", "豆子", "番茄類"],
      "topping": "醋",
    },
  },
  {
    "name": "酸黃瓜",
    "category": "沙拉",
    "ingredients": {
      "required": ["小黃瓜", "白蘿蔔類", "醋"],
      "topping": "大蒜",
    },
  },
  {
    "name": "醃漬香菇",
    "category": "沙拉",
    "ingredients": {
      "required": ["鴻喜菇", "杏鮑菇", "粉紅珊瑚菇", "醋"],
      "topping": "洋菇",
    },
  },
  {
    "name": "香料咖哩炒秋葵",
    "category": "沙拉",
    "ingredients": {
      "required": ["秋葵", "番茄類", "洋蔥", "大蒜"],
      "topping": "辛辣調味料",
    },
  },
  {
    "name": "日式炒牛蒡",
    "category": "沙拉",
    "ingredients": {
      "required": ["牛蒡", "胡蘿蔔", "醬油", "辣椒"],
      "topping": "香草調味料",
    },
  },
  {
    "name": "義式番茄起司沙拉",
    "category": "沙拉",
    "ingredients": {
      "required": ["番茄類", "起司", "酪梨類"],
      "topping": "橄欖油",
    },
  },
  {
    "name": "菠菜泥優格沙拉",
    "category": "沙拉",
    "ingredients": {
      "required": ["菠菜類", "優格", "橄欖", "胡椒"],
      "topping": "鹽",
    },
  },
  {
    "name": "芬蘭甜菜沙拉",
    "category": "沙拉",
    "ingredients": {
      "required": ["星型馬鈴薯", "蘋果類", "胡蘿蔔", "小黃瓜"],
      "topping": "醋",
    },
  },
  {
    "name": "泡菜",
    "category": "沙拉",
    "ingredients": {
      "required": ["白菜類", "蕪菁類", "青江菜", "辣椒"],
      "topping": "砂糖",
    },
  },

  // 湯 // 湯 //
  {
    "name": "蚌殼湯",
    "category": "湯",
    "ingredients": {
      "required": ["赤貝"],
      "topping": "青蔥類",
    },
  },
  {
    "name": "綜合蔬菜湯",
    "category": "湯",
    "ingredients": {
      "required": ["蔬菜類", "山菜類"],
      "topping": "胡椒",
    },
  },
  {
    "name": "黃色蔬菜濃湯",
    "category": "湯",
    "ingredients": {
      "required": ["馬鈴薯類", "奶類"],
      "topping": "南瓜",
    },
  },
  {
    "name": "綠色蔬菜濃湯",
    "category": "湯",
    "ingredients": {
      "required": ["豆子", "奶類"],
      "topping": "菠菜類",
    },
  },
  {
    "name": "酸辣湯",
    "category": "湯",
    "ingredients": {
      "required": ["香菇", "蛋類", "醬油"],
      "topping": "醋",
    },
  },
  {
    "name": "西班牙冷湯",
    "category": "湯",
    "ingredients": {
      "required": ["番茄類", "小黃瓜", "甜椒"],
      "topping": "醋",
    },
  },
  {
    "name": "秋葵湯",
    "category": "湯",
    "ingredients": {
      "required": ["秋葵", "洋蔥", "大型魚類"],
      "topping": "辛辣調味料",
    },
  },
  {
    "name": "蛤蜊巧達濃湯",
    "category": "湯",
    "ingredients": {
      "required": ["貝類", "奶類", "馬鈴薯類", "洋蔥"],
      "topping": "起司",
    },
  },
  {
    "name": "拿波里水煮魚",
    "category": "湯",
    "ingredients": {
      "required": ["白星笛鯛", "螃蟹類", "番茄類", "橄欖"],
      "topping": "香草調味料",
    },
  },
  {
    "name": "馬賽魚湯",
    "category": "湯",
    "ingredients": {
      "required": ["鬚赤蝦", "軟絲", "貝類", "大蒜"],
      "topping": "綠花椰菜",
    },
  },
  {
    "name": "泰式酸辣湯",
    "category": "湯",
    "ingredients": {
      "required": ["大龍蝦", "淡菜", "粉紅珊瑚菇", "辣椒"],
      "topping": "香草調味料",
    },
  },
  {
    "name": "焗烤洋蔥湯",
    "category": "湯",
    "ingredients": {
      "required": ["洋蔥", "奶油", "起司", "杏鮑菇"],
      "topping": "麵包類",
    },
  },
  {
    "name": "韓式年糕湯",
    "category": "湯",
    "ingredients": {
      "required": ["香菇", "蛋類", "胡蘿蔔", "醬油"],
      "topping": "紫萁",
    },
  },
  {
    "name": "西班牙香蒜湯",
    "category": "湯",
    "ingredients": {
      "required": ["大蒜", "蛋類", "麵包類", "橄欖油"],
      "topping": "辛辣調味料",
    },
  },
  {
    "name": "義式蔬菜湯",
    "category": "湯",
    "ingredients": {
      "required": ["番茄類", "高麗菜", "櫛瓜"],
      "topping": "大蒜",
    },
  },
  {
    "name": "日式蔬菜豆腐湯",
    "category": "湯",
    "ingredients": {
      "required": ["牛蒡", "白蘿蔔類", "香菇", "胡蘿蔔"],
      "topping": "鹽",
    },
  },
  {
    "name": "龍宮湯",
    "category": "湯",
    "ingredients": {
      "required": ["皇帶魚", "青蔥類", "豆子", "醬油"],
      "topping": "香菇",
    },
  },
  {
    "name": "櫻桃冷湯",
    "category": "湯",
    "ingredients": {
      "required": ["櫻桃", "砂糖", "檸檬", "香草調味料"],
      "topping": "金雨迷迭香",
    },
  },
  {
    "name": "法式燉菜湯",
    "category": "湯",
    "ingredients": {
      "required": ["馬鈴薯類", "甜椒", "高麗菜", "蕪菁類"],
      "topping": "鹽",
    },
  },
  {
    "name": "羅宋湯",
    "category": "湯",
    "ingredients": {
      "required": ["番茄類", "胡蘿蔔", "高麗菜", "櫻桃蘿蔔"],
      "topping": "檸檬",
    },
  },
  {
    "name": "希臘檸檬湯",
    "category": "湯",
    "ingredients": {
      "required": ["檸檬", "白菜類", "青蔥類"],
      "topping": "香草調味料",
    },
  },

  // 主餐 // 主餐 // 主餐 //
  {
    "name": "烤魚",
    "category": "主餐",
    "ingredients": {
      "required": ["魚類"],
      "topping": "檸檬",
    },
  },
  {
    "name": "荷包蛋",
    "category": "主餐",
    "ingredients": {
      "required": ["蛋類"],
      "topping": "醬油",
    },
  },
  {
    "name": "蔬菜三明治",
    "category": "主餐",
    "ingredients": {
      "required": ["麵包類", "蔬菜類", "野莓"],
      "topping": "美乃滋",
    },
  },
  {
    "name": "咖哩飯",
    "category": "主餐",
    "ingredients": {
      "required": ["白飯", "辛辣調味料", "馬鈴薯類"],
      "topping": "洋蔥",
    },
  },
  {
    "name": "雞蛋三明治",
    "category": "主餐",
    "ingredients": {
      "required": ["麵包類", "蛋類"],
      "topping": "美乃滋",
    },
  },
  {
    "name": "歐姆蛋",
    "category": "主餐",
    "ingredients": {
      "required": ["蛋類", "番茄類"],
      "topping": "美乃滋",
    },
  },
  {
    "name": "麻辣螯蝦",
    "category": "主餐",
    "ingredients": {
      "required": ["螯蝦", "辛辣調味料", "香草調味料"],
      "topping": "胡椒",
    },
  },
  {
    "name": "泰式炸蝦吐司",
    "category": "主餐",
    "ingredients": {
      "required": ["蝦類", "醬油", "麵包類"],
      "topping": "甜椒",
    },
  },
  {
    "name": "異國風味咖哩",
    "category": "主餐",
    "ingredients": {
      "required": ["白飯", "秋葵", "甜椒", "辛辣調味料"],
      "topping": "優格",
    },
  },
  {
    "name": "鯛魚生魚片",
    "category": "主餐",
    "ingredients": {
      "required": ["鯛魚", "醬油"],
      "topping": "比目魚",
    },
  },
  {
    "name": "中華拉麵",
    "category": "主餐",
    "ingredients": {
      "required": ["醬油", "小型魚類", "麵粉"],
      "topping": "竹筍",
    },
  },
  {
    "name": "乾燒明蝦",
    "category": "主餐",
    "ingredients": {
      "required": ["泰國蝦", "番茄類", "辣椒"],
      "topping": "辛辣調味料",
    },
  },
  {
    "name": "天婦羅",
    "category": "主餐",
    "ingredients": {
      "required": ["麵粉", "草蝦", "蔬菜類", "牡蠣"],
      "topping": "鹽",
    },
  },
  {
    "name": "義大利漁夫麵",
    "category": "主餐",
    "ingredients": {
      "required": ["麵粉", "蝦類", "淡菜", "番茄類"],
      "topping": "鼠尾草",
    },
  },
  {
    "name": "鰻魚飯",
    "category": "主餐",
    "ingredients": {
      "required": ["白飯", "鰻魚", "醬油", "砂糖"],
      "topping": "香草調味料",
    },
  },
  {
    "name": "茄汁焗豆",
    "category": "主餐",
    "ingredients": {
      "required": ["豆子", "青椒", "甜椒"],
      "topping": "橄欖",
    },
  },
  {
    "name": "披薩",
    "category": "主餐",
    "ingredients": {
      "required": ["麵粉", "番茄類", "起司"],
      "topping": "鳳梨",
    },
  },
  {
    "name": "豆皮烏龍麵",
    "category": "主餐",
    "ingredients": {
      "required": ["醬油", "豆子", "麵粉"],
      "topping": "青蔥類",
    },
  },
  {
    "name": "日式拿坡里義大利麵",
    "category": "主餐",
    "ingredients": {
      "required": ["麵粉", "番茄類", "洋蔥", "青椒"],
      "topping": "鼠尾草",
    },
  },
  {
    "name": "栗子飯",
    "category": "主餐",
    "ingredients": {
      "required": ["白飯", "栗子", "蕃薯類"],
      "topping": "松茸",
    },
  },
  {
    "name": "日式煮魚",
    "category": "主餐",
    "ingredients": {
      "required": ["中型魚類", "白蘿蔔類", "醬油"],
      "topping": "砂糖",
    },
  },
  {
    "name": "蔬食披薩",
    "category": "主餐",
    "ingredients": {
      "required": ["麵粉", "蔬菜類", "綠花椰菜", "起司"],
      "topping": "野莓",
    },
  },
  {
    "name": "普羅旺斯燉菜",
    "category": "主餐",
    "ingredients": {
      "required": ["辣椒", "櫛瓜", "甜椒", "茄子類"],
      "topping": "橄欖",
    },
  },
  {
    "name": "西班牙烤大蔥",
    "category": "主餐",
    "ingredients": {
      "required": ["青蔥類", "橄欖油", "鹽", "胡椒"],
      "topping": "杏仁",
    },
  },
  {
    "name": "海鮮蓋飯",
    "category": "主餐",
    "ingredients": {
      "required": ["白飯", "鮭魚", "牡蠣", "伊勢龍蝦"],
      "topping": "醬油",
    },
  },
  {
    "name": "葡萄牙海鮮銅鍋料理",
    "category": "主餐",
    "ingredients": {
      "required": ["青江菜", "鬼頭刀", "螃蟹類", "墨魚"],
      "topping": "鮑魚",
    },
  },
  {
    "name": "日式炸浸蔬菜",
    "category": "主餐",
    "ingredients": {
      "required": ["茄子類", "南瓜", "秋葵"],
      "topping": "醬油",
    },
  },
  {
    "name": "果醬三明治",
    "category": "主餐",
    "ingredients": {
      "required": ["麵包類", "果醬類", "奶油"],
      "topping": "優格",
    },
  },
  {
    "name": "日式燉菜",
    "category": "主餐",
    "ingredients": {
      "required": ["白蘿蔔類", "秋葵", "醬油"],
      "topping": "砂糖",
    },
  },
  {
    "name": "法式吐司",
    "category": "主餐",
    "ingredients": {
      "required": ["麵包類", "蛋類", "奶類", "蜂巢蜜"],
      "topping": "柳橙",
    },
  },
  {
    "name": "拌飯",
    "category": "主餐",
    "ingredients": {
      "required": ["白飯", "鴻喜菇", "牛蒡", "胡蘿蔔"],
      "topping": "竹筍",
    },
  },
  {
    "name": "鮪魚三明治",
    "category": "主餐",
    "ingredients": {
      "required": ["麵包類", "蛋類", "蔬菜類", "鮪魚"],
      "topping": "鼠尾草",
    },
  },
  {
    "name": "法式煎蔬菜",
    "category": "主餐",
    "ingredients": {
      "required": ["高麗菜", "菠菜類", "胡蘿蔔"],
      "topping": "大蒜",
    },
  },
  {
    "name": "燉馬鈴薯",
    "category": "主餐",
    "ingredients": {
      "required": ["馬鈴薯類", "辣椒", "工蜂乳"],
      "topping": "砂糖",
    },
  },
  {
    "name": "白醬義大利麵",
    "category": "主餐",
    "ingredients": {
      "required": ["麵粉", "菠菜類", "奶類"],
      "topping": "鼠尾草",
    },
  },
  {
    "name": "焗烤通心粉",
    "category": "主餐",
    "ingredients": {
      "required": ["麵粉", "奶類", "綠花椰菜", "起司"],
      "topping": "香菇",
    },
  },
  {
    "name": "奶油培根蛋黃麵",
    "category": "主餐",
    "ingredients": {
      "required": ["麵粉", "起司", "蛋類", "奶類"],
      "topping": "橄欖油",
    },
  },
  {
    "name": "西班牙風醃漬沙丁魚",
    "category": "主餐",
    "ingredients": {
      "required": ["沙丁魚", "橄欖油", "大蒜", "醋"],
      "topping": "香草調味料",
    },
  },
  {
    "name": "法式鹹派",
    "category": "主餐",
    "ingredients": {
      "required": ["麵粉", "起司", "綠花椰菜", "玉蜀黍類"],
      "topping": "茄子類",
    },
  },
  {
    "name": "田園野菇派",
    "category": "主餐",
    "ingredients": {
      "required": ["麵粉", "起司", "杏鮑菇", "洋菇"],
      "topping": "鴻喜菇",
    },
  },
  {
    "name": "酥炸鮪魚塊",
    "category": "主餐",
    "ingredients": {
      "required": ["鮪魚", "橄欖油", "蛋類", "麵包類"],
      "topping": "美乃滋",
    },
  },
  {
    "name": "碗豆燉飯",
    "category": "主餐",
    "ingredients": {
      "required": ["白飯", "豆子", "胡蘿蔔", "奶油"],
      "topping": "橄欖",
    },
  },
  {
    "name": "松茸炊飯",
    "category": "主餐",
    "ingredients": {
      "required": ["白飯", "松茸", "竹筍"],
      "topping": "醬油",
    },
  },
  {
    "name": "泰式咖哩蟹",
    "category": "主餐",
    "ingredients": {
      "required": ["辛辣調味料", "椰子", "蛋類", "塔斯馬尼亞帝王蟹"],
      "topping": "白飯",
    },
  },
  {
    "name": "西班牙式鐵板煎菇",
    "category": "主餐",
    "ingredients": {
      "required": ["洋菇", "蝦類", "大蒜", "橄欖油"],
      "topping": "菇類",
    },
  },
  {
    "name": "蒜味辣椒義大利麵",
    "category": "主餐",
    "ingredients": {
      "required": ["麵粉", "橄欖油", "辣椒", "大蒜"],
      "topping": "鼠尾草",
    },
  },
  {
    "name": "奶油燉菜",
    "category": "主餐",
    "ingredients": {
      "required": ["奶類", "奶油", "綠花椰菜", "胡蘿蔔"],
      "topping": "洋菇",
    },
  },
  {
    "name": "洋菇高麗菜捲",
    "category": "主餐",
    "ingredients": {
      "required": ["洋菇", "高麗菜", "番茄類"],
      "topping": "橄欖油",
    },
  },
  {
    "name": "泰式酸辣鯰魚湯",
    "category": "主餐",
    "ingredients": {
      "required": ["椰子", "湄公河巨鯰", "香草調味料"],
      "topping": "胡椒",
    },
  },
  {
    "name": "烤大雀鱔",
    "category": "主餐",
    "ingredients": {
      "required": ["大雀鱔", "鹽", "檸檬"],
      "topping": "醬油",
    },
  },
  {
    "name": "大碗海鮮抓飯",
    "category": "主餐",
    "ingredients": {
      "required": ["白飯", "雪花鴨嘴燕魟", "青椒", "奶油"],
      "topping": "胡椒",
    },
  },
  {
    "name": "墨西哥玉米湯餅",
    "category": "主餐",
    "ingredients": {
      "required": ["玉蜀黍類", "櫛瓜", "酪梨類", "辛辣調味料"],
      "topping": "奧勒岡葉",
    },
  },
  {
    "name": "旗魚壽司",
    "category": "主餐",
    "ingredients": {
      "required": ["稻米", "旗魚", "醬油", "醋"],
      "topping": "砂糖",
    },
  },
  {
    "name": "瑞士起司火鍋",
    "category": "主餐",
    "ingredients": {
      "required": ["起司", "綠花椰菜", "巨大蕃薯", "南瓜"],
      "topping": "胡蘿蔔",
    },
  },
  {
    "name": "義式烤扁鱈",
    "category": "主餐",
    "ingredients": {
      "required": ["扁鱈", "番茄類", "馬鈴薯類", "檸檬"],
      "topping": "貝類",
    },
  },
  {
    "name": "青醬義大利麵",
    "category": "主餐",
    "ingredients": {
      "required": ["麵粉", "巨大酪梨", "起司", "橄欖油"],
      "topping": "鼠尾草",
    },
  },
  {
    "name": "巨大海鮮披薩",
    "category": "主餐",
    "ingredients": {
      "required": ["麵粉", "龍膽石斑", "大王烏賊", "起司"],
      "topping": "橄欖油",
    },
  },
  {
    "name": "泡菜鍋",
    "category": "主餐",
    "ingredients": {
      "required": ["黃金白菜", "青江菜", "青蔥類", "辣椒"],
      "topping": "松茸",
    },
  },
  {
    "name": "日式白湯鍋",
    "category": "主餐",
    "ingredients": {
      "required": ["高麗菜", "松茸", "牛蒡", "巨大的青蔥"],
      "topping": "香菇",
    },
  },
  // Onigiri: Unlocks after completing all of Lovett's Gourmet Requests

  // 甜點 // 甜點 // 甜點 //
  {
    "name": "艾草大福",
    "category": "甜點",
    "ingredients": {
      "required": ["稻米", "茶葉"],
      "topping": "鹽",
    },
  },
  {
    "name": "糖漬水果",
    "category": "甜點",
    "ingredients": {
      "required": ["水果類", "砂糖"],
      "topping": "櫻桃",
    },
  },
  {
    "name": "紅豆麻糬湯",
    "category": "甜點",
    "ingredients": {
      "required": ["豆子", "稻米", "砂糖"],
      "topping": "鹽",
    },
  },
  {
    "name": "草莓大福",
    "category": "甜點",
    "ingredients": {
      "required": ["稻米", "草莓類", "砂糖"],
      "topping": "鹽",
    },
  },
  {
    "name": "栗子最中餅",
    "category": "甜點",
    "ingredients": {
      "required": ["豆子", "稻米", "栗子"],
      "topping": "砂糖",
    },
  },
  {
    "name": "三種牡丹餅",
    "category": "甜點",
    "ingredients": {
      "required": ["稻米", "茶葉", "砂糖", "豆子"],
      "topping": "鹽",
    },
  },
  {
    "name": "布丁",
    "category": "甜點",
    "ingredients": {
      "required": ["蛋類", "奶類", "砂糖"],
      "topping": "櫻桃",
    },
  },
  {
    "name": "美式鬆餅",
    "category": "甜點",
    "ingredients": {
      "required": ["麵粉", "蛋類", "奶類"],
      "topping": "杏仁",
    },
  },
  {
    "name": "蜂蜜優格",
    "category": "甜點",
    "ingredients": {
      "required": ["優格", "蜂蜜"],
      "topping": "柳橙",
    },
  },
  {
    "name": "地瓜燒",
    "category": "甜點",
    "ingredients": {
      "required": ["麵粉", "蕃薯類"],
      "topping": "砂糖",
    },
  },
  {
    "name": "蒙布朗",
    "category": "甜點",
    "ingredients": {
      "required": ["麵粉", "栗子", "蛋類", "奶類"],
      "topping": "砂糖",
    },
  },
  {
    "name": "黃豆粉烤年糕吐司",
    "category": "甜點",
    "ingredients": {
      "required": ["麵包類", "豆子", "蜂蜜", "稻米"],
      "topping": "可可粉",
    },
  },
  {
    "name": "楓糖瑪芬蛋糕",
    "category": "甜點",
    "ingredients": {
      "required": ["麵粉", "蛋類", "奶類", "蜂蜜"],
      "topping": "蜂蜜類",
    },
  },
  {
    "name": "烤蘋果",
    "category": "甜點",
    "ingredients": {
      "required": ["蘋果類", "蜂蜜", "奶油",],
      "topping": "杏仁",
    },
  },
  {
    "name": "咖啡布丁",
    "category": "甜點",
    "ingredients": {
      "required": ["蛋類", "奶類", "砂糖", "咖啡粉"],
      "topping": "可可粉",
    },
  },
  {
    "name": "餅乾",
    "category": "甜點",
    "ingredients": {
      "required": ["麵粉", "蛋類", "奶類", "奶油"],
      "topping": "茶葉",
    },
  },
  {
    "name": "草莓奶油蛋糕",
    "category": "甜點",
    "ingredients": {
      "required": ["麵粉", "草莓類", "蛋類", "奶類"],
      "topping": "芒果",
    },
  },
  {
    "name": "水果蛋糕",
    "category": "甜點",
    "ingredients": {
      "required": ["麵粉", "水果類", "蛋類", "奶類"],
      "topping": "哈密瓜類",
    },
  },
  {
    "name": "起司蛋糕",
    "category": "甜點",
    "ingredients": {
      "required": ["麵粉", "起司", "蛋類", "奶類"],
      "topping": "檸檬",
    },
  },
  {
    "name": "杏仁餅乾",
    "category": "甜點",
    "ingredients": {
      "required": ["麵粉", "蛋類", "奶類", "杏仁"],
      "topping": "可可粉",
    },
  },
  {
    "name": "堅果瑪芬蛋糕",
    "category": "甜點",
    "ingredients": {
      "required": ["麵粉", "蛋類", "奶類", "杏仁"],
      "topping": "香草調味料",
    },
  },
  {
    "name": "巧克力瑪芬蛋糕",
    "category": "甜點",
    "ingredients": {
      "required": ["麵粉", "蛋類", "奶類", "可可粉"],
      "topping": "咖啡粉",
    },
  },
  {
    "name": "蜂蜜布丁",
    "category": "甜點",
    "ingredients": {
      "required": ["蛋類", "奶類", "砂糖", "工蜂乳"],
      "topping": "蜂蜜類",
    },
  },
  {
    "name": "巧克力蛋糕",
    "category": "甜點",
    "ingredients": {
      "required": ["麵粉", "可可粉", "蛋類", "奶類"],
      "topping": "香蕉",
    },
  },
  {
    "name": "薩赫蛋糕",
    "category": "甜點",
    "ingredients": {
      "required": ["蛋類", "奶油", "麵粉", "可可粉"],
      "topping": "果醬類",
    },
  },
  {
    "name": "巧克力餅乾",
    "category": "甜點",
    "ingredients": {
      "required": ["麵粉", "蛋類", "可可粉", "杏仁"],
      "topping": "茶葉",
    },
  },
  {
    "name": "提拉米蘇",
    "category": "甜點",
    "ingredients": {
      "required": ["奶類", "蛋類", "咖啡粉", "起司"],
      "topping": "可可粉",
    },
  },
  {
    "name": "布朗尼蛋糕",
    "category": "甜點",
    "ingredients": {
      "required": ["可可粉", "奶油", "奶類", "蛋類"],
      "topping": "咖啡粉",
    },
  },
  {
    "name": "黑森林蛋糕",
    "category": "甜點",
    "ingredients": {
      "required": ["麵粉", "蛋類", "可可粉", "櫻桃"],
      "topping": "奶類",
    },
  },
  {
    "name": "拉明頓蛋糕",
    "category": "甜點",
    "ingredients": {
      "required": ["麵粉", "砂糖", "可可粉", "椰子"],
      "topping": "咖啡粉",
    },
  },
  {
    "name": "芒果糯米飯",
    "category": "甜點",
    "ingredients": {
      "required": ["稻米", "芒果", "椰子", "鹽"],
      "topping": "砂糖",
    },
  },
  {
    "name": "西班牙杏仁糕點",
    "category": "甜點",
    "ingredients": {
      "required": ["杏仁", "蕃薯類", "椰子", "蛋類"],
      "topping": "咖啡粉",
    },
  },
  {
    "name": "蜂蜜地瓜燒",
    "category": "甜點",
    "ingredients": {
      "required": ["麵粉", "蕃薯類", "椰子", "蜂巢蜜"],
      "topping": "砂糖",
    },
  },
  {
    "name": "義式奶酪",
    "category": "甜點",
    "ingredients": {
      "required": ["奶類", "蜂王乳", "柳橙", "金雨迷迭香"],
      "topping": "可可粉",
    },
  },

  // 其他 // 其他 // 其他 //
  {
    "name": "茶",
    "category": "其他",
  },
  {
    "name": "蔬菜汁",
    "category": "其他",
  },
  {
    "name": "白飯",
    "category": "其他",
  },
  {
    "name": "番茄汁",
    "category": "其他",
  },
  {
    "name": "香草茶",
    "category": "其他",
  },
  {
    "name": "麵包",
    "category": "其他",
  },
  {
    "name": "熱牛奶",
    "category": "其他",
  },
  {
    "name": "優酪乳",
    "category": "其他",
  },
  {
    "name": "咖啡",
    "category": "其他",
  },
  {
    "name": "柳橙汁",
    "category": "其他",
  },
  {
    "name": "奶茶",
    "category": "其他",
  },
  {
    "name": "印度奶茶",
    "category": "其他",
  },
  {
    "name": "草莓牛奶",
    "category": "其他",
  },
  {
    "name": "蘋果汁",
    "category": "其他",
  },
  {
    "name": "可可亞",
    "category": "其他",
  },
  {
    "name": "洋蔥麵包",
    "category": "其他",
  },
  {
    "name": "椰子汁",
    "category": "其他",
  },
  {
    "name": "葡萄汁",
    "category": "其他",
  },
  {
    "name": "香蕉牛奶",
    "category": "其他",
  },
  {
    "name": "摩卡",
    "category": "其他",
  },
  {
    "name": "玉米麵包",
    "category": "其他",
  },
  {
    "name": "蜂蜜拿鐵",
    "category": "其他",
  },
  {
    "name": "蜂蜜牛奶可可",
    "category": "其他",
  },
  {
    "name": "芒果汁",
    "category": "其他",
  },
  {
    "name": "蜂蜜檸檬汁",
    "category": "其他",
  },
  {
    "name": "水果歐蕾",
    "category": "其他",
  },
]


const dishRawData = dishRawDataZHTW.map(dish => {
  const translatedDish = {
    key: dish.name,
    name: lang(dish.name),
    category: dish.category,
    ingredients: {
      required: dish.ingredients?.required.map(i => lang(i)) ?? [],
      topping: lang(dish.ingredients?.topping),
    },
  };
  return translatedDish;
})
export default dishRawData;
