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

  { 'name': '木材', 'category': '木材', 'way': '' },
  { 'name': '堅硬的木材', 'category': '木材', 'way': '' },
  { 'name': '柔韌的木材', 'category': '木材', 'way': '' },
  { 'name': '粗壯的木材', 'category': '木材', 'way': '' },
  { 'name': '夢幻木材', 'category': '木材', 'way': '' },
  { 'name': '木炭', 'category': '木材', 'way': '' },

  { 'name': '草', 'category': '草', 'way': '可樂商店' },
  { 'name': '柔軟的草', 'category': '草', 'way': '可樂商店' },
  { 'name': '堅韌的草', 'category': '草', 'way': '可樂商店' },
  { 'name': '觸感柔滑的草', 'category': '草', 'way': '可樂商店' },
  { 'name': '夢幻草', 'category': '草', 'way': '可樂商店' },

  { 'name': '繩子', 'category': '線', 'way': '' },
  { 'name': '絲線', 'category': '線', 'way': '' },
  { 'name': '柔軟的絲線', 'category': '線', 'way': '' },
  { 'name': '堅韌的絲線', 'category': '線', 'way': '' },
  { 'name': '觸感柔滑的絲線', 'category': '線', 'way': '' },
  { 'name': '夢幻絲線', 'category': '線', 'way': '' },
  { 'name': '羊毛線', 'category': '線', 'way': '' },
  { 'name': '薩福克羊毛線', 'category': '線', 'way': '' },
  { 'name': '羊駝毛線', 'category': '線', 'way': '' },
  { 'name': '茶色羊駝毛線', 'category': '線', 'way': '' },
  { 'name': '兔毛線', 'category': '線', 'way': '' },
  { 'name': '灰色兔毛線', 'category': '線', 'way': '' },
  { 'name': '桃色兔毛線', 'category': '線', 'way': '' },

  { 'name': '布', 'category': '布', 'way': '' },
  { 'name': '柔軟的布料', 'category': '布', 'way': '' },
  { 'name': '堅韌的布料', 'category': '布', 'way': '' },
  { 'name': '觸感柔滑的布料', 'category': '布', 'way': '' },
  { 'name': '夢幻布料', 'category': '布', 'way': '' },
  { 'name': '羊毛毛料', 'category': '布', 'way': '' },
  { 'name': '薩福克羊毛毛料', 'category': '布', 'way': '' },
  { 'name': '羊駝毛毛料', 'category': '布', 'way': '' },
  { 'name': '茶色羊駝毛毛料', 'category': '布', 'way': '' },
  { 'name': '兔毛毛料', 'category': '布', 'way': '' },
  { 'name': '灰色兔毛毛料', 'category': '布', 'way': '' },
  { 'name': '桃色兔毛毛料', 'category': '布', 'way': '' },

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

  { "name": "春風進行曲", "category": "花束", "way": "鬱金香、粉蝶花、三色堇、陸蓮花(都是春天的花)" },
  { "name": "炎帝華爾滋", "category": "花束", "way": "扶桑花、矮牽牛、萬壽菊、向日葵(都是夏天的花)" },
  { "name": "月夜夜曲", "category": "花束", "way": "玫瑰、乒乓菊、鐵線蓮、瑪格麗特(都是秋天的花)" },
  { "name": "雪花輪舞曲", "category": "花束", "way": "富貴菊、報春花、秋海棠、風鈴草(都是冬天的花)" },
  { "name": "彩虹花束", "category": "花束", "way": "鬱金香、向日葵、鐵線蓮、報春花" },
  { "name": "大地協奏曲", "category": "花束", "way": "(月落草、粉色貓薄荷、魔法藍草、魔法紅草)*3" },

  { "name": "花香香精", "category": "香精", "way": "花、香精加工機" },
  { "name": "果香香精", "category": "香精", "way": "花、香精加工機" },
  { "name": "百花香精", "category": "香精", "way": "花束(大地協奏曲除外)、香精加工機" },

  { "name": "果香香水", "category": "香水", "way": "花店、果香香精*3" },
  { "name": "花香香水", "category": "香水", "way": "花店、花香香精*3" },
  { "name": "百花香水", "category": "香水", "way": "花店、百花香精*3" },
  { "name": "魅惑香水", "category": "香水", "way": "花店、果香香水、花香香水、百花香水" },
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
  { 'name': '大熊木雕', 'category': '', 'way': '筆記本 > 加工' },

  { 'name': '閃電熔結岩的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '水砷鐵銅石的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '沙漠玫瑰的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '兔尾石的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '吉丙隕石的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '橄欖隕鐵的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '龍涎香的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '洞穴珍珠的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '琥珀結晶的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '橄欖結晶的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '古代飾品的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '古代鏡子的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '古代擺飾的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '古代石碑的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '老舊的硬幣的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '老舊的團扇的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '老舊的卷軸的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '老舊的羅盤的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '老舊的地圖的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '閃亮的馬刺的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '閃亮的冠軍皮帶扣的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '黃金牛角頭盔的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '黃金號角的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '黑色古文書的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '白色古文書的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '玻璃鞋的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '古老的齒輪的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '古代貝類化石的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '古代節肢動物化石的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },
  { 'name': '恐龍化石的仿製品', 'category': '寶物仿製品', 'way': '捐贈寶物給博物館後可找貝絲購買' },

  { 'name': '松鼠雕像', 'category': '動物雕像', 'way': '拍照給博物館後可找貝絲購買' },
  { 'name': '黃色狐狸雕像', 'category': '動物雕像', 'way': '拍照給博物館後可找貝絲購買' },
  { 'name': '白色狐狸雕像', 'category': '動物雕像', 'way': '拍照給博物館後可找貝絲購買' },
  { 'name': '茶色白鼬雕像', 'category': '動物雕像', 'way': '拍照給博物館後可找貝絲購買' },
  { 'name': '白色白鼬雕像', 'category': '動物雕像', 'way': '拍照給博物館後可找貝絲購買' },
  { 'name': '熊雕像', 'category': '動物雕像', 'way': '拍照給博物館後可找貝絲購買' },
  { 'name': '猴子雕像', 'category': '動物雕像', 'way': '拍照給博物館後可找貝絲購買' },
  { 'name': '麻雀雕像', 'category': '動物雕像', 'way': '拍照給博物館後可找貝絲購買' },
  { 'name': '貓頭鷹雕像', 'category': '動物雕像', 'way': '拍照給博物館後可找貝絲購買' },
  { 'name': '青鳥雕像', 'category': '動物雕像', 'way': '拍照給博物館後可找貝絲購買' },
  { 'name': '岩雷鳥雕像', 'category': '動物雕像', 'way': '拍照給博物館後可找貝絲購買' },
  { 'name': '老鷹雕像', 'category': '動物雕像', 'way': '拍照給博物館後可找貝絲購買' },
  { 'name': '游隼雕像', 'category': '動物雕像', 'way': '拍照給博物館後可找貝絲購買' },
  { 'name': '日本獨角仙雕像', 'category': '動物雕像', 'way': '拍照給博物館後可找貝絲購買' },
  { 'name': '大鍬形蟲雕像', 'category': '動物雕像', 'way': '拍照給博物館後可找貝絲購買' },
  { 'name': '長戢獨角仙雕像', 'category': '動物雕像', 'way': '拍照給博物館後可找貝絲購買' },
  { 'name': '紋白蝶雕像', 'category': '動物雕像', 'way': '拍照給博物館後可找貝絲購買' },
  { 'name': '鳳蝶雕像', 'category': '動物雕像', 'way': '拍照給博物館後可找貝絲購買' },
  { 'name': '大藍閃蝶雕像', 'category': '動物雕像', 'way': '拍照給博物館後可找貝絲購買' },
  { 'name': '螃蟹雕像', 'category': '動物雕像', 'way': '拍照給博物館後可找貝絲購買' },
  { 'name': '球馬陸雕像', 'category': '動物雕像', 'way': '拍照給博物館後可找貝絲購買' },

  { 'name': '羊毛', 'category': '毛', 'way': '' },
  { 'name': '頂級羊毛', 'category': '毛', 'way': '' },
  { 'name': '薩福克羊毛', 'category': '毛', 'way': '' },
  { 'name': '頂級薩福克羊毛', 'category': '毛', 'way': '' },
  { 'name': '羊駝毛', 'category': '毛', 'way': '' },
  { 'name': '頂級羊駝毛', 'category': '毛', 'way': '' },
  { 'name': '茶色羊駝毛', 'category': '毛', 'way': '' },
  { 'name': '頂級茶色羊駝毛', 'category': '毛', 'way': '' },
  { 'name': '兔毛', 'category': '毛', 'way': '' },
  { 'name': '頂級兔毛', 'category': '毛', 'way': '' },
  { 'name': '灰色兔毛', 'category': '毛', 'way': '' },
  { 'name': '頂級灰色兔毛', 'category': '毛', 'way': '' },
  { 'name': '桃色兔毛', 'category': '毛', 'way': '' },
  { 'name': '頂級桃色兔毛', 'category': '毛', 'way': '' },

  { 'name': '捕魚網', 'category': '捕魚網', 'way': '筆記本 > 加工、繩子*2、堅硬的木材*2' },
  { 'name': '萬能捕魚網', 'category': '捕魚網', 'way': '筆記本 > 加工、繩子*3、堅韌的木材*2' },
  { 'name': '巨大捕魚網', 'category': '捕魚網', 'way': '筆記本 > 加工、繩子*5、粗壯的木材*2' },

  { 'name': '寵物零食', 'category': '寵物用品', 'way': '雜貨店' },
  { 'name': '高級寵物零食', 'category': '寵物用品', 'way': '雜貨店' },
  { 'name': '軟軟球', 'category': '寵物用品', 'way': '雜貨店' },
  { 'name': '老鼠球', 'category': '寵物用品', 'way': '雜貨店' },

  { 'name': '白色天堂鳥', 'category': '家具', 'way': '花店' },
  { 'name': '大果木棉', 'category': '家具', 'way': '花店' },
  { 'name': '愛心榕', 'category': '家具', 'way': '花店' },
  { 'name': '花瓶', 'category': '家具', 'way': '花店' },
  { 'name': '單朵插花', 'category': '家具', 'way': '花店' },
  { 'name': '細葉榕', 'category': '家具', 'way': '花店' },
  { 'name': '盆栽', 'category': '家具', 'way': '花店' },

  { 'name': '高級座椅', 'category': '家具', 'way': '木工店' },
  { 'name': '高級沙發', 'category': '家具', 'way': '木工店' },
  { 'name': '居家沙發', 'category': '家具', 'way': '木工店' },
  { 'name': '大型桌子', 'category': '家具', 'way': '木工店' },
  { 'name': '大型圓桌', 'category': '家具', 'way': '木工店' },
  { 'name': '書架', 'category': '家具', 'way': '木工店' },
  { 'name': '餐具櫃', 'category': '家具', 'way': '木工店' },
  { 'name': '梳妝台', 'category': '家具', 'way': '木工店' },
  { 'name': '方形紙罩座燈', 'category': '家具', 'way': '木工店' },
  { 'name': '屏風', 'category': '家具', 'way': '木工店' },

  { 'name': '穿衣鏡', 'category': '家具', 'way': '筆記本 > 加工' },
  { 'name': '磚紋地毯', 'category': '家具', 'way': '筆記本 > 加工' },
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