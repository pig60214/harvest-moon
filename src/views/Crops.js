import cropRawData from '../rawData/cropRawData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSeason } from '../store/cropSearchSettingSlice';
import { toggleCrop } from '../store/toGetCropsSlice';
import { gaEventTracker } from 'GA';
import SearchInput from 'components/SearchInput';
import lang from 'rawData/resourse';

export default function Crops() {
  const searchInput = useSelector((state) => state.searchInput.value);
  const setting = useSelector(state => state.cropSearchSetting);
  const toGetCrops = useSelector(state => state.toGetCrops);
  const dispatch = useDispatch();
  const MoneyIcon = ({className}) => (<span className={`${className} inline-block bg-amber-400 rounded-full border border-stone-500`}><span className="inline-block w-6 h-6 leading-6 text-center font-bold ">$</span></span>);

  const tableRows = [];
  cropRawData.forEach(data => {
    const isSelected = toGetCrops.crops.find(c => c === data.key);

    if (toGetCrops.showToGetCrops) {
      if (!isSelected) return;
    } else {
      if (!searchInput.toLowerCase().trim().split(' ').map(s => data.name.toLowerCase().includes(s)).find(s => s)) return;
      if (setting.category !== '全品種' && !data.category.includes(setting.category)) return;
      if (setting.season !== '全季節' && !data.season.includes(setting.season)) return;
    }

    const image = <img className={`w-12 m-auto rounded-full ${isSelected ? 'border border-stone-900' : ''}`} src={require(`assets/images/crops/${data.key}.jpg`)} alt={data.name}/>;

    tableRows.push(
      <tr key={data.name} onClick={() => { dispatch(toggleCrop(data.key)); gaEventTracker('農作物-Click Item', {crop_name: data.key}) }} className={isSelected ? 'bg-stone-300' : ''}>
        <td>{image}</td>
        <td>{data.name}{data.topPrice && <MoneyIcon className='md:ml-1' />}{data.key === '聖誕玫瑰' && <p className='text-xs'>*加工成蜂蜜才賺</p>}</td>
        <td className="text-center">{ lang(data.category) }</td>
        <td className="text-center">{data.season.map(s => lang(s)).join(', ')}</td>
        <td className="text-center">{data.hasVariant ? 'V' : ''}</td>
      </tr>
    );
  });

  if (setting.season === '冬' && (setting.category === '果樹' || setting.category === '農作物')) {
    tableRows.push(<tr key='notice'><td colSpan={5} className='text-center py-1'>{ lang('page_crops_no_trees_and_crops_in_winter') }</td></tr>)
  }

  const panel = (
    <div className='flex flex-col md:flex-row justify-between gap-1 my-1'>
      <ul className='my-tabs'>
        { ['果樹', '蔬菜', '花卉', '農作物', '全品種'].map(c => <li key={c} className={setting.category === c || setting.category === '全品種' ? 'active' : 'inactive'} onClick={() => {dispatch(setCategory(c));gaEventTracker('農作物-Click Tab', {tab_name: c})}}>{lang(c)}</li>) }
      </ul>
      <ul className='my-tabs'>
        { ['春', '夏', '秋', '冬', '全季節'].map(s => <li key={s} className={setting.season === s || setting.season === '全季節' ? 'active' : 'inactive'} onClick={() => {dispatch(setSeason(s));gaEventTracker('農作物-Click Tab', {tab_name: s})}}>{lang(s)}</li>) }
      </ul>
    </div>
  )

  return (
    <div>
      <article>
        <p>{ lang('page_crops_instruction') }</p>
        <p><MoneyIcon />：{ lang('page_crops_most_valuable_crop') }</p>
      </article>
      <table className='md:mx-auto mt-2'>
        <thead>
          <tr><th colSpan={5} className='py-1 font-normal'><SearchInput placeholder={ lang('page_crops_search_bar_instruction') } /></th></tr>
          <tr><th colSpan={5}>{panel}</th></tr>
          <tr className='md:h-10'>
            <th className="w-12 md:w-24">{ lang('image') }</th>
            <th className="w-28 md:w-40">{ lang('name') }</th>
            <th className="w-16 md:w-28">{ lang('category') }</th>
            <th className="w-28 md:w-32">{ lang('season') }</th>
            <th className="w-12 md:w-24">{ lang('variant') }</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </div>
  );
};