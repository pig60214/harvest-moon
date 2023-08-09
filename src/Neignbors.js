import neighborRawData from './neighborRawData';
import { cropRawDataNameAsKey } from './cropRawData';

export default function Neighbors ({searchInput, toGives, setToGives, showGiftList, setShowGiftList}) {

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
    const isSearchName = neighbor.name.includes(searchInput) || neighbor.description.includes(searchInput);
    const isSearched = (gift, level) => gift.level === level && (isSearchName || JSON.stringify(gift).includes(searchInput));

    function toggleToGive(neighborhood, level, gift) {
      if(toGives.find(toGive => toGive.neighborhood === neighborhood && toGive.gift === gift)) {
        const next = toGives.filter(toGive => toGive.neighborhood !== neighborhood);
        if(next.length === 0) {
          setShowGiftList(false);
        }
        setToGives(next);
      } else if (toGives.find(toGive => toGive.neighborhood === neighborhood)) {
        const next = toGives.filter(toGive => toGive.neighborhood !== neighborhood);
        setToGives([
          ...next,
          {neighborhood, level, gift},
        ]);

      } else {
        setToGives([
          ...toGives,
          {neighborhood, level, gift},
        ]);
      }
    }

    function Gifts({ level }) {
      const rows = [];
      if(showGiftList) {
        const toGive = toGives.find(toGive => toGive.neighborhood === neighbor.name);
        if(toGive && toGive.level === level) {
          rows.push(<div key={toGive.gift} className='bg-stone-400' onClick={() => toggleToGive(neighbor.name, level, toGive.gift)}>{toGive.gift}</div>);
        }
      } else {
        neighbor.gifts.filter(gift => isSearched(gift, level)).map(gift => gift.name).forEach(gift => {
          rows.push(<div key={gift} className={toGives.find(toGive => toGive.neighborhood === neighbor.name && toGive.gift === gift) ? 'bg-stone-400' : ''} onClick={() => toggleToGive(neighbor.name, level, gift)}>{gift}</div>);
        });
      }
      return rows;
    }

    return (
      <div className='my-card space-y-2'>
        <div className='my-card-header flex flex-col md:w-1/5'>
          <div className='font-black'>{ neighbor.name }</div>
          <div className='flex text-stone-600 divide-x divide-stone-400'>
            <div className='pr-2'>{ neighbor.description }</div>
            <div className='px-2'>{ neighbor.gender === 'M' ? '♂' : '♀' }</div>
            {neighbor.isMarriageCandidate && <div className='px-2'>🩶</div>}
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
    if(!JSON.stringify(neighbor).includes(searchInput)) return;
    row.push(<Neighbor neighbor={neighbor} key={neighbor.name} />)
  });
  return (
    <>
      <div className='hidden md:flex px-4 pt-2'>
        <div className='w-1/5'></div>
        <div className='w-1/5'>Favorite</div>
        <div className='w-1/5'>Very Like</div>
        <div className='w-1/5'>Like</div>
        <div className='w-1/5'>Okay</div>
      </div>
      <div className='space-y-2'>
        {row}
      </div>
    </>
  );
}