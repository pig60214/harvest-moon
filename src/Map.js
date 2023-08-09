import { useSelector, useDispatch } from 'react-redux';
import { toggleLocation, toggleGoToShopping, toggleGoToGiveTheGift } from './store/locationsSlice';

export default function Map() {
  const locations = useSelector((state) => state.locations)
  const dispatch = useDispatch()

  const rows = [];
  locations.forEach((location, index) => {
    rows.push(
      <div key={location.name} className={`${location.rowClass} ${location.colClass}`}>
        <div
          className={`border border-stone-600 rounded-t-lg border-b-0 text-center h-15 overflow-x-auto relative ${location.highlightClass}`}
          onClick={() => dispatch(toggleLocation(index))}
        >
          <div className='text-xs text-stone-500 absolute right-1 bottom-0'>{`${location.openTime} ${location.closedDay}`}</div>
          <div className='whitespace-nowrap py-4'>{location.name}</div>
        </div>
        <div className='flex border border-stone-600 rounded-b-lg overflow-x-auto'>
            <div className={`flex-1 p-2 ${location.goToShoppingClass}`} onClick={() => dispatch(toggleGoToShopping(index))}></div>
            <div className={`flex-1 p-2 ${location.goToGiveTheGiftClass}`} onClick={() => dispatch(toggleGoToGiveTheGift(index))}></div>
        </div>
      </div>);
  });

  return (
    <div>
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