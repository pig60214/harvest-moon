import { useSelector, useDispatch } from 'react-redux';
// import { toggleLocation, toggleGoToShopping, toggleGoToGiveTheGift } from '../store/locationsSlice'; // if remove, also need to remove toggleLocation from locationsSlice
import { toggleGoToShopping, toggleGoToGiveTheGift } from '../store/locationsSlice';
import { useState } from 'react';
import locationRawData from '../rawData/locationRawData';
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
    const { name, shortName, rowClass, colClass, openTime, closedDay, colorClass } = location;
    const isSelected = toGos.find(toGo => toGo.name === name && (toGo.shopping || toGo.toGive));
    // const selected = isSelected ? 'bg-stone-200' : '';
    const toShopping = toGos.find(toGo => toGo.name === name && toGo.shopping) ? 'bg-lime-500' : 'bg-lime-500/20';
    const toGive = toGos.find(toGo => toGo.name === name && toGo.toGive) ? 'bg-yellow-600' : 'bg-yellow-600/20';
    const clickLocation = () => { infoContent !== '' && !isSelected && popInfo(infoContent); gaEventTracker('地圖-Click Location');}

    const infoContent = [openTime, closedDay].join(' ').trim();
    rows.push(
      <div key={name} className={`${rowClass} ${colClass} relative`}>
        <div className='absolute inset-0 flex overflow-x-auto outline-dashed outline-2 outline-yellow-900/80 rounded-lg'>
            <div className={`flex-1 p-1.5 ${toShopping}`} onClick={() => { dispatch(toggleGoToShopping(name)); clickLocation() }}></div>
            <div className={`flex-1 p-1.5 ${toGive}`} onClick={() => { dispatch(toggleGoToGiveTheGift(name)); clickLocation() }}></div>
        </div>
        <div
          className={`text-center overflow-x-auto relative pointer-events-none`}
          // onClick={() => { dispatch(toggleLocation(name)); infoContent !== '' && !isSelected && popInfo(infoContent); gaEventTracker('地圖-Click Location');}}
        >
          <div className='whitespace-nowrap py-4 md:py-8'>
            <span className={`hidden md:inline ${colorClass}`}>{name}</span>
            <span className={`md:hidden ${colorClass}`}>{shortName}</span>
          </div>
          <div className='text-xs text-stone-500 hidden md:block absolute right-1 bottom-0'>{infoContent}</div>
          { infoContent !== '' && <div className='text-xs text-stone-500 block md:hidden absolute right-0.5 bottom-0'>ⓘ</div> }
        </div>
      </div>);
  });

  const notification = <div className={`my-notification md:hidden ${showInfo ? 'animation' : 'hidden'}`}>{info}</div>;
  const description = (
    <ul className='mt-4'>
      <li className='flex gap-2 items-center'>
        <div className='w-4 h-4 bg-lime-500 rounded'></div><div>買東西/找NPC</div>
      </li>
      <li className='flex gap-2 items-center'>
        <div className='w-4 h-4 bg-yellow-600 rounded'></div><div>送禮物</div>
      </li>
    </ul>
  );

  return (
    <div>
      { notification }
      <div className='grid grid-rows-6 grid-cols-18 gap-2 md:gap-4'>
        {rows}
      </div>
      { description }
    </div>
  );
}