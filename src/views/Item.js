import itemRawData from '../rawData/itemRawData';
import { useDispatch, useSelector } from 'react-redux';
import { toggleItem } from 'store/toGetItemsSlice';
import SearchInput from 'components/SearchInput';
import { setItemCategory } from '../store/panelSettingSlice';
import lang from 'rawData/resourse';
import { gaEventTracker } from 'GA';

export default function Item() {
  const setting = useSelector(state => state.panelSetting.item);
  const searchInput = useSelector((state) => state.searchInput.item);
  const toGetItems = useSelector(state => state.toGetItems);
  const dispatch = useDispatch();

  const rows =itemRawData.filter(i => setting.category === '全品項' ? true : i.category === setting.category).map(item => {
    const { key, name, way, category } = item;
    const isSelected = toGetItems.items.find(i => i === key);

    if (toGetItems.showToGetItems) {
      if (!isSelected) return null;
    } else {
      const keywords = searchInput.toLowerCase().trim().split(' ');
      const searchContent = name + lang(category) + lang(way);
      if(searchInput !== '' && !keywords.find(s => searchContent.toLowerCase().includes(s))) return null;
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

  const selectCategory = (c) => {
    dispatch(setItemCategory(c));
    gaEventTracker('物品-Click Tab', {tab_name: c});
  }

  const panel = (
    <ul className='my-tabs'>
      { ['菇', '蜂蜜', '木頭', '草', '石頭', '全品項'].map(c => <li key={c} className={setting.category === c || setting.category === '全品項' ? 'active' : 'inactive'} onClick={() => {selectCategory(c)}}>{lang(c)}</li>) }
      <li>
        <select name="category" onChange={(e) => {selectCategory(e.target.value)}} value={setting.category}>
          <option value='全品項'>{lang('全品項')}</option>
          {
            [
              { big: '草', small: ['草', '線', '布料']},
              { big: '石頭', small: ['石頭', '金屬塊', '寶石']},
              { big: '木頭', small: ['木頭', '木材']},
              { big: '菇', small: ['菇', '種菌']},
              { big: '蜂蜜'},
              { big: '毛', small: ['毛', '布料']},
              { big: '花卉', small: ['香精', '香水', '花束', '染料']},
              { big: '開拓', small: ['山菜', '香草']},
              { big: '烹飪', small: ['調味料', '果醬']},
              { big: '釣魚', small: ['釣餌', '捕魚網']},
              { big: '博物館', small: ['寶物', '寶物仿製品', '動物雕像']},
              { big: '飾品'},
              { big: '加工機'},
              { big: '寵物用品'},
              { big: '家具'},
            ].map(bc => {
              if(!bc.small) {
                return <option key={bc.big} value={bc.big}>{lang(bc.big)}</option>
              }
              return (
                <optgroup key={bc.big} label={lang(bc.big)}>
                  {bc.small.map(sc => <option key={sc} value={sc}>{lang(sc)}</option>)}
                </optgroup>
              )
            })
          }
        </select>
      </li>
    </ul>
  )

  return (
    <>
    {/* <p>{ process.env.REACT_APP_ENV === 'test' ? '' : '不過此表格多有殘缺，還在慢慢補齊中，如果受不了它這麼破，也可以點擊右下角的回饋按鈕，填寫表單告訴我，歡迎一起來補齊，謝謝～～' }</p> */}
    <table className='md:mx-auto'>
      <thead>
        <tr><th colSpan={4} className='font-normal'><SearchInput storeKey='item' placeholder={ lang('page_item_search_bar_instruction') } /></th></tr>
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