import neighborRawData from '../rawData/neighborRawData';
import { useSelector, useDispatch } from 'react-redux';
import { toggleToGive } from '../store/toGivesSlice';
import { useState } from 'react';
import { gaEventTracker } from 'GA';
import SearchInput from 'components/SearchInput';
import lang from 'rawData/resourse';

export default function Neighbors () {
  const notForMarriage = <span className='text-orange-300'>♥</span>
  const forMarriage = <span className='text-pink-300'>♥</span>
  const notForMarriageWithGift = <span className='text-orange-500'>♥</span>
  const forMarriageWithGift = <span className='text-pink-500'>♥</span>

  const searchInput = useSelector((state) => state.searchInput.value);
  const showGiftList = useSelector((state) => state.showGiftList.value);
  const toGives = useSelector((state) => state.toGives);
  const dispatch = useDispatch();
  const [showProfile, setShowProfile] = useState({});

  function Neighbor ({ neighbor }) {
    function Gift({gift, isSelected, neighborKey, level }) {
      const selectdClass = 'bg-stone-400 rounded';
      return (<div className={`px-1 py-1 md:py-0.5 box-decoration-clone cursor-pointer ${isSelected ? selectdClass : ''}`}
                onClick={() => { dispatch(toggleToGive({ neighborhood: neighborKey, level, gift })); gaEventTracker('居民喜好-Click Gift', {neighbor_name: neighborKey, gift_name: gift}) }}>{lang(gift)}</div>);
    }

    function Gifts({ level }) {
      const rows = [];
      if(showGiftList) {
        const toGivesOfThis = toGives.filter(toGive => toGive.neighborhood === neighbor.key && toGive.level === level);
        toGivesOfThis.forEach(toGive => {
          const gift = toGive.gift;
          rows.push(<Gift key={gift} gift={gift} isSelected={true} neighborKey={neighbor.key} level={level} />);
        })
      } else {
        const isSearchNPC = searchInput.toLowerCase().trim().split(' ').map(s => neighbor.name.toLowerCase().includes(s)).find(s => s) || searchInput.toLowerCase().trim().split(' ').map(s => neighbor.description.toLowerCase().includes(s) ).find(s => s) || searchInput.toLowerCase().trim().split(' ').map(s => neighbor.locations.join('').toLowerCase().includes(s) ).find(s => s);
        const isSearchGift = (gift) => searchInput.toLowerCase().trim().split(' ').map(s => gift.toLowerCase().includes(s)).find(s => s)
        const isSearched = (gift, level) => gift.level === level && (isSearchNPC || isSearchGift(gift.name));

        neighbor.gifts.filter(gift => isSearched(gift, level)).map(gift => gift.key).forEach(gift => {
          const isSelected = toGives.find(toGive => toGive.neighborhood === neighbor.key && toGive.gift === gift);
          rows.push(<Gift key={gift} gift={gift} isSelected={isSelected} neighborKey={neighbor.key} level={level} />);
        });
      }
      return rows;
    }

    const heartEmoji = toGives.find(toGive => toGive.neighborhood === neighbor.key)
                      ? neighbor.isMarriageCandidate ? forMarriageWithGift : notForMarriageWithGift
                      : neighbor.isMarriageCandidate ? forMarriage : notForMarriage;

    const toggleProfile = () => {
      const next = {...showProfile};
      if (next[neighbor.name]) {
        const newValue = !next[neighbor.name];
        next[neighbor.name] = newValue;
        gaEventTracker('居民喜好-ToggleProfile', { value: newValue});
      } else {
        next[neighbor.name] = true;
        gaEventTracker('居民喜好-ToggleProfile', { value: true});
      }
      setShowProfile(next);
    }

    const show = showProfile[neighbor.name];

    return (
      <div className='my-card space-y-2'>
        <div className='my-card-header flex flex-col md:w-1/5'>
          <div className='font-black'>{ neighbor.name }<span className='cursor-pointer' onClick={() => toggleProfile()}>{ show ? ' ▲' : ' ▼'}</span></div>
          {show && <img src={require(`assets/images/neighbors/${neighbor.key}.jpg`)} alt={neighbor.name} />}
          <div className='flex flex-wrap text-stone-600 divide-x divide-stone-400'>
            <div className='pr-2'>{ neighbor.description }</div>
            <div className='px-2'>{ neighbor.gender }</div>
            <div className='px-2'>{ neighbor.locations.join(' ') }</div>
            {heartEmoji !== '' && <div className='px-2'>{ heartEmoji }</div>}
          </div>
        </div>
        <div className='my-card-body flex md:w-4/5'>
          <div className='w-1/3'><Gifts level={1} /></div>
          <div className='w-1/3'><Gifts level={2} /></div>
          <div className='w-1/3'><Gifts level={3} /></div>
          {/* <div className='w-1/4'><Gifts level={4} /></div> */}
        </div>
     </div>
    )
  }

  const row = [];
  neighborRawData.forEach(neighbor => {
    if(showGiftList) {
      if(toGives.find(toGive => toGive.neighborhood === neighbor.key)) {
        row.push(<Neighbor neighbor={neighbor} key={neighbor.name} />)
      }
      return;
    }

    const neighborStr = JSON.stringify(neighbor);
    const searched = searchInput.toLowerCase().trim().split(' ').map(s => neighborStr.toLowerCase().includes(s)).find(s => s);

    if(!searched) return;
    row.push(<Neighbor neighbor={neighbor} key={neighbor.name} />)
  });
  return (
    <>
      <article>
        <p>{ lang('page_neighbors_instruction') }</p>
        <p>{notForMarriageWithGift}：{ lang('page_neighbors_non_marriage_candidate') }，{forMarriageWithGift}：{ lang('page_neighbors_marriage_candidate' )}</p>
      </article>
      <SearchInput placeholder={lang('page_neighbors_search_bar_instruction')} />
      <div className='hidden md:flex px-4 pt-2'>
        <div className='w-1/4'></div>
        <div className='w-1/4'>{lang('page_neighbors_favorite')}</div>
        <div className='w-1/4'>{lang('page_neighbors_loved')}</div>
        <div className='w-1/4'>{lang('page_neighbors_liked')}</div>
        {/* <div className='w-1/5'>稍微喜歡</div> */}
      </div>
      <div className='space-y-2'>
        {row}
      </div>
      <div className='text-sm text-stone-400'>圖片來源：<a className='underline' href='https://asia.sega.com/bokumono/olive/cht/town/?tab=resident'>-上街去吧-牧場物語 橄欖鎮與希望的大地 官方網站</a></div>
    </>
  );
}