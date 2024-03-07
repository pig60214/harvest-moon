import { useDispatch, useSelector } from "react-redux";
import { toggleToAnimal } from "store/toAnimalsSlice";
import { gaEventTracker } from 'GA';
import lang from "rawData/resourse";
import fishesRawData from "rawData/fishesRawData";
import { setAnimalCategory, setAnimalFishCategory, setAnimalLocation, setAnimalSeason } from '../store/panelSettingSlice';
import fishingLocationRawData from "rawData/fishingLocationRawData";

const wildAnimalsRawData = [
  { name: '松鼠', time: '春、夏、秋', locations: '區域1有數的地方', weather: '颱風不出現'},
  { name: '黃色狐狸', time: '全年', locations: '鎮上和森林', weather: '颱風和大雪不出現'},
  { name: '白色狐狸', time: '冬', locations: '鎮上和森林', weather: '大雪不出現'},
  { name: '茶色白鼬', time: '春、夏、秋', locations: '區域 3 樹木密集的地方', weather: '下雨時出現'},
  { name: '白色白鼬', time: '冬', locations: '區域 3 樹木密集的地方', weather: '不下雪且溫暖時出現'},
  { name: '熊', time: '春、夏、秋', locations: '養蜂箱附近', weather: '颱風不出現'},
  { name: '猴子', time: '全年', locations: '區域 3 「樹樁」密集的地方', weather: '晴天的白天'},
  { name: '麻雀', time: '全年', locations: '家裡附近', weather: '颱風大雪不出現'},
  { name: '貓頭鷹', time: '全年', locations: '區域 2、3 夜間樹木密集的地方', weather: '颱風大雪不出現'},
  { name: '青鳥', time: '全年', locations: '受損水耕設施且樹木密集（自己種樹', weather: '晴天'},
  { name: '岩雷鳥', time: '冬，正午前後', locations: '花田附近', weather: ''},
  { name: '老鷹', time: '全年，正午', locations: '區域 2 海邊岩石', weather: ''},
  { name: '游隼', time: '全年，正午', locations: '區域 3 海邊岩石', weather: ''},
  { name: '日本獨角仙', time: '夏，午後', locations: '區域 2、3 的樹上', weather: '颱風不出現'},
  { name: '大鍬形蟲', time: '夏，午後', locations: '區域 3 樹木密集的地方', weather: '颱風不出現'},
  { name: '長戢獨角仙', time: '夏，夜間', locations: '受損的水耕設施', weather: ''},
  { name: '紋白蝶', time: '春、夏、秋', locations: '有花朵的地方', weather: '晴天出現'},
  { name: '鳳蝶', time: '春、夏、秋', locations: '區域 3 有大量花朵的地方', weather: '晴天出現'},
  { name: '大藍閃蝶', time: '夏、秋', locations: '受損的水耕設施有大量花和樹的地方', weather: '晴天'},
  { name: '螃蟹', time: '冬，白天', locations: '區域 2 的海邊', weather: '大雪不出現'},
  { name: '球馬陸', time: '全年', locations: '礦山 3 入口前有岩石的地方', weather: '大雪不出現'},
];
wildAnimalsRawData.forEach(w => {
  w.key = w.name + w.locations;
})

export default function Animals() {
  const dispatch = useDispatch();
  const toAnimals = useSelector(state => state.toAnimals);
  const tabs = ['野生動物', '水中生物'];
  const setting = useSelector(state => state.panelSetting.animal);
  const selectedTab = setting.category;
  const wildAnimalRows = wildAnimalsRawData.map(animal => {
    const isSelected = toAnimals.find(a => a.name === animal.name);
    let image;
    try {
      image = <img className={`w-12 m-auto rounded-full ${isSelected ? 'border border-stone-900' : ''}`} src={require(`assets/images/animals/${animal.name}.jpg`)} alt={animal.name}/>;
    } catch (error) {}
    return (
      <tr key={animal.name} onClick={() => dispatch(toggleToAnimal(animal))} className={isSelected ? 'bg-stone-300' : ''}>
        <td>{image}</td>
        <td>{lang(animal.name)}</td>
        <td className='md:hidden'>{animal.time}<br/>{animal.locations}<br/>{animal.weather}</td>
        <td className='hidden md:table-cell'>{animal.time}</td>
        <td className='hidden md:table-cell'>{animal.locations}</td>
        <td className='hidden md:table-cell'>{animal.weather}</td>
      </tr>
    )
  });

  const fishsData = fishesRawData
  .filter(fish => setting.fishCategory === '全種類' || setting.fishCategory === fish.category)
  .flatMap(fish => {
    const ways = fish.way.filter(way => {
      return (setting.season === '全季節' || way.seasons.length === 0 || way.seasons.includes(setting.season))
      && (setting.location === '全區域' || setting.location === way.locations)
    })
    return ways.map((way, index) => {
      return {
        rowSpan: index === 0 ? ways.length : 0,
        key: fish.name + way.locations,
        name: fish.name,
        category: fish.category,
        rod: way.rod,
        time: way.seasons + way.weather + ' ' +way.time,
        seasons: way.seasons,
        locations: way.locations,
      }
    });
  });

  const fishRows = fishsData.map(fish => {
    let firstRow = <></>;
    if(fish.rowSpan > 0) {
      const isAnimalSelected = toAnimals.find(a => a.name === fish.name);
      let image;
      try {
        image = <img className={`w-12 m-auto rounded-lg ${isAnimalSelected ? 'border border-stone-900' : ''}`} src={require(`assets/images/animals/${fish.name}.jpg`)} alt={fish.name}/>;
      } catch (error) {}
      firstRow = <>
        <td rowSpan={fish.rowSpan} className={isAnimalSelected ? 'bg-stone-300' : ''}>{image}</td>
        <td rowSpan={fish.rowSpan} className={isAnimalSelected ? 'bg-stone-300' : ''}>
          {lang(fish.name)}
          <div className="md:hidden text-stone-400">{fish.category}</div>
        </td>
        <td rowSpan={fish.rowSpan} className={`hidden md:table-cell ${isAnimalSelected ? 'bg-stone-300' : ''}`}>{fish.category}</td>
      </>;
    }

    const isWaySelected = toAnimals.find(a => a.name === fish.name && a.locations === fish.locations);
    return (
      <tr key={fish.key} onClick={() => dispatch(toggleToAnimal(fish))}>
        { firstRow }
        <td className={`md:hidden ${isWaySelected ? 'bg-stone-300' : ''}`}>{fish.rod}{lang('rod-mobile-table-content')}<br/>{fish.time}<br/>{fish.locations}</td>
        <td className={`hidden md:table-cell ${isWaySelected ? 'bg-stone-300' : ''}`}>{fish.rod}</td>
        <td className={`hidden md:table-cell ${isWaySelected ? 'bg-stone-300' : ''}`}>{fish.time}</td>
        <td className={`hidden md:table-cell ${isWaySelected ? 'bg-stone-300' : ''}`}>{fish.locations}</td>
      </tr>
    )
  });

  const panel = (<div>
    <ul className='my-tabs'>
      { tabs.map(tab => <li key={tab} className={tab === selectedTab ? 'active' : 'inactive'} onClick={() => {dispatch(setAnimalCategory(tab));gaEventTracker('動物-Click Tab', {tab_name: tab})}}>{tab}</li>) }
    </ul>
  </div>);

  const wildAnimalHeader = (
    <table className='md:mx-auto'>
      <thead>
        <tr><th colSpan={5}>{panel}</th></tr>
        <tr className='h-8'>
          <th className="w-12 md:w-24">圖片</th>
          <th className='w-24 md:w-36'>名稱</th>
          <th className='md:hidden w-64' colSpan={3}></th>
          <th className='hidden md:table-cell md:w-64'>時間</th>
          <th className='hidden md:table-cell md:w-64'>地點</th>
          <th className='hidden md:table-cell md:w-64'>天氣</th>
        </tr>
      </thead>
      <tbody>
        { wildAnimalRows }
      </tbody>
    </table>
  );

  const fishCategory = ['全種類', '小型魚', '中型魚', '大型魚', '水中霸主', '稀有魚', '蝦子', '螃蟹', '烏賊', '貝'];
  const seasons = ['全季節', '春', '夏', '秋', '冬'];

  const fishPanel = (<div>
    <ul className='my-tabs'>
      <select value={setting.fishCategory} onChange={(e) => {dispatch(setAnimalFishCategory(e.target.value))}}>
        { fishCategory.map(c => <option key={c} value={c}>{ lang(c) }</option>) }
      </select>
      <select value={setting.season} onChange={(e) => {dispatch(setAnimalSeason(e.target.value))}}>
        { seasons.map(s => <option key={s} value={s}>{ lang(s) }</option>) }
      </select>
      <select value={setting.location} onChange={(e) => {dispatch(setAnimalLocation(e.target.value))}}>
        <option value='全區域'>{ lang('全區域') }</option>
        { fishingLocationRawData.map(l => <option key={l} value={l}>{ lang(l) }</option>) }
      </select>
    </ul>
  </div>);

  const fishHeader = (
    <table className='md:mx-auto'>
      <thead>
        <tr><th colSpan={7}>{panel}</th></tr>
        <tr><th colSpan={7}>{fishPanel}</th></tr>
        <tr className='h-8'>
          <th className="w-12 md:w-24">圖片</th>
          <th className='w-24 md:w-36'>名稱</th>
          <th className='md:hidden w-64' colSpan={3}></th>
          <th className='hidden md:table-cell md:w-64'>{lang('category')}</th>
          <th className='hidden md:table-cell md:w-64'>{lang('rod-table-header')}</th>
          <th className='hidden md:table-cell md:w-64'>{lang('time')}</th>
          <th className='hidden md:table-cell md:w-64'>{lang('location')}</th>
        </tr>
      </thead>
      <tbody>
        { fishRows }
      </tbody>
    </table>
  );
  return (
    <>
    { selectedTab === '野生動物' ? wildAnimalHeader : fishHeader }
    </>
  );
}