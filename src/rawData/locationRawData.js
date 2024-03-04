const locationRawData = [
  {
    'name': '巡林員小屋',
    'shortName': '巡林',
    'rowClass': 'row-start-1',
    'colClass':'col-start-8 col-span-2',
    'openTime': '',
    'closedDay': ''
  },
  {
    'name': '清心庵',
    'rowClass': 'row-start-2',
    'colClass':'col-start-2 col-span-3',
    'openTime': '',
    'closedDay': ''
  },
  {
    'name': '鎮公所',
    'rowClass': 'row-start-2',
    'colClass':'col-start-6 col-span-4',
    'openTime': '',
    'closedDay': ''
  },
  {
    'name': '博物館',
    'rowClass': 'row-start-2',
    'colClass':'col-start-10 col-span-4',
    'openTime': 'AM9~PM6',
    'closedDay': 'Thu'
  },
  {
    'name': '旅館＆咖啡廳',
    'shortName': '咖啡廳',
    'rowClass': 'row-start-3',
    'colClass':'col-start-14 col-span-4',
    'openTime': 'AM8~PM6',
    'closedDay': 'Tue'
  },
  {
    'name': '最喜番的家',
    'shortName': '最喜番',
    'rowClass': 'row-start-4',
    'colClass':'col-start-1 col-span-3',
    'openTime': '',
    'closedDay': ''
  },
  {
    'name': '工具行',
    'rowClass': 'row-start-4',
    'colClass':'col-start-4 col-span-3',
    'openTime': 'AM8~PM6',
    'closedDay': 'Tue'
  },
  {
    'name': '美人沙龍',
    'shortName': '沙龍',
    'rowClass': 'row-start-4',
    'colClass':'col-start-8 col-span-3',
    'openTime': 'AM10~PM6',
    'closedDay': 'Thu'
  },
  {
    'name': '花店',
    'rowClass': 'row-start-4',
    'colClass':'col-start-11 col-span-3',
    'openTime': 'AM8~PM6',
    'closedDay': 'Mon'
  },
  {
    'name': '觀光服務中心',
    'shortName': '觀光',
    'rowClass': 'row-start-4',
    'colClass':'col-start-17 col-span-2',
    'openTime': 'AM9~PM6',
    'closedDay': ''
  },
  {
    'name': '木工店',
    'rowClass': 'row-start-5',
    'colClass':'col-start-4 col-span-3',
    'openTime': 'AM8~PM6',
    'closedDay': 'Wed'
  },
  {
    'name': '食材店',
    'rowClass': 'row-start-5',
    'colClass':'col-start-8 col-span-3',
    'openTime': 'AM10~PM6',
    'closedDay': 'Mon'
  },
  {
    'name': '小餐館',
    'rowClass': 'row-start-5',
    'colClass':'col-start-11 col-span-3',
    'openTime': 'PM12~PM10',
    'closedDay': ''
  },
  {
    'name': '動物商店',
    'shortName': '動物店',
    'rowClass': 'row-start-6',
    'colClass':'col-start-4 col-span-3',
    'openTime': 'AM8~PM6',
    'closedDay': 'Tue'
  },
  {
    'name': '雜貨店',
    'rowClass': 'row-start-6',
    'colClass':'col-start-8 col-span-3',
    'openTime': 'AM8~PM6',
    'closedDay': 'Tue'
  },
  {
    'name': '馬可斯的家',
    'shortName': '馬可斯',
    'rowClass': 'row-start-6',
    'colClass':'col-start-13 col-span-3',
    'openTime': '',
    'closedDay': ''
  },
];

locationRawData.forEach(loc => {
  if(!loc.shortName) {
    loc.shortName = loc.name;
  }
})

export default locationRawData;