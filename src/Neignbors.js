import neighborRawData from './neighborRawData';
import { cropRawDataNameAsKey } from './cropRawData';
import { useSelector, useDispatch } from 'react-redux';
import { toggleToGive } from './store/toGivesSlice';

export default function Neighbors () {
  const searchInput = useSelector((state) => state.searchInput.value);
  const showGiftList = useSelector((state) => state.showGiftList.value);
  const toGives = useSelector((state) => state.toGives);
  const dispatch = useDispatch();

  function addNeighborDescription() {
    neighborRawData.forEach(data => {
      data.gifts.forEach(gift => {
        if(cropRawDataNameAsKey[gift.name]) {
          gift['description'] = cropRawDataNameAsKey[gift.name].category;
        }
      })
    });
  }

  function Neighbor ({ neighbor }) {
    function Gifts({ level }) {
      const rows = [];
      const selectdClass = 'bg-stone-400 rounded'
      if(showGiftList) {
        const toGive = toGives.find(toGive => toGive.neighborhood === neighbor.name);
        if(toGive && toGive.level === level) {
          rows.push(<div key={toGive.gift} className={`px-1 py-1 md:py-0.5 box-decoration-clone ${selectdClass}`} onClick={() => dispatch(toggleToGive({ neighborhood: neighbor.name, level, gift: toGive.gift }))}>{toGive.gift}</div>);
        }
      } else {
        const isSearchName = searchInput.trim().split(' ').map(s => neighbor.name.includes(s)).find(s => s) || searchInput.trim().split(' ').map(s => neighbor.description.includes(s)).find(s => s);
        const isSearchGift = (gift) => searchInput.trim().split(' ').map(s => gift.includes(s)).find(s => s)
        const isSearched = (gift, level) => gift.level === level && (isSearchName || isSearchGift(gift.name));

        neighbor.gifts.filter(gift => isSearched(gift, level)).map(gift => gift.name).forEach(gift => {
          rows.push(<div key={gift} className={`px-1 py-1 md:py-0.5 box-decoration-clone ${toGives.find(toGive => toGive.neighborhood === neighbor.name && toGive.gift === gift) ? selectdClass : ''}`} onClick={() =>dispatch(toggleToGive({ neighborhood: neighbor.name, level, gift }))}>{gift}</div>);
        });
      }
      return rows;
    }

    const heartEmoji = toGives.find(toGive => toGive.neighborhood === neighbor.name)
                      ? neighbor.isMarriageCandidate ? '🩷' : '🧡'
                      : neighbor.isMarriageCandidate ? '🩶' : '';

    return (
      <div className='my-card space-y-2'>
        <div className='my-card-header flex flex-col md:w-1/5'>
          <div className='font-black'>{ neighbor.name }</div>
          <div className='flex text-stone-600 divide-x divide-stone-400'>
            <div className='pr-2'>{ neighbor.description }</div>
            <div className='px-2'>{ neighbor.gender }</div>
            {heartEmoji !== '' && <div className='px-2'>{ heartEmoji }</div>}
          </div>
        </div>
        <div className='my-card-body flex md:w-4/5'>
          <div className='w-1/4'><Gifts level={1} /></div>
          <div className='w-1/4'><Gifts level={2} /></div>
          <div className='w-1/4'><Gifts level={3} /></div>
          <div className='w-1/4'><Gifts level={4} /></div>
        </div>
     </div>
    )
  }

  addNeighborDescription();
  const row = [];
  neighborRawData.forEach(neighbor => {
    if(showGiftList) {
      if(toGives.find(toGive => toGive.neighborhood === neighbor.name)) {
        row.push(<Neighbor neighbor={neighbor} key={neighbor.name} />)
      }
      return;
    }

    const neighborStr = JSON.stringify(neighbor);
    const searched = searchInput.trim().split(' ').map(s => neighborStr.includes(s)).find(s => s);

    if(!searched) return;
    row.push(<Neighbor neighbor={neighbor} key={neighbor.name} />)
  });
  return (
    <>
      <div className='hidden md:flex px-4 pt-2'>
        <div className='w-1/5'></div>
        <div className='w-1/5'>最愛</div>
        <div className='w-1/5'>很喜歡</div>
        <div className='w-1/5'>喜歡</div>
        <div className='w-1/5'>稍微喜歡</div>
      </div>
      <div className='space-y-2'>
        {row}
      </div>
    </>
  );
}