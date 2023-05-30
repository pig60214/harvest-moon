const cropRawData = [
  {
    'name': '咖啡豆',
    'category': '果樹',
    'season': ['春天'],
    'hasVariant': false,
  },
  {
    'name': '柳橙',
    'category': '果樹',
    'season': ['春天'],
    'hasVariant': false,
  },
  {
    'name': '櫻桃',
    'category': '果樹',
    'season': ['春天'],
    'hasVariant': false,
  },
  {
    'name': '酪梨',
    'category': '果樹',
    'season': ['春天'],
    'hasVariant': true,
  },
  {
    "name": "南瓜",
    "category": "蔬菜",
    "season": [
      "夏天"
    ],
    "hasVariant": false,
  },
  {
    "name": "甜椒",
    "category": "蔬菜",
    "season": [
      "夏天"
    ],
    "hasVariant": false,
  },
  {
    "name": "玉米",
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
    "hasVariant": false,
  },
  {
    "name": "鳳梨",
    "category": "蔬菜",
    "season": [
      "夏天"
    ],
    "hasVariant": false,
  },
  {
    "name": "洋蔥",
    "category": "蔬菜",
    "season": [
      "夏天"
    ],
    "hasVariant": false,
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
      "夏天"
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
    "hasVariant": false,
  },
  {
    "name": "櫻桃蘿蔔",
    "category": "蔬菜",
    "season": [
      "春天",
      "夏天",
      "秋天"
    ],
    "hasVariant": false,
  },
  {
    'name': '杏仁',
    'category': '果樹',
    'season': ['夏天'],
    'hasVariant': false,
  },
  {
    'name': '可可豆',
    'category': '果樹',
    'season': ['夏天'],
    'hasVariant': false,
  },
  {
    'name': '椰子',
    'category': '果樹',
    'season': ['夏天'],
    'hasVariant': false,
  },
  {
    'name': '檸檬',
    'category': '果樹',
    'season': ['夏天'],
    'hasVariant': false,
  },
  {
    'name': '香蕉',
    'category': '果樹',
    'season': ['夏天'],
    'hasVariant': false,
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
    'hasVariant': false,
  },
  {
    'name': '橄欖',
    'category': '果樹',
    'season': ['秋天'],
    'hasVariant': false,
  },
  {
    'name': '葡萄',
    'category': '果樹',
    'season': ['秋天'],
    'hasVariant': false,
  },
  {
    'name': '蘋果',
    'category': '果樹',
    'season': ['秋天'],
    'hasVariant': true,
  },
];

const cropRawDataNameAsKey = {};

cropRawData.forEach(data => cropRawDataNameAsKey[data.name] = data);

export { cropRawData, cropRawDataNameAsKey };