const locationRawData = [
  {
    'name': '巡林員小屋',
    'rowClass': 'row-start-1',
    'colClass':'col-start-3',
    'openTime': '',
    'closedDay': ''
  },
  {
    'name': '清心庵',
    'rowClass': 'row-start-2',
    'colClass':'col-start-1',
    'openTime': '',
    'closedDay': ''
  },
  {
    'name': '鎮公所',
    'rowClass': 'row-start-2',
    'colClass':'col-start-3 col-span-2',
    'openTime': '',
    'closedDay': ''
  },
  {
    'name': '博物館',
    'rowClass': 'row-start-2',
    'colClass':'col-start-5 col-span-2',
    'openTime': 'AM9~PM6',
    'closedDay': 'Thu'
  },
  {
    'name': '旅館＆咖啡廳',
    'rowClass': 'row-start-3',
    'colClass':'col-start-7 col-span-2',
    'openTime': 'AM8~PM6',
    'closedDay': 'Tue'
  },
  {
    'name': '最喜翻的家',
    'rowClass': 'row-start-4',
    'colClass':'col-start-1',
    'openTime': '',
    'closedDay': ''
  },
  {
    'name': '工具行',
    'rowClass': 'row-start-4',
    'colClass':'col-start-2',
    'openTime': 'AM8~PM6',
    'closedDay': 'Tue'
  },
  {
    'name': '美人沙龍',
    'rowClass': 'row-start-4',
    'colClass':'col-start-4',
    'openTime': 'AM10~PM6',
    'closedDay': 'Thu'
  },
  {
    'name': '花店',
    'rowClass': 'row-start-4',
    'colClass':'col-start-6',
    'openTime': 'AM8~PM6',
    'closedDay': 'Mon'
  },
  {
    'name': '觀光服務中心',
    'rowClass': 'row-start-4',
    'colClass':'col-start-9',
    'openTime': 'AM9~PM6',
    'closedDay': ''
  },
  {
    'name': '木工店',
    'rowClass': 'row-start-5',
    'colClass':'col-start-2',
    'openTime': 'AM8~PM6',
    'closedDay': 'Wed'
  },
  {
    'name': '食材店',
    'rowClass': 'row-start-5',
    'colClass':'col-start-4',
    'openTime': 'AM10~PM6',
    'closedDay': 'Mon'
  },
  {
    'name': '小餐館',
    'rowClass': 'row-start-5',
    'colClass':'col-start-6',
    'openTime': 'PM12~PM10',
    'closedDay': ''
  },
  {
    'name': '動物商店',
    'rowClass': 'row-start-6',
    'colClass':'col-start-2',
    'openTime': 'AM8~PM6',
    'closedDay': 'Tue'
  },
  {
    'name': '雜貨店',
    'rowClass': 'row-start-6',
    'colClass':'col-start-4',
    'openTime': 'AM8~PM6',
    'closedDay': 'Tue'
  },
  {
    'name': '馬可斯的家',
    'rowClass': 'row-start-6',
    'colClass':'col-start-7',
    'openTime': '',
    'closedDay': ''
  },
];

function addGetter(location) {
  Object.defineProperty(location, 'highlightClass', {
    get: function() { return this.highlight ? 'bg-stone-200' : '' }
  });

  Object.defineProperty(location, 'goToShoppingClass', {
    get: function() { return this.goToShopping ? 'bg-sky-600' : 'bg-sky-100' }
  });

  Object.defineProperty(location, 'goToGiveTheGiftClass', {
    get: function() { return this.goToGiveTheGift ? 'bg-pink-600' : 'bg-pink-100' }
  });
}

function initLocations() {
  locationRawData.forEach(location => {
    location.highlight = false;
    location.goToShopping = false;
    location.goToGiveTheGift = false;

    addGetter(location);
  });
}

initLocations();

export default locationRawData;
export { addGetter };