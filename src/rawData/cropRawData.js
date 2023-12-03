import lang from "./resourse";

const cropRawDataZHTW = [
  {
    'name': '咖啡豆',
    'category': '果樹',
    'season': ['春'],
  },
  {
    'name': '柳橙',
    'category': '果樹',
    'season': ['春'],
  },
  {
    'name': '櫻桃',
    'category': '果樹',
    'season': ['春'],
  },
  {
    'name': '酪梨',
    'category': '果樹',
    'season': ['春'],
    'hasVariant': true,
  },
  {
    'name': '巨大酪梨',
    'category': '果樹',
    'season': ['春'],
    'hasVariant': true,
  },
  {
    'name': '杏仁',
    'category': '果樹',
    'season': ['夏'],
  },
  {
    'name': '可可豆',
    'category': '果樹',
    'season': ['夏'],
  },
  {
    'name': '椰子',
    'category': '果樹',
    'season': ['夏'],
  },
  {
    'name': '檸檬',
    'category': '果樹',
    'season': ['夏'],
  },
  {
    'name': '香蕉',
    'category': '果樹',
    'season': ['夏'],
  },
  {
    'name': '桃子',
    'category': '果樹',
    'season': ['夏'],
    'hasVariant': true,
  },
  {
    'name': '黃金桃子',
    'category': '果樹',
    'season': ['夏'],
    'hasVariant': true,
  },
  {
    'name': '芒果',
    'category': '果樹',
    'season': ['夏'],
  },
  {
    'name': '橄欖',
    'category': '果樹',
    'season': ['秋'],
  },
  {
    'name': '葡萄',
    'category': '果樹',
    'season': ['秋'],
  },
  {
    'name': '蘋果',
    'category': '果樹',
    'season': ['秋'],
    'hasVariant': true,
  },
  {
    'name': '黃金蘋果',
    'category': '果樹',
    'season': ['秋'],
    'hasVariant': true,
  },
  {
    "name": "洋蔥",
    "category": "蔬菜",
    "season": [
      "春",
      "夏",
    ],
  },
  {
    "name": "蕪菁",
    "category": "蔬菜",
    "season": [
      "春",
    ],
    "hasVariant": true,
  },
  {
    "name": "巨大蕪菁",
    "category": "蔬菜",
    "season": [
      "春",
    ],
    "hasVariant": true,
  },
  {
    "name": "草莓",
    "category": "蔬菜",
    "season": [
      "春",
    ],
    "hasVariant": true,
  },
  {
    "name": "黃金草莓",
    "category": "蔬菜",
    "season": [
      "春",
    ],
    "hasVariant": true,
  },
  {
    "name": "小黃瓜",
    "category": "蔬菜",
    "season": [
      "春",
    ],
  },
  {
    "name": "大蒜",
    "category": "蔬菜",
    "season": [
      "春",
    ],
  },
  {
    "name": "櫻桃蘿蔔",
    "category": "蔬菜",
    "season": [
      "春",
      "夏",
      "秋"
    ],
  },

  {
    "name": "南瓜",
    "category": "蔬菜",
    "season": [
      "夏"
    ],
  },
  {
    "name": "甜椒",
    "category": "蔬菜",
    "season": [
      "夏"
    ],
  },
  {
    "name": "玉蜀黍",
    "category": "蔬菜",
    "season": [
      "夏"
    ],
    "hasVariant": true,
  },
  {
    "name": "彩色玉蜀黍",
    "category": "蔬菜",
    "season": [
      "夏"
    ],
    "hasVariant": true,
  },
  {
    "name": "節瓜",
    "category": "蔬菜",
    "season": [
      "夏"
    ],
  },
  {
    "name": "鳳梨",
    "category": "蔬菜",
    "season": [
      "夏"
    ],
  },
  {
    "name": "西瓜",
    "category": "蔬菜",
    "season": [
      "夏"
    ],
    "topPrice": true,
  },
  {
    "name": "番茄",
    "category": "蔬菜",
    "season": [
      "夏",
      "秋",
    ],
    "hasVariant": true,
  },
  {
    "name": "巨大番茄",
    "category": "蔬菜",
    "season": [
      "夏",
      "秋",
    ],
    "hasVariant": true,
  },
  {
    "name": "哈密瓜",
    "category": "蔬菜",
    "season": [
      "夏",
      "秋",
    ],
    "hasVariant": true,
  },
  {
    "name": "珠寶哈密瓜",
    "category": "蔬菜",
    "season": [
      "夏",
      "秋",
    ],
    "hasVariant": true,
  },
  {
    "name": "茄子",
    "category": "蔬菜",
    "season": [
      "夏"
    ],
    "hasVariant": true,
  },
  {
    "name": "圓球茄子",
    "category": "蔬菜",
    "season": [
      "夏"
    ],
    "hasVariant": true,
  },
  {
    "name": "青椒",
    "category": "蔬菜",
    "season": [
      "夏"
    ],
  },

  {
    "name": "菠菜",
    "category": "蔬菜",
    "season": [
      "秋",
    ],
    "hasVariant": true,
  },
  {
    "name": "愛心菠菜",
    "category": "蔬菜",
    "season": [
      "秋",
    ],
    "hasVariant": true,
  },
  {
    "name": "秋葵",
    "category": "蔬菜",
    "season": [
      "秋",
    ],
  },
  {
    "name": "蕃薯",
    "category": "蔬菜",
    "season": [
      "秋",
    ],
    "topPrice": true,
    "hasVariant": true,
  },
  {
    "name": "巨大蕃薯",
    "category": "蔬菜",
    "season": [
      "秋",
    ],
    "topPrice": true,
    "hasVariant": true,
  },
  {
    "name": "辣椒",
    "category": "蔬菜",
    "season": [
      "秋",
    ],
  },
  {
    "name": "胡蘿蔔",
    "category": "蔬菜",
    "season": [
      "秋",
      "冬",
    ],
  },
  {
    "name": "青江菜",
    "category": "蔬菜",
    "season": [
      "秋",
      "冬",
    ],
  },
  {
    "name": "白菜",
    "category": "蔬菜",
    "season": [
      "秋",
      "冬"
    ],
    "hasVariant": true,
  },
  {
    "name": "黃金白菜",
    "category": "蔬菜",
    "season": [
      "秋",
      "冬"
    ],
    "hasVariant": true,
  },

  {
    "name": "青蔥",
    "category": "蔬菜",
    "season": [
      "冬"
    ],
    "hasVariant": true,
    "topPrice": true,
  },
  {
    "name": "巨大的青蔥",
    "category": "蔬菜",
    "season": [
      "冬"
    ],
    "hasVariant": true,
    "topPrice": true,
  },
  {
    "name": "牛蒡",
    "category": "蔬菜",
    "season": [
      "冬"
    ],
  },
  {
    "name": "馬鈴薯",
    "category": "蔬菜",
    "season": [
      "冬",
      "春",
      "夏",
    ],
    "hasVariant": true,
  },
  {
    "name": "星型馬鈴薯",
    "category": "蔬菜",
    "season": [
      "冬",
      "春",
      "夏",
    ],
    "hasVariant": true,
  },
  {
    "name": "高麗菜",
    "category": "蔬菜",
    "season": [
      "冬",
      "春",
    ],
  },
  {
    "name": "花椰菜",
    "category": "蔬菜",
    "season": [
      "冬",
      "春",
    ],
    "topPrice": true,
  },
  {
    "name": "白蘿蔔",
    "category": "蔬菜",
    "season": [
      "冬",
      "春",
    ],
    "hasVariant": true
  },
  {
    "name": "分岔白蘿蔔",
    "category": "蔬菜",
    "season": [
      "冬",
      "春",
    ],
    "hasVariant": true
  },

  {
    "name": "鬱金香",
    "category": "花卉",
    "season": [
      "春"
    ],
  },
  {
    "name": "粉蝶花",
    "category": "花卉",
    "season": [
      "春"
    ],
  },
  {
    "name": "三色堇",
    "category": "花卉",
    "season": [
      "春"
    ],
  },
  {
    "name": "陸蓮花",
    "category": "花卉",
    "season": [
      "春"
    ],
  },
  {
    "name": "黑色三色堇",
    "category": "花卉",
    "season": [
      "春"
    ],
  },

  {
    "name": "扶桑花",
    "category": "花卉",
    "season": [
      "夏"
    ],
  },
  {
    "name": "矮牽牛",
    "category": "花卉",
    "season": [
      "夏"
    ],
  },
  {
    "name": "萬壽菊",
    "category": "花卉",
    "season": [
      "夏"
    ],
  },
  {
    "name": "向日葵",
    "category": "花卉",
    "season": [
      "夏"
    ],
  },
  {
    "name": "百合",
    "category": "花卉",
    "season": [
      "夏"
    ],
  },

  {
    "name": "玫瑰",
    "category": "花卉",
    "season": [
      "秋"
    ],
  },
  {
    "name": "乒乓菊",
    "category": "花卉",
    "season": [
      "秋"
    ],
  },
  {
    "name": "鐵線蓮",
    "category": "花卉",
    "season": [
      "秋"
    ],
  },
  {
    "name": "瑪格麗特",
    "category": "花卉",
    "season": [
      "秋"
    ],
  },
  {
    "name": "黑薔薇",
    "category": "花卉",
    "season": [
      "秋"
    ],
  },

  {
    "name": "富貴菊",
    "category": "花卉",
    "season": [
      "冬"
    ],
  },
  {
    "name": "報春花",
    "category": "花卉",
    "season": [
      "冬"
    ],
  },
  {
    "name": "秋海棠",
    "category": "花卉",
    "season": [
      "冬"
    ],
  },
  {
    "name": "風鈴草",
    "category": "花卉",
    "season": [
      "冬"
    ],
  },
  {
    "name": "聖誕玫瑰",
    "category": "花卉",
    "season": [
      "冬"
    ],
    "topPrice": true,
  },

  {
    "name": "稻米",
    "category": "農作物",
    "season": [
      "春",
      "夏",
      "秋"
    ],
  },
  {
    "name": "小麥",
    "category": "農作物",
    "season": [
      "春",
      "夏",
      "秋"
    ],
  },
  {
    "name": "茶葉",
    "category": "農作物",
    "season": [
      "春",
      "夏",
      "秋"
    ],
  },
  {
    "name": "豆子",
    "category": "農作物",
    "season": [
      "春",
      "夏",
      "秋"
    ],
  },
  {
    "name": "乾草飼料",
    "category": "農作物",
    "season": [
      "春",
      "夏",
      "秋"
    ],
  },
];

const cropRawData = cropRawDataZHTW.map(crop => {
  const translatedCrop = {
    key: crop.name,
    name: lang(crop.name),
    category: crop.category,
    season: crop.season,
    hasVariant: crop.hasVariant ?? false,
    topPrice: crop.topPrice ?? false,
  }
  return translatedCrop;
})

export default cropRawData;