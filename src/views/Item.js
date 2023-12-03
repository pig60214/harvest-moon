import itemRawData from '../rawData/itemRawData';
import { useDispatch, useSelector } from 'react-redux';
import { toggleItem } from 'store/toGetItemsSlice';
import SearchInput from 'components/SearchInput';

export default function Item() {
  const searchInput = useSelector((state) => state.searchInput.value);
  const toGetItems = useSelector(state => state.toGetItems);
  const dispatch = useDispatch();

  const rows =itemRawData.map(item => {
    const { key, name, way } = item;
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
      <td>{way}</td>
    </tr>);
  });

  return (
    <>
    <p>{ process.env.REACT_APP_ENV === 'test' ? '' : '不過此表格多有殘缺，還在慢慢補齊中，如果受不了它這麼破，也可以點擊右下角的回饋按鈕，填寫表單告訴我，歡迎一起來補齊，謝謝～～' }</p>
    <table className='md:mx-auto'>
      <thead>
        <tr><th colSpan={3} className='py-1 font-normal'><SearchInput placeholder='可搜尋多個關鍵字，Ex：橄欖結晶 醬油' /></th></tr>
        <tr className='h-8'>
        <th className="w-12 md:w-24">圖片</th>
          <th className='w-36'>名稱</th>
          <th className='w-64'>取得方式</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
    </>
  );
};