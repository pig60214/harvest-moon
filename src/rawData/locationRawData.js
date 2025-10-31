const locationRawData = [
  {
    'name': '巡林員小屋',
    'shortName': '巡林',
    'rowClass': 'row-start-1',
    'colClass':'col-start-8 col-span-2',
    'openTime': '',
    'closedDay': '',
    'colorClass': 'md:underline underline-offset-[-2px] decoration-8 decoration-orange-800/80'
  },
  {
    'name': '清心庵',
    'rowClass': 'row-start-2',
    'colClass':'col-start-2 col-span-3',
    'openTime': '',
    'closedDay': '',
    'colorClass': 'md:underline underline-offset-[-2px] decoration-8 decoration-sky-800/75'
  },
  {
    'name': '鎮公所',
    'rowClass': 'row-start-2',
    'colClass':'col-start-6 col-span-4',
    'openTime': '',
    'closedDay': '',
    'colorClass': 'md:underline underline-offset-[-2px] decoration-8 decoration-red-900/75'
  },
  {
    'name': '博物館',
    'rowClass': 'row-start-2',
    'colClass':'col-start-10 col-span-4',
    'openTime': 'AM9~PM6',
    'closedDay': 'Thu',
    'colorClass': 'md:underline underline-offset-[-2px] decoration-8 decoration-zinc-50'
  },
  {
    'name': '旅館＆咖啡廳',
    'shortName': '咖啡廳',
    'rowClass': 'row-start-3',
    'colClass':'col-start-14 col-span-4',
    'openTime': 'AM8~PM6',
    'closedDay': 'Tue',
    'colorClass': 'md:underline underline-offset-[-2px] decoration-8 decoration-sky-700/75'
  },
  {
    'name': '最喜番的家',
    'shortName': '最喜番',
    'rowClass': 'row-start-4',
    'colClass':'col-start-1 col-span-3',
    'openTime': '',
    'closedDay': '',
    'colorClass': 'md:underline underline-offset-[-2px] decoration-8 decoration-yellow-50'
  },
  {
    'name': '工具行',
    'rowClass': 'row-start-4',
    'colClass':'col-start-4 col-span-3',
    'openTime': 'AM8~PM6',
    'closedDay': 'Tue',
    'colorClass': 'md:underline underline-offset-[-2px] decoration-8 decoration-rose-800/50'
  },
  {
    'name': '美人沙龍',
    'shortName': '沙龍',
    'rowClass': 'row-start-4',
    'colClass':'col-start-8 col-span-3',
    'openTime': 'AM10~PM6',
    'closedDay': 'Thu',
    'colorClass': 'md:underline underline-offset-[-2px] decoration-8 decoration-indigo-50/75'
  },
  {
    'name': '花店',
    'rowClass': 'row-start-4',
    'colClass':'col-start-11 col-span-3',
    'openTime': 'AM8~PM6',
    'closedDay': 'Mon',
    'colorClass': 'md:underline underline-offset-[-2px] decoration-8 decoration-amber-600/80'
  },
  {
    'name': '觀光服務中心',
    'shortName': '觀光',
    'rowClass': 'row-start-4',
    'colClass':'col-start-17 col-span-2',
    'openTime': 'AM9~PM6',
    'closedDay': '',
    'colorClass': 'md:underline underline-offset-[-2px] decoration-8 decoration-teal-300/75'
  },
  {
    'name': '木工店',
    'rowClass': 'row-start-5',
    'colClass':'col-start-4 col-span-3',
    'openTime': 'AM8~PM6',
    'closedDay': 'Wed',
    'colorClass': 'md:underline underline-offset-[-2px] decoration-8 decoration-red-800/80'
  },
  {
    'name': '食材店',
    'rowClass': 'row-start-5',
    'colClass':'col-start-8 col-span-3',
    'openTime': 'AM10~PM6',
    'closedDay': 'Mon',
    'colorClass': 'md:underline underline-offset-[-2px] decoration-8 decoration-yellow-800/75'
  },
  {
    'name': '小餐館',
    'rowClass': 'row-start-5',
    'colClass':'col-start-11 col-span-3',
    'openTime': 'PM12~PM10',
    'closedDay': '',
    'colorClass': 'md:underline underline-offset-[-2px] decoration-8 decoration-red-700/90'
  },
  {
    'name': '動物商店',
    'shortName': '動物店',
    'rowClass': 'row-start-6',
    'colClass':'col-start-4 col-span-3',
    'openTime': 'AM8~PM6',
    'closedDay': 'Tue',
    'colorClass': 'md:underline underline-offset-[-2px] decoration-8 decoration-amber-300'
  },
  {
    'name': '雜貨店',
    'rowClass': 'row-start-6',
    'colClass':'col-start-8 col-span-3',
    'openTime': 'AM8~PM6',
    'closedDay': 'Tue',
    'colorClass': 'md:underline underline-offset-[-2px] decoration-8 decoration-amber-400'
  },
  {
    'name': '馬可斯的家',
    'shortName': '馬可斯',
    'rowClass': 'row-start-6',
    'colClass':'col-start-13 col-span-3',
    'openTime': '',
    'closedDay': '',
    'colorClass': 'md:underline underline-offset-[-2px] decoration-8 decoration-cyan-600/75'
  },
];

locationRawData.forEach(loc => {
  if(!loc.shortName) {
    loc.shortName = loc.name;
  }
})

export default locationRawData;