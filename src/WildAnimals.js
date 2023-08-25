import { useDispatch, useSelector } from "react-redux";
import { toggleToWildAnimal } from "store/toWildAnimalsSlice";
const rawData = [
  { name: '松鼠', seasons: '春、夏、秋', locations: '區域1有數的地方', weather: '颱風不出現'},
  { name: '黃色狐狸', seasons: '全年', locations: '鎮上和森林', weather: '颱風和大雪不出現'},
  { name: '白色狐狸', seasons: '冬', locations: '鎮上和森林', weather: '大雪不出現'},
  { name: '茶色白鼬', seasons: '春、夏、秋', locations: '區域 3 樹木密集的地方', weather: '下雨時出現'},
  { name: '白色白鼬', seasons: '冬', locations: '區域 3 樹木密集的地方', weather: '不下雪且溫暖時出現'},
  { name: '熊', seasons: '春、夏、秋', locations: '養蜂箱附近', weather: '颱風不出現'},
  { name: '猴子', seasons: '全年', locations: '區域 3 「樹樁」密集的地方', weather: '晴天的白天'},
  { name: '麻雀', seasons: '全年', locations: '家裡附近', weather: '颱風大雪不出現'},
  { name: '貓頭鷹', seasons: '全年', locations: '區域 2、3 夜間樹木密集的地方', weather: '颱風大雪不出現'},
  { name: '青鳥', seasons: '全年', locations: '受損水耕設施且樹木密集', weather: '晴天'},
  { name: '岩雷鳥', seasons: '冬', locations: '花田附近', weather: '冬天正午前後'},
  { name: '老鷹', seasons: '全年', locations: '區域 2 正午海邊岩石', weather: ''},
  { name: '隼', seasons: '全年', locations: '區域 3 正午有大量岩石的水畔', weather: ''},
  { name: '日本獨角仙', seasons: '夏', locations: '區域 2、3 午後的樹上', weather: '颱風不出現'},
  { name: '大鍬形蟲', seasons: '夏', locations: '區域 3 午後樹木密集的地方', weather: '颱風不出現'},
  { name: '長戢獨角仙', seasons: '夏', locations: '夜間受損的水耕設施', weather: ''},
  { name: '紋白蝶', seasons: '春、夏、秋', locations: '有花朵的地方', weather: '晴天出現'},
  { name: '鳳蝶', seasons: '春、夏、秋', locations: '區域 3 有大量花朵的地方', weather: '晴天出現'},
  { name: '大藍閃蝶', seasons: '夏、秋', locations: '受損的水耕設施有大量花和樹的地方', weather: '晴天'},
  { name: '螃蟹', seasons: '冬', locations: '區域 2 白天的海邊', weather: '大雪不出現'},
  { name: '球馬陸', seasons: '全年', locations: '礦山 3 入口前有岩石的地方', weather: '大雪不出現'},
];
export default function WildAnimals() {
  const dispatch = useDispatch();
  const toWildAnimals = useSelector(state => state.toWildAnimals);
  const rows = rawData.map(animal => (
    <tr key={animal.name} onClick={() => dispatch(toggleToWildAnimal(animal))} className={toWildAnimals.find(a => a.name === animal.name) ? 'bg-stone-300' : ''}>
      <td>{animal.name}</td>
      <td>{animal.seasons}</td>
      <td>{animal.locations}</td>
      <td>{animal.weather}</td>
    </tr>
  ));
  return (
    <table className='md:mx-auto'>
      <thead>
        <tr className='h-8'>
          <th className='w-36'>名稱</th>
          <th className='w-64'>季節</th>
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