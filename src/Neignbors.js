import neighborRawData from './rawData/neighborRawData';
import { useSelector, useDispatch } from 'react-redux';
import { toggleToGive } from './store/toGivesSlice';
import { useState } from 'react';
import { setupGAEventTracker } from 'GA';

export default function Neighbors () {
  const gaEventTracker = setupGAEventTracker('Neighbors');
  const searchInput = useSelector((state) => state.searchInput.value);
  const showGiftList = useSelector((state) => state.showGiftList.value);
  const toGives = useSelector((state) => state.toGives);
  const dispatch = useDispatch();
  const [showProfile, setShowProfile] = useState({});

  function Neighbor ({ neighbor }) {
    function Gift({gift, isSelected, neighborName, level }) {
      const selectdClass = 'bg-stone-400 rounded';
      return (<div className={`px-1 py-1 md:py-0.5 box-decoration-clone cursor-pointer ${isSelected ? selectdClass : ''}`}
                onClick={() => { dispatch(toggleToGive({ neighborhood: neighborName, level, gift })); gaEventTracker('Neighbors-Click Gift') }}>{gift}</div>);
    }

    function Gifts({ level }) {
      const rows = [];
      if(showGiftList) {
        const toGivesOfThis = toGives.filter(toGive => toGive.neighborhood === neighbor.name && toGive.level === level);
        toGivesOfThis.forEach(toGive => {
          const gift = toGive.gift;
          rows.push(<Gift key={gift} gift={gift} isSelected={true} neighborName={neighbor.name} level={level} />);
        })
      } else {
        const isSearchNPC = searchInput.trim().split(' ').map(s => neighbor.name.includes(s)).find(s => s) || searchInput.trim().split(' ').map(s => neighbor.description.includes(s) ).find(s => s) || searchInput.trim().split(' ').map(s => neighbor.locations.join('').includes(s) ).find(s => s);
        const isSearchGift = (gift) => searchInput.trim().split(' ').map(s => gift.includes(s)).find(s => s)
        const isSearched = (gift, level) => gift.level === level && (isSearchNPC || isSearchGift(gift.name));

        neighbor.gifts.filter(gift => isSearched(gift, level)).map(gift => gift.name).forEach(gift => {
          const isSelected = toGives.find(toGive => toGive.neighborhood === neighbor.name && toGive.gift === gift);
          rows.push(<Gift key={gift} gift={gift} isSelected={isSelected} neighborName={neighbor.name} level={level} />);
        });
      }
      return rows;
    }

    const heartEmoji = toGives.find(toGive => toGive.neighborhood === neighbor.name)
                      ? neighbor.isMarriageCandidate ? '🩷' : '🧡'
                      : neighbor.isMarriageCandidate ? '🩶' : '';

    const toggleProfile = () => {
      const next = {...showProfile};
      if (next[neighbor.name]) {
        next[neighbor.name] = !next[neighbor.name];
      } else {
        next[neighbor.name] = true;
      }
      setShowProfile(next);
    }

    const show = showProfile[neighbor.name];

    return (
      <div className='my-card space-y-2'>
        <div className='my-card-header flex flex-col md:w-1/5'>
          <div className='font-black'>{ neighbor.name }<span className='cursor-pointer' onClick={() => toggleProfile()}>{ show ? ' ▲' : ' ▼'}</span></div>
          {show && <img src={require(`assets/images/neighbors/${neighbor.name}.jpg`)} alt={neighbor.name} />}
          <div className='flex flex-wrap text-stone-600 divide-x divide-stone-400'>
            <div className='pr-2'>{ neighbor.description }</div>
            <div className='px-2'>{ neighbor.gender }</div>
            <div className='px-2'>{ neighbor.locations.join(' ') }</div>
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
      <div className='text-sm text-stone-400'>圖片來源：<a className='underline' href='https://asia.sega.com/bokumono/olive/cht/town/?tab=resident'>-上街去吧-牧場物語 橄欖鎮與希望的大地 官方網站</a></div>
    </>
  );
}