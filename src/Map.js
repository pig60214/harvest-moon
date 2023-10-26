import { useSelector, useDispatch } from 'react-redux';
import { toggleLocation, toggleGoToShopping, toggleGoToGiveTheGift } from './store/locationsSlice';
import { useState } from 'react';
import locationRawData from './rawData/locationRawData';
import { setupGAEventTracker } from 'GA';

export default function Map() {
  const gaEventTracker = setupGAEventTracker('地圖');
  const toGos = useSelector((state) => state.locations)
  const dispatch = useDispatch()
  const [info, setInfo] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  function popInfo(content) {
    setInfo(content);
    setShowInfo(true);
    setTimeout(() => {setShowInfo(false)}, 5000);
  }

  const rows = [];
  locationRawData.forEach((location) => {
    const { name, shortName, rowClass, colClass, openTime, closedDay } = location;
    const isSelected = toGos.find(toGo => toGo.name === name);
    const selected = isSelected ? 'bg-stone-200' : '';
    const toShopping = toGos.find(toGo => toGo.name === name && toGo.shopping) ? 'bg-sky-600' : 'bg-sky-100';
    const toGive = toGos.find(toGo => toGo.name === name && toGo.toGive) ? 'bg-pink-600' : 'bg-pink-100';

    const infoContent = [openTime, closedDay].join(' ').trim();
    rows.push(
      <div key={name} className={`${rowClass} ${colClass}`}>
        <div
          className={`border border-stone-600 rounded-t-lg border-b-0 text-center h-15 overflow-x-auto relative ${selected}`}
          onClick={() => { dispatch(toggleLocation(name)); infoContent !== '' && !isSelected && popInfo(infoContent); gaEventTracker('地圖-Click Location');}}
        >
          <div className='whitespace-nowrap py-3 md:py-4'><span className='hidden md:inline'>{name}</span><span className='md:hidden'>{shortName}</span></div>
          <div className='text-xs text-stone-500 hidden md:block absolute right-1 bottom-0'>{infoContent}</div>
          { infoContent !== '' && <div className='text-xs text-stone-500 block md:hidden absolute right-0.5 bottom-0'>ⓘ</div> }
        </div>
        <div className='flex border border-stone-600 rounded-b-lg overflow-x-auto'>
            <div className={`flex-1 p-2 ${toShopping}`} onClick={() => dispatch(toggleGoToShopping(name))}></div>
            <div className={`flex-1 p-2 ${toGive}`} onClick={() => dispatch(toggleGoToGiveTheGift(name))}></div>
        </div>
      </div>);
  });

  const notification = <div className={`my-notification md:hidden ${showInfo ? 'animation' : 'hidden'}`}>{info}</div>;
  const description = (
    <ul className='mt-4'>
      <li className='flex gap-2 items-center'>
        <div className='w-4 h-4 bg-sky-600 rounded'></div><div>買東西/找NPC</div>
      </li>
      <li className='flex gap-2 items-center'>
        <div className='w-4 h-4 bg-pink-600 rounded'></div><div>送禮物</div>
      </li>
    </ul>
  );

  return (
    <div>
      { notification }
      <div className='grid grid-rows-6 grid-cols-18 gap-1 md:gap-4'>
        {rows}
      </div>
      { description }
    </div>
  );
}