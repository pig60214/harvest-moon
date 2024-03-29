import { useDispatch, useSelector } from "react-redux";
import { setCookingCategory } from '../store/panelSettingSlice';
import lang, { getLang } from 'rawData/resourse';
import { useState } from "react";
import dishRawData from "rawData/dishRawData";
import { gaEventTracker } from '../GA';
import SearchInput from "components/SearchInput";

export default function Dishes() {
  const setting = useSelector(state => state.panelSetting.cooking);
  const dispatch = useDispatch();
  const [randomIndex, setrandomIndex] = useState(-1);
  const searchInput = useSelector((state) => state.searchInput.cooking) ?? '';

  const dishes = dishRawData.map(image => {
    return {
      ...image,
      image: require(`assets/images/dishes/${image.key}.jpg`),
    }
  });
  let dishesWithFilter = dishes.filter(dish => {
    return (setting.category === '全品項' ? true : dish.category === setting.category)
    && dish.name.toLowerCase().includes(searchInput);
  })
  let dishesWithRandomIndex = dishesWithFilter.filter((_, index) => randomIndex === -1 ? true : index === randomIndex);
  const tableRows = dishesWithRandomIndex.map(dish => <tr key={ dish.key }>
    <td><img src={ dish.image } alt={ dish.name } className="w-12 m-auto rounded-full" /></td>
    <td>{ dish.name }</td>
    <td className="text-center">{ lang(dish.category) }</td>
    <td>
      <div className="hidden md:block">
        { dish.ingredients.required.join(', ') }&nbsp;
        <span className="text-stone-400">{ dish.ingredients.topping ? `(${dish.ingredients.topping})` : '' }</span>
      </div>
      <div className="md:hidden">
        { dish.ingredients.required.map((ingredient, index) => <div key={index}>{ingredient}</div>) }
        <div className="text-stone-400">{ dish.ingredients.topping }</div>
      </div>
    </td>
  </tr>);

  const getDinner = () => {
    const random = Math.floor(Math.random() * dishesWithFilter.length);
    setrandomIndex(random);
    gaEventTracker('烹飪-Click getDinner');
  }

  const resetRandomIndex = () => {
    setrandomIndex(-1);
  }
  const panel = (
    <ul className='my-tabs my-1'>
      { ['沙拉', '其他', '湯', '主餐', '甜點', '全品項'].map(c => <li key={c} className={setting.category === c || setting.category === '全品項' ? 'active' : 'inactive'} onClick={() => {dispatch(setCookingCategory(c));resetRandomIndex()}}>{lang(c)}</li>) }
      <SearchInput storeKey='cooking' placeholder='名稱' />
    </ul>
  )
  return (
    <>
    <table className={`md:mx-auto mt-2 ${ getLang() === 'en' ?'md:w-screen-lg' : 'md:w-screen-md'}`}>
      <thead>
        <tr><th colSpan={4}>{panel}</th></tr>
        <tr>
          <th colSpan={4}>
            <div className="flex justify-end">
              <button className="my-secondary-button" onClick={getDinner}>{lang('今晚吃什麼')}</button>
              <button className="my-secondary-button" onClick={resetRandomIndex}>X</button>
            </div>
          </th>
        </tr>
        <tr>
          <th className="w-12 md:w-24">{ lang('image') }</th>
          <th className="md:w-48">{ lang('name') }</th>
          <th className="w-24">{ lang('category') }</th>
          <th>{ lang('ingredients') }</th>
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
    </>
  );
}