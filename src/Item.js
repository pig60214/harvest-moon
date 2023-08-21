import itemRawData from './itemRawData';
import { useDispatch, useSelector } from 'react-redux';
import { toggleItem } from 'store/toGetItemsSlice';

export default function Item() {
  const searchInput = useSelector((state) => state.searchInput.value);
  const toGetItems = useSelector(state => state.toGetItems);
  const dispatch = useDispatch();

  const rows = [];

  Object.entries(itemRawData).forEach(entry => {
    const [key, value] = entry;
    const isSelected = toGetItems.items.find(i => i === key);

    if (toGetItems.showToGetItems) {
      if (!isSelected) return;
    } else {
      if(!searchInput.trim().split(' ').map(s => key.includes(s)).find(s => s)) return;
    }

    rows.push(<tr key={key} onClick={() => dispatch(toggleItem(key))} className={isSelected ? 'bg-stone-300' : ''}>
      <td className='h-8'>{key}</td>
      <td>{value}</td>
    </tr>)
  });

  return (
    <>
    <p>不過此表格多有殘缺，還在慢慢補齊中，如果受不了它這麼破，也可以<a className='underline decoration-2' href="mailto:mypremyt@gmail.com">寫信</a>告訴我，歡迎一起來補齊，謝謝～～</p>
    <table className='md:mx-auto'>
      <thead>
        <tr className='h-8'>
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