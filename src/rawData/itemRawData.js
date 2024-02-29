import lang from "./resourse";

const itemRawDataZHTW = [
  {
    "name": "香菇種菌",
    "category": "香菇類",
    "way": "種菌加工機、雜貨店"
  },
  {
    "name": "鴻喜菇種菌",
    "category": "香菇類",
    "way": "種菌加工機、雜貨店"
  },
  {
    "name": "杏鮑菇種菌",
    "category": "香菇類",
    "way": "種菌加工機、雜貨店"
  },
  {
    "name": "粉紅珊瑚菇種菌",
    "category": "香菇類",
    "way": "種菌加工機、雜貨店"
  },
  {
    "name": "洋菇種菌",
    "category": "香菇類",
    "way": "種菌加工機、雜貨店"
  },
  {
    "name": "松茸種菌",
    "category": "香菇類",
    "way": "種菌加工機、雜貨店"
  },
  {
    "name": "香菇",
    "category": "香菇類",
    "way": "區域2採集全年、食材店"
  },
  {
    "name": "鴻喜菇",
    "category": "香菇類",
    "way": "區域2採集全年、食材店"
  },
  {
    "name": "杏鮑菇",
    "category": "香菇類",
    "way": "區域3採集全年、食材店"
  },
  {
    "name": "粉紅珊瑚菇",
    "category": "香菇類",
    "way": "區域3採集全年、食材店"
  },
  {
    "name": "洋菇",
    "category": "香菇類",
    "way": "碎石山谷全年、食材店"
  },
  {
    "name": "松茸",
    "category": "香菇類",
    "way": "伐木採集（全年）"
  },
  {
    "name": "乾草飼料",
    "category": "",
    "way": "栽培、照顧可樂波、雜貨店"
  },
  {
    "name": "釣餌素材",
    "category": "",
    "way": "釣魚可樂波、雜貨店"
  },
  { "name": "月落草", "category": "", "way": "可樂商店、區域1" },
  { "name": "粉色貓薄荷", "category": "", "way": "可樂商店、區域2" },
  { "name": "魔法藍草", "category": "", "way": "可樂商店、區域3" },
  { "name": "魔法紅草", "category": "", "way": "可樂商店、區域3水耕設施" },
  {
    "name": "黏土",
    "category": "",
    "way": "可樂商店"
  },

  { 'name': '原木', 'category': '木頭', 'way': '可樂商店' },
  { 'name': '堅硬的原木', 'category': '木頭', 'way': '可樂商店' },
  { 'name': '柔韌的原木', 'category': '木頭', 'way': '可樂商店' },
  { 'name': '粗壯的原木', 'category': '木頭', 'way': '可樂商店' },
  { 'name': '夢幻原木', 'category': '木頭', 'way': '可樂商店' },
  { 'name': '樹汁', 'category': '木頭', 'way': '可樂商店' },

  { 'name': '草', 'category': '草', 'way': '可樂商店' },
  { 'name': '柔軟的草', 'category': '草', 'way': '可樂商店' },
  { 'name': '堅韌的草', 'category': '草', 'way': '可樂商店' },
  { 'name': '觸感柔滑的草', 'category': '草', 'way': '可樂商店' },
  { 'name': '夢幻草', 'category': '草', 'way': '可樂商店' },

  { "name": "石塊", "category": "石頭", "way": "可樂商店" },
  { "name": "鐵礦石", "category": "石頭", "way": "可樂商店" },
  { "name": "銀礦石", "category": "石頭", "way": "可樂商店" },
  { "name": "金礦石", "category": "石頭", "way": "可樂商店" },
  { "name": "奧利哈鋼礦石", "category": "石頭", "way": "可樂商店" },
  { "name": "玻璃石", "category": "石頭", "way": "可樂商店" },
  { "name": "石炭塊", "category": "石頭", "way": "可樂商店" },
  { "name": "白色蛋白石原石", "category": "石頭", "way": "" },
  { "name": "紅綠柱石原石", "category": "石頭", "way": "" },
  { "name": "紅寶石原石", "category": "石頭", "way": "" },
  { "name": "藍寶石原石", "category": "石頭", "way": "" },
  { "name": "祖母綠原石", "category": "石頭", "way": "" },
  { "name": "鑽石原石", "category": "石頭", "way": "" },

  { 'name': '鐵塊', 'category': '金屬塊', 'way': '' },
  { 'name': '銀塊', 'category': '金屬塊', 'way': '' },
  { 'name': '金塊', 'category': '金屬塊', 'way': '' },
  { 'name': '奧利哈鋼金屬塊', 'category': '金屬塊', 'way': '' },
  { 'name': '煤炭', 'category': '金屬塊', 'way': '' },
  { 'name': '玻璃', 'category': '金屬塊', 'way': '' },

  { 'name': '野莓', 'category': '山菜', 'way': '可樂商店' },
  { 'name': '紫萁', 'category': '山菜', 'way': '可樂商店' },
  { 'name': '款冬', 'category': '山菜', 'way': '可樂商店' },
  { 'name': '筆頭菜', 'category': '山菜', 'way': '可樂商店' },
  { 'name': '栗子', 'category': '山菜', 'way': '可樂商店' },
  { 'name': '竹筍', 'category': '山菜', 'way': '可樂商店' },

  { 'name': '奧勒岡葉', 'category': '香草', 'way': '可樂商店' },
  { 'name': '鼠尾草', 'category': '香草', 'way': '可樂商店' },
  { 'name': '芳香萬壽菊', 'category': '香草', 'way': '可樂商店' },
  { 'name': '金雨迷迭香', 'category': '香草', 'way': '可樂商店' },
  {
    "name": "白色蛋白石",
    "category": "寶石",
    "way": ""
  },
  {
    "name": "紅綠柱石",
    "category": "寶石",
    "way": ""
  },
  {
    "name": "紅寶石",
    "category": "寶石",
    "way": ""
  },
  {
    "name": "藍寶石",
    "category": "寶石",
    "way": ""
  },
  {
    "name": "祖母綠",
    "category": "寶石",
    "way": ""
  },
  {
    "name": "鑽石",
    "category": "寶石",
    "way": ""
  },
  { "name": "紅色染料", "category": "染料", "way": "花店" },
  { "name": "藍色染料", "category": "染料", "way": "花店" },
  { "name": "綠色染料", "category": "染料", "way": "花店" },
  { "name": "黃色染料", "category": "染料", "way": "花店" },
  { "name": "紫色染料", "category": "染料", "way": "花店" },
  { "name": "桃色染料", "category": "染料", "way": "花店" },
  { "name": "白色染料", "category": "染料", "way": "花店" },
  { "name": "黑色染料", "category": "染料", "way": "花店" },
  {
    "name": "岩鹽",
    "category": "調味料",
    "way": "區域3海邊"
  },
  {
    "name": "鹽",
    "category": "調味料",
    "way": "調味料加工機 放入 岩鹽"
  },
  {
    "name": "醋",
    "category": "調味料",
    "way": "液體調味料加工機 放入 稻米"
  },
  {
    "name": "醬油",
    "category": "調味料",
    "way": "液體調味料加工機 放入 豆子"
  },
  {
    "name": "麵粉",
    "category": "調味料",
    "way": "粉末加工機 放入 小麥"
  },
  {
    "name": "可可粉",
    "category": "調味料",
    "way": "粉末加工機 放入 可可豆"
  },
  {
    "name": "咖啡粉",
    "category": "調味料",
    "way": "粉末加工機 放入 咖啡豆"
  },
  {
    "name": "奶油",
    "category": "調味料",
    "way": "奶油加工機 放入 牛奶"
  },
  {
    "name": "起司",
    "category": "調味料",
    "way": "起司加工機 放入 牛奶"
  },
  {
    "name": "蜂蜜巢蜜",
    "category": "蜂蜜",
    "way": ""
  },
  {
    "name": "蜂巢巢蜜",
    "category": "蜂蜜",
    "way": ""
  },
  {
    "name": "工蜂巢蜜",
    "category": "蜂蜜",
    "way": ""
  },
  {
    "name": "蜂王巢蜜",
    "category": "蜂蜜",
    "way": ""
  },
  {
    "name": "蜂蜜",
    "category": "蜂蜜",
    "way": ""
  },
  {
    "name": "蜂巢蜜",
    "category": "蜂蜜",
    "way": ""
  },
  {
    "name": "工蜂乳",
    "category": "蜂蜜",
    "way": ""
  },
  {
    "name": "蜂王乳",
    "category": "蜂蜜",
    "way": ""
  },

  { 'name': '小型魚類釣餌', 'category': '釣餌', 'way': '' },
  { 'name': '中型魚類釣餌', 'category': '釣餌', 'way': '' },
  { 'name': '大型魚類釣餌', 'category': '釣餌', 'way': '' },
  { 'name': '烏賊類釣餌', 'category': '釣餌', 'way': '' },
  { 'name': '蝦類釣餌', 'category': '釣餌', 'way': '' },
  { 'name': '蟹類釣餌', 'category': '釣餌', 'way': '' },
  { 'name': '水中霸主釣餌', 'category': '釣餌', 'way': '' },
  { 'name': '奇妙的釣餌', 'category': '釣餌', 'way': '' },

  { 'name': '草莓果醬', 'category': '果醬', 'way': '' },
  { 'name': '櫻桃果醬', 'category': '果醬', 'way': '' },
  { 'name': '柳橙果醬', 'category': '果醬', 'way': '' },
  { 'name': '西瓜果醬', 'category': '果醬', 'way': '' },
  { 'name': '哈密瓜果醬', 'category': '果醬', 'way': '' },
  { 'name': '鳳梨果醬', 'category': '果醬', 'way': '' },
  { 'name': '檸檬果醬', 'category': '果醬', 'way': '' },
  { 'name': '芒果果醬', 'category': '果醬', 'way': '' },
  { 'name': '椰子果醬', 'category': '果醬', 'way': '' },
  { 'name': '香蕉果醬', 'category': '果醬', 'way': '' },
  { 'name': '桃子果醬', 'category': '果醬', 'way': '' },
  { 'name': '蘋果果醬', 'category': '果醬', 'way': '' },
  { 'name': '葡萄果醬', 'category': '果醬', 'way': '' },
  {
    "name": "春風進行曲",
    "category": "花束",
    "way": ""
  },
  {
    "name": "炎帝華爾滋",
    "category": "花束",
    "way": ""
  },
  {
    "name": "月夜夜曲",
    "category": "花束",
    "way": ""
  },
  {
    "name": "雪花輪舞曲",
    "category": "花束",
    "way": ""
  },
  {
    "name": "大地協奏曲",
    "category": "花束",
    "way": ""
  },
  {
    "name": "彩虹花束",
    "category": "花束",
    "way": ""
  },
  {
    "name": "花香香水",
    "category": "香水",
    "way": ""
  },
  {
    "name": "果香香水",
    "category": "香水",
    "way": ""
  },
  {
    "name": "百花香水",
    "category": "香水",
    "way": ""
  },
  {
    "name": "魅惑香水",
    "category": "香水",
    "way": ""
  },
  {
    "name": "珠寶戒指",
    "category": "飾品",
    "way": ""
  },
  {
    "name": "珠寶墜子",
    "category": "飾品",
    "way": ""
  },
  {
    "name": "時髦手環",
    "category": "飾品",
    "way": ""
  },
  {
    "name": "發光手錶",
    "category": "飾品",
    "way": ""
  },
  { 'name': '閃電熔結岩', 'category': '寶物', 'way': '區域1小積水、可樂商店運氣' },
  { 'name': '水砷鐵銅石', 'category': '寶物', 'way': '區域2小積水、可樂商店碰運氣' },
  { 'name': '沙漠玫瑰', 'category': '寶物', 'way': '' },
  { 'name': '兔尾石', 'category': '寶物', 'way': '' },
  { 'name': '吉丙隕石', 'category': '寶物', 'way': '' },
  { 'name': '橄欖隕鐵', 'category': '寶物', 'way': '' },
  { 'name': '龍涎香', 'category': '寶物', 'way': '' },
  { 'name': '洞穴珍珠', 'category': '寶物', 'way': '' },
  { 'name': '琥珀結晶', 'category': '寶物', 'way': '' },
  { 'name': '橄欖結晶', 'category': '寶物', 'way': '區域3小積水、可樂商店碰運氣' },
  { 'name': '古代飾品', 'category': '寶物', 'way': '' },
  { 'name': '古代鏡子', 'category': '寶物', 'way': '' },
  { 'name': '古代擺飾', 'category': '寶物', 'way': '' },
  { 'name': '古代石碑', 'category': '寶物', 'way': '' },
  { 'name': '老舊的硬幣', 'category': '寶物', 'way': '' },
  { 'name': '老舊的團扇', 'category': '寶物', 'way': '' },
  { 'name': '老舊的卷軸', 'category': '寶物', 'way': '' },
  { 'name': '老舊的羅盤', 'category': '寶物', 'way': '' },
  { 'name': '老舊的地圖', 'category': '寶物', 'way': '' },
  { 'name': '閃亮的馬刺', 'category': '寶物', 'way': '' },
  { 'name': '閃亮的冠軍皮帶扣', 'category': '寶物', 'way': '' },
  { 'name': '黃金牛角頭盔', 'category': '寶物', 'way': '' },
  { 'name': '黃金號角', 'category': '寶物', 'way': '' },
  { 'name': '黑色古文書', 'category': '寶物', 'way': '' },
  { 'name': '白色古文書', 'category': '寶物', 'way': '' },
  { 'name': '玻璃鞋', 'category': '寶物', 'way': '' },
  { 'name': '古老的齒輪', 'category': '寶物', 'way': '' },
  { 'name': '古代貝類化石', 'category': '寶物', 'way': '' },
  { 'name': '古代節肢動物化石', 'category': '寶物', 'way': '' },
  { 'name': '恐龍化石', 'category': '寶物', 'way': '' },
  {
    "name": "木材加工機",
    "category": "加工機",
    "way": ""
  },
  {
    "name": "絲線加工機",
    "category": "加工機",
    "way": ""
  },
  {
    "name": "布料加工機",
    "category": "加工機",
    "way": ""
  },
  {
    "name": "金屬塊加工機",
    "category": "加工機",
    "way": ""
  },
  {
    "name": "珠寶加工機",
    "category": "加工機",
    "way": ""
  },
  {
    "name": "磚頭加工機",
    "category": "加工機",
    "way": ""
  },
  {
    "name": "農作物種子加工機",
    "category": "加工機",
    "way": ""
  },
  {
    "name": "粉末加工機",
    "category": "加工機",
    "way": ""
  },
  {
    "name": "幼苗加工機",
    "category": "加工機",
    "way": ""
  },
  {
    "name": "果醬加工機",
    "category": "加工機",
    "way": ""
  },
  {
    "name": "菇類種菌加工機",
    "category": "加工機",
    "way": ""
  },
  {
    "name": "蜂蜜加工機",
    "category": "加工機",
    "way": ""
  },
  {
    "name": "毛線加工機",
    "category": "加工機",
    "way": ""
  },
  {
    "name": "毛料加工機",
    "category": "加工機",
    "way": ""
  },
  {
    "name": "起司加工機",
    "category": "加工機",
    "way": ""
  },
  {
    "name": "奶油加工機",
    "category": "加工機",
    "way": ""
  },
  {
    "name": "優格加工機",
    "category": "加工機",
    "way": ""
  },
  {
    "name": "美乃滋加工機",
    "category": "加工機",
    "way": ""
  },
  {
    "name": "調味料加工機",
    "category": "加工機",
    "way": ""
  },
  {
    "name": "液體調味料加工機",
    "category": "加工機",
    "way": ""
  },
  {
    "name": "香精加工機",
    "category": "加工機",
    "way": ""
  },
  {
    "name": "染料加工機",
    "category": "加工機",
    "way": ""
  },
];

const itemRawData = itemRawDataZHTW.map(i => {
  return {
    key: i.name,
    name: lang(i.name),
    category: i.category,
    way: i.way,
  }
});

export default itemRawData;