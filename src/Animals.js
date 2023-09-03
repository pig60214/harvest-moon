import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleToAnimal } from "store/toAnimalsSlice";
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
const fishesRawData = [
  { name: '龍膽石斑', time: 'AM7~AM11', locations: '區域 1 的海邊', weather: '晴天或雨天'},
  { name: '大王烏賊', time: '', locations: '釣客島海邊', weather: ''},
  // { name: '', time: '', locations: '', weather: ''},
  // { name: '', time: '', locations: '', weather: ''},
  // { name: '', time: '', locations: '', weather: ''},

];
export default function Animals() {
  const dispatch = useDispatch();
  const toAnimals = useSelector(state => state.toAnimals);
  const tabs = ['野生動物', '水中生物'];
  const [selectedTab, setSelectedTab] = useState('野生動物');
  const rawData = selectedTab === '野生動物' ? wildAnimalsRawData : fishesRawData;
  const rows = rawData.map(animal => {
    const isSelected = toAnimals.find(a => a.name === animal.name);
    let image;
    try {
      image = <img className={`w-12 m-auto rounded-full ${isSelected ? 'border border-stone-900' : ''}`} src={require(`assets/images/animals/${animal.name}.jpg`)} alt={animal.name}/>;
    } catch (error) {}
    return (
      <tr key={animal.name} onClick={() => dispatch(toggleToAnimal(animal))} className={isSelected ? 'bg-stone-300' : ''}>
        <td>{image}</td>
        <td>{animal.name}</td>
        <td>{animal.time}</td>
        <td>{animal.locations}</td>
        <td>{animal.weather}</td>
      </tr>
    )
  });
  const panel = (<div>
    <ul className='my-tabs sm'>
      { tabs.map(tab => <li key={tab} className={tab === selectedTab ? 'active' : 'inactive'} onClick={() => {setSelectedTab(tab)}}>{tab}</li>) }
    </ul>
  </div>);
  return (
    <table className='md:mx-auto'>
      <thead>
        <tr><th colSpan={5}>{panel}</th></tr>
        <tr className='h-8'>
          <th className="w-12 md:w-24">圖片</th>
          <th className='w-36'>名稱</th>
          <th className='w-64'>時間</th>
          <th className='w-64'>地點</th>
          <th className='w-64'>天氣</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}