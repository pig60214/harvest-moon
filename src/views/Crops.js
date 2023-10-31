import cropRawData from '../rawData/cropRawData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSeason } from '../store/cropSearchSettingSlice';
import { toggleCrop } from '../store/toGetCropsSlice';
import { setupGAEventTracker } from 'GA';
import SearchInput from 'components/SearchInput';

export default function Crops() {
  const gaEventTracker = setupGAEventTracker('農作物');
  const searchInput = useSelector((state) => state.searchInput.value);
  const setting = useSelector(state => state.cropSearchSetting);
  const toGetCrops = useSelector(state => state.toGetCrops);
  const dispatch = useDispatch();
  if(typeof setting.category === 'object') { // 因為把 category 改成 string，所以把以前的狀態改成全品種 2023-11-29 可以拿掉
    dispatch(setCategory('全品種'));
  }
  const MoneyIcon = ({className}) => (<span className={`${className} inline-block bg-amber-400 rounded-full border border-stone-500`}><span className="inline-block w-6 h-6 leading-6 text-center font-bold ">$</span></span>);

  const tableRows = [];
  cropRawData.forEach(data => {
    const isSelected = toGetCrops.crops.find(c => c === data.name);

    if (toGetCrops.showToGetCrops) {
      if (!isSelected) return;
    } else {
      if (!searchInput.trim().split(' ').map(s => data.name.includes(s)).find(s => s)) return;
      if (setting.category !== '全品種' && !data.category.includes(setting.category)) return;
      if (setting.season !== '全季節' && !data.season.includes(setting.season)) return;
    }

    const image = <img className={`w-12 m-auto rounded-full ${isSelected ? 'border border-stone-900' : ''}`} src={require(`assets/images/crops/${data.name}.jpg`)} alt={data.name}/>;

    tableRows.push(
      <tr key={data.name} onClick={() => { dispatch(toggleCrop(data.name)); gaEventTracker('農作物-Click Item') }} className={isSelected ? 'bg-stone-300' : ''}>
        <td>{image}</td>
        <td>{data.name}{data.topPrice && <MoneyIcon className='md:ml-1' />}{data.name === '聖誕玫瑰' && <p className='text-xs'>*加工成蜂蜜才賺</p>}</td>
        <td className="text-center">{data.category}</td>
        <td className="text-center">{data.season.join(', ')}</td>
        <td className="text-center">{data.hasVariant ? 'V' : ''}</td>
      </tr>
    );
  });

  if (setting.season === '冬' && (setting.category === '果樹' || setting.category === '農作物')) {
    tableRows.push(<tr key='notice'><td colSpan={5} className='text-center py-1'>冬天不能種果樹和農作物喔</td></tr>)
  }

  const panel = (
    <div className='flex flex-col md:flex-row justify-between gap-1 my-1'>
      <ul className='my-tabs'>
        { ['果樹', '蔬菜', '花卉', '農作物', '全品種'].map(c => <li key={c} className={setting.category === c || setting.category === '全品種' ? 'active' : 'inactive'} onClick={() => {dispatch(setCategory(c));gaEventTracker(`農作物-Tab-${c}`)}}>{c}</li>) }
      </ul>
      <ul className='my-tabs'>
        { ['春', '夏', '秋', '冬', '全季節'].map(s => <li key={s} className={setting.season === s || setting.season === '全季節' ? 'active' : 'inactive'} onClick={() => {dispatch(setSeason(s));gaEventTracker(`農作物-Tab-${s}`)}}>{s}</li>) }
      </ul>
    </div>
  )

  return (
    <div>
      <article>
        <p>點選作物後，畫面右邊會出現背包按鈕，點它可以一覽你現在需要的農作物。</p>
        <p><MoneyIcon />：該季節最有價值的作物</p>
      </article>
      <table className='md:mx-auto mt-2'>
        <thead>
          <tr><th colSpan={5} className='py-1 font-normal'><SearchInput placeholder='可搜尋多個關鍵字，Ex：芒果 花椰菜' /></th></tr>
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