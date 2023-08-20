import { useSelector, useDispatch } from 'react-redux';
import { toggleLocation, toggleGoToShopping, toggleGoToGiveTheGift } from './store/locationsSlice';
import { useState } from 'react';
import locationRawData from './locationRawData';

export default function Map() {
  const toGos = useSelector((state) => state.locations)
  const dispatch = useDispatch()
  const [info, setInfo] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  function popInfo(content) {
    setInfo(content);
    setShowInfo(true);
    setTimeout(() => {setShowInfo(false)}, 5000);
  }

  const selected = (name) => toGos.find(toGo => toGo.name === name) ? 'bg-stone-200' : '';
  const toShopping = (name) => toGos.find(toGo => toGo.name === name && toGo.shopping) ? 'bg-sky-600' : 'bg-sky-100';
  const toGive = (name) => toGos.find(toGo => toGo.name === name && toGo.toGive) ? 'bg-pink-600' : 'bg-pink-100';

  const rows = [];
  locationRawData.forEach((location, index) => {
    const { name, rowClass, colClass, openTime, closedDay } = location;
    rows.push(
      <div key={name} className={`${rowClass} ${colClass}`}>
        <div
          className={`border border-stone-600 rounded-t-lg border-b-0 text-center h-15 overflow-x-auto relative ${selected(name)}`}
          onClick={() => dispatch(toggleLocation(name))}
        >
          <div className='text-xs text-stone-500 hidden lg:block absolute right-1 bottom-0'>{`${openTime} ${closedDay}`}</div>
          <div className='text-xs text-stone-500 block lg:hidden absolute right-1 bottom-0' onClick={() => popInfo(`${openTime} ${closedDay}`)}>ⓘ</div>
          <div className='whitespace-nowrap py-4'><h2>{name}</h2></div>
        </div>
        <div className='flex border border-stone-600 rounded-b-lg overflow-x-auto'>
            <div className={`flex-1 p-2 ${toShopping(name)}`} onClick={() => dispatch(toggleGoToShopping(name))}></div>
            <div className={`flex-1 p-2 ${toGive(name)}`} onClick={() => dispatch(toggleGoToGiveTheGift(name))}></div>
        </div>
      </div>);
  });

  return (
    <div>
      <div className={`my-notification ${showInfo ? 'animation' : 'hidden'}`}>{info}</div>
      <div className='grid grid-rows-6 grid-cols-9 gap-2 md:gap-4'>
        {rows}
      </div>
      <div className='mt-4'>
        <div className='flex gap-2 items-center'>
          <div className='bg-sky-600 w-4 h-4'></div><div>Shopping or do someting</div>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='bg-pink-600 w-4 h-4'></div><div>Give the gift</div>
        </div>
      </div>
    </div>
  );
}