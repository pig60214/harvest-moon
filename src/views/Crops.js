import cropRawData from '../rawData/cropRawData';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCategory, setSeason } from '../store/cropSearchSettingSlice';
import { toggleCrop } from '../store/toGetCropsSlice';
import { setupGAEventTracker } from 'GA';

export default function Crops() {
  const gaEventTracker = setupGAEventTracker('農作物');
  const searchInput = useSelector((state) => state.searchInput.value);
  const setting = useSelector(state => state.cropSearchSetting);
  const toGetCrops = useSelector(state => state.toGetCrops);
  const dispatch = useDispatch();

  const tableRows = [];
  cropRawData.forEach(data => {
    const isSelected = toGetCrops.crops.find(c => c === data.name);

    if (toGetCrops.showToGetCrops) {
      if (!isSelected) return;
    } else {
      if (!searchInput.trim().split(' ').map(s => data.name.includes(s)).find(s => s)) return;
      if (!JSON.stringify(setting.category).includes(data.category)) return;
      if (setting.season !== '全季節' && !data.season.includes(setting.season)) return;
    }

    const image = <img className={`w-12 m-auto rounded-full ${isSelected ? 'border border-stone-900' : ''}`} src={require(`assets/images/crops/${data.name}.jpg`)} alt={data.name}/>;

    tableRows.push(
      <tr key={data.name} onClick={() => dispatch(toggleCrop(data.name))} className={isSelected ? 'bg-stone-300' : ''}>
        <td>{image}</td>
        <td>{data.name}{data.topPrice && <span className="ml-1 inline-block w-7 h-7 text-center font-bold bg-amber-400 border border-stone-500 rounded-full">$</span>}</td>
        <td className="text-center">{data.category}</td>
        <td className="text-center">{data.season.join(', ')}</td>
        <td className="text-center">{data.hasVariant ? 'V' : ''}</td>
      </tr>
    );
  });

  const panel = (
    <div className='flex flex-col md:flex-row justify-between gap-1 my-1'>
      <ul className='my-tabs sm'>
        { ['果樹', '蔬菜', '花卉', '農作物', '全品種'].map(c => <li key={c} className={setting.category.find(sc => c === sc) ? 'active' : 'inactive'} onClick={() => {dispatch(toggleCategory(c));gaEventTracker(`農作物-Tab-${c}`)}}>{c}</li>) }
      </ul>
      <ul className='my-tabs sm'>
        { ['春', '夏', '秋', '冬', '全季節'].map(s => <li key={s} className={setting.season === s || setting.season === '全季節' ? 'active' : 'inactive'} onClick={() => {dispatch(setSeason(s));gaEventTracker(`農作物-Tab-${s}`)}}>{s}</li>) }
      </ul>
    </div>
  )

  return (
    <div>
    <table className='md:mx-auto'>
      <thead>
        <tr><th colSpan={5}>{panel}</th></tr>
        <tr className='md:h-10'>
          <th className="w-12 md:w-24">圖片</th>
          <th className="w-28 md:w-36">名稱</th>
          <th className="w-16 md:w-28">種類</th>
          <th className="w-28 md:w-32">季節</th>
          <th className="w-12 md:w-24">變種</th>
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
    </div>
  );
};