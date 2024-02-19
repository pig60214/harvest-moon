import itemRawData from '../rawData/itemRawData';
import { useDispatch, useSelector } from 'react-redux';
import { toggleItem } from 'store/toGetItemsSlice';
import SearchInput from 'components/SearchInput';
import { setItemCategory } from '../store/panelSettingSlice';
import lang from 'rawData/resourse';

export default function Item() {
  const setting = useSelector(state => state.panelSetting.item);
  const searchInput = useSelector((state) => state.searchInput.value);
  const toGetItems = useSelector(state => state.toGetItems);
  const dispatch = useDispatch();

  const rows =itemRawData.filter(i => setting.category === '全品項' ? true : i.category === setting.category).map(item => {
    const { key, name, way, category } = item;
    const isSelected = toGetItems.items.find(i => i === key);

    if (toGetItems.showToGetItems) {
      if (!isSelected) return null;
    } else {
      if(!searchInput.toLowerCase().trim().split(' ').map(s => name.toLowerCase().includes(s)).find(s => s)) return null;
    }

    let image;
    try {
      const imgSource = require(`assets/images/items/${key}.jpg`);
      image = <img className={`w-12 m-auto rounded-full ${isSelected ? 'border border-stone-900' : ''}`} src={imgSource} alt={name}/>
    } catch (error) {}

    return (<tr key={name} onClick={() => dispatch(toggleItem(key))} className={isSelected ? 'bg-stone-300' : ''}>
      <td>{image}</td>
      <td className='h-8'>{ name }</td>
      <td>{ lang(category) }</td>
      <td>{way}</td>
    </tr>);
  });

  const panel = (
    <ul className='my-tabs my-1'>
      { ['香菇類', '蜂蜜', '石頭', '寶石', '調味料', '加工機', '花束', '飾品', '全品項'].map(c => <li key={c} className={setting.category === c || setting.category === '全品項' ? 'active' : 'inactive'} onClick={() => {dispatch(setItemCategory(c));}}>{lang(c)}</li>) }
    </ul>
  )

  return (
    <>
    <p>{ process.env.REACT_APP_ENV === 'test' ? '' : '不過此表格多有殘缺，還在慢慢補齊中，如果受不了它這麼破，也可以點擊右下角的回饋按鈕，填寫表單告訴我，歡迎一起來補齊，謝謝～～' }</p>
    <table className='md:mx-auto'>
      <thead>
        <tr><th colSpan={4} className='py-1 font-normal'><SearchInput placeholder='可搜尋多個關鍵字，Ex：橄欖結晶 醬油' /></th></tr>
        <tr><th colSpan={4}>{panel}</th></tr>
        <tr className='h-8'>
        <th className="w-12 md:w-24">{ lang('image') }</th>
          <th className='w-48'>{ lang('name') }</th>
          <th className='w-48'>{ lang('category') }</th>
          <th className='w-64'>{ lang('way') }</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
    </>
  );
};