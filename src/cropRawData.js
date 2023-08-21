const cropRawData = [
  {
    'name': '咖啡豆',
    'category': '果樹',
    'season': ['春天'],
  },
  {
    'name': '柳橙',
    'category': '果樹',
    'season': ['春天'],
  },
  {
    'name': '櫻桃',
    'category': '果樹',
    'season': ['春天'],
  },
  {
    'name': '酪梨',
    'category': '果樹',
    'season': ['春天'],
    'hasVariant': true,
  },

  {
    'name': '杏仁',
    'category': '果樹',
    'season': ['夏天'],
  },
  {
    'name': '可可豆',
    'category': '果樹',
    'season': ['夏天'],
  },
  {
    'name': '椰子',
    'category': '果樹',
    'season': ['夏天'],
  },
  {
    'name': '檸檬',
    'category': '果樹',
    'season': ['夏天'],
  },
  {
    'name': '香蕉',
    'category': '果樹',
    'season': ['夏天'],
  },
  {
    'name': '桃子',
    'category': '果樹',
    'season': ['夏天'],
    'hasVariant': true,
  },
  {
    'name': '芒果',
    'category': '果樹',
    'season': ['夏天'],
  },
  {
    'name': '橄欖',
    'category': '果樹',
    'season': ['秋天'],
  },
  {
    'name': '葡萄',
    'category': '果樹',
    'season': ['秋天'],
  },
  {
    'name': '蘋果',
    'category': '果樹',
    'season': ['秋天'],
    'hasVariant': true,
  },

  {
    "name": "洋蔥",
    "category": "蔬菜",
    "season": [
      "春天",
      "夏天",
    ],
  },
  {
    "name": "蕪菁",
    "category": "蔬菜",
    "season": [
      "春天",
    ],
    "hasVariant": true,
  },
  {
    "name": "草莓",
    "category": "蔬菜",
    "season": [
      "春天",
    ],
    "hasVariant": true,
  },
  {
    "name": "小黃瓜",
    "category": "蔬菜",
    "season": [
      "春天",
    ],
  },
  {
    "name": "大蒜",
    "category": "蔬菜",
    "season": [
      "春天",
    ],
  },
  {
    "name": "櫻桃蘿蔔",
    "category": "蔬菜",
    "season": [
      "春天",
      "夏天",
      "秋天"
    ],
  },

  {
    "name": "南瓜",
    "category": "蔬菜",
    "season": [
      "夏天"
    ],
  },
  {
    "name": "甜椒",
    "category": "蔬菜",
    "season": [
      "夏天"
    ],
  },
  {
    "name": "玉蜀黍",
    "category": "蔬菜",
    "season": [
      "夏天"
    ],
    "hasVariant": true,
  },
  {
    "name": "節瓜",
    "category": "蔬菜",
    "season": [
      "夏天"
    ],
  },
  {
    "name": "鳳梨",
    "category": "蔬菜",
    "season": [
      "夏天"
    ],
  },
  {
    "name": "西瓜",
    "category": "蔬菜",
    "season": [
      "夏天"
    ],
    "topPrice": true,
  },
  {
    "name": "番茄",
    "category": "蔬菜",
    "season": [
      "夏天"
    ],
    "hasVariant": true,
  },
  {
    "name": "哈密瓜",
    "category": "蔬菜",
    "season": [
      "夏天",
      "秋天",
    ],
    "hasVariant": true,
  },
  {
    "name": "茄子",
    "category": "蔬菜",
    "season": [
      "夏天"
    ],
    "hasVariant": true,
  },
  {
    "name": "青椒",
    "category": "蔬菜",
    "season": [
      "夏天"
    ],
  },

  {
    "name": "菠菜",
    "category": "蔬菜",
    "season": [
      "秋天",
    ],
    "hasVariant": true,
  },
  {
    "name": "秋葵",
    "category": "蔬菜",
    "season": [
      "秋天",
    ],
  },
  {
    "name": "地瓜",
    "category": "蔬菜",
    "season": [
      "秋天",
    ],
    "hasVariant": true,
  },
  {
    "name": "辣椒",
    "category": "蔬菜",
    "season": [
      "秋天",
    ],
  },
  {
    "name": "胡蘿蔔",
    "category": "蔬菜",
    "season": [
      "秋天",
      "冬天",
    ],
  },
  {
    "name": "青江菜",
    "category": "蔬菜",
    "season": [
      "秋天",
      "冬天",
    ],
  },
  {
    "name": "白菜",
    "category": "蔬菜",
    "season": [
      "秋天",
      "冬天"
    ],
    "hasVariant": true,
  },

  {
    "name": "青蔥",
    "category": "蔬菜",
    "season": [
      "冬天"
    ],
    "hasVariant": true,
    "topPrice": true,
  },
  {
    "name": "牛蒡",
    "category": "蔬菜",
    "season": [
      "冬天"
    ],
  },
  {
    "name": "馬鈴薯",
    "category": "蔬菜",
    "season": [
      "冬天",
      "春天",
      "夏天",
    ],
    "hasVariant": true,
  },
  {
    "name": "高麗菜",
    "category": "蔬菜",
    "season": [
      "冬天",
      "春天",
    ],
    "topPrice": false,
  },
  {
    "name": "花椰菜",
    "category": "蔬菜",
    "season": [
      "冬天",
      "春天",
    ],
    "topPrice": true,
  },
  {
    "name": "白蘿蔔",
    "category": "蔬菜",
    "season": [
      "冬天",
      "春天",
    ],
    "hasVariant": true
  },

  {
    "name": "鬱金香",
    "category": "花卉",
    "season": [
      "春天"
    ],
  },
  {
    "name": "粉蝶花",
    "category": "花卉",
    "season": [
      "春天"
    ],
  },
  {
    "name": "三色堇",
    "category": "花卉",
    "season": [
      "春天"
    ],
  },
  {
    "name": "陸蓮花",
    "category": "花卉",
    "season": [
      "春天"
    ],
  },
  {
    "name": "黑色三色堇",
    "category": "花卉",
    "season": [
      "春天"
    ],
  },

  {
    "name": "扶桑花",
    "category": "花卉",
    "season": [
      "夏天"
    ],
  },
  {
    "name": "矮牽牛",
    "category": "花卉",
    "season": [
      "夏天"
    ],
  },
  {
    "name": "萬壽菊",
    "category": "花卉",
    "season": [
      "夏天"
    ],
  },
  {
    "name": "向日葵",
    "category": "花卉",
    "season": [
      "夏天"
    ],
  },
  {
    "name": "百合",
    "category": "花卉",
    "season": [
      "夏天"
    ],
  },

  {
    "name": "玫瑰",
    "category": "花卉",
    "season": [
      "秋天"
    ],
  },
  {
    "name": "乒乓菊",
    "category": "花卉",
    "season": [
      "秋天"
    ],
  },
  {
    "name": "鐵線蓮",
    "category": "花卉",
    "season": [
      "秋天"
    ],
  },
  {
    "name": "瑪格麗特",
    "category": "花卉",
    "season": [
      "秋天"
    ],
  },
  {
    "name": "黑薔薇",
    "category": "花卉",
    "season": [
      "秋天"
    ],
  },

  {
    "name": "富貴菊",
    "category": "花卉",
    "season": [
      "冬天"
    ],
  },
  {
    "name": "報春花",
    "category": "花卉",
    "season": [
      "冬天"
    ],
  },
  {
    "name": "秋海棠",
    "category": "花卉",
    "season": [
      "冬天"
    ],
  },
  {
    "name": "風鈴草",
    "category": "花卉",
    "season": [
      "冬天"
    ],
  },
  {
    "name": "聖誕玫瑰",
    "category": "花卉",
    "season": [
      "冬天"
    ],
    "topPrice": true,
  },

  {
    "name": "稻米",
    "category": "農作物",
    "season": [
      "春天",
      "夏天",
      "秋天"
    ],
  },
  {
    "name": "小麥",
    "category": "農作物",
    "season": [
      "春天",
      "夏天",
      "秋天"
    ],
  },
  {
    "name": "茶葉",
    "category": "農作物",
    "season": [
      "春天",
      "夏天",
      "秋天"
    ],
  },
  {
    "name": "豆子",
    "category": "農作物",
    "season": [
      "春天",
      "夏天",
      "秋天"
    ],
  },
  {
    "name": "乾草飼料",
    "category": "農作物",
    "season": [
      "春天",
      "夏天",
      "秋天"
    ],
  },
];

const cropRawDataNameAsKey = {};

cropRawData.forEach(data => cropRawDataNameAsKey[data.name] = data);

export { cropRawData, cropRawDataNameAsKey };