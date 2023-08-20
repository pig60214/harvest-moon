import { cropRawData } from './cropRawData';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCategory, setSeason } from './store/cropSearchSettingSlice';
import { toggleCrop } from './store/toGetCropsSlice';

export default function Crops() {
  const searchInput = useSelector((state) => state.searchInput.value);
  const setting = useSelector(state => state.cropSearchSetting);
  const toGetCrops = useSelector(state => state.toGetCrops);
  const dispatch = useDispatch();

  const tableRows = [];
  cropRawData.forEach(data => {
    if (toGetCrops.showToGetCrops) {
      if (!toGetCrops.crops.find(c => c === data.name)) return;
    } else {
      if (!data.name.includes(searchInput)) return;
      if (!JSON.stringify(setting.category).includes(data.category)) return;
      if (setting.season !== '全季節' && !data.season.includes(setting.season)) return;
    }

    let image;
    try {
      image = <img className='w-12 m-auto' src={require(`./assets/images/crops/${data.name}.jpg`)} alt={data.name}/>;
    } catch (error) {
      image = <></>;
    }
    tableRows.push(
      <tr key={data.name} onClick={() => dispatch(toggleCrop(data.name))} className={toGetCrops.crops.find(c => c === data.name) ? 'bg-stone-300' : ''}>
        <td>{image}</td>
        <td>{data.name}{ data.topPrice ? '💰' : ''}</td>
        <td className="text-center">{data.category}</td>
        <td>{data.season.join(', ')}</td>
        <td className="text-center">{data.hasVariant ? 'V' : ''}</td>
      </tr>
    );
  });

  return (
    <div>
    <div className='flex flex-col md:flex-row gap-1 md:gap-3 mb-1'>
      <ul className='my-tabs sm'>
        { ['果樹', '蔬菜', '花卉'].map(c => <li key={c} className={setting.category.find(sc => c === sc) ? 'active' : 'inactive'} onClick={() => dispatch(toggleCategory(c))}>{c}</li>) }
      </ul>
      <ul className='my-tabs sm'>
        { ['春天', '夏天', '秋天', '冬天', '全季節'].map(s => <li key={s} className={setting.season === s ? 'active' : 'inactive'} onClick={() => dispatch(setSeason(s))}>{s}</li>) }
      </ul>
    </div>
    <table>
      <thead>
        <tr>
          <th className="w-16">圖片</th>
          <th className="w-28">名稱</th>
          <th className="w-20">種類</th>
          <th className="w-36">季節</th>
          <th className="w-16">變種</th>
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
    </div>
  );
};