// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import neighborRawData from './neighborRawData';
import { cropRawData, cropRawDataNameAsKey } from './cropRawData';
import itemRawData from './itemRawData';
import locationRawData from './locationRawData';

function Neighbors ({searchInput, toGives, setToGives, showGiftList, setShowGiftList}) {

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

function Crops({ searchInput }) {
  const tableRows = [];
  cropRawData.forEach(data => {
    if(!JSON.stringify(data).includes(searchInput)) return;
    tableRows.push(
      <tr key={data.name}>
        <td>{data.name}</td>
        <td className="text-center">{data.category}</td>
        <td>{data.season.join(', ')}</td>
        <td className="text-center">{data.hasVariant ? 'V' : ''}</td>
      </tr>
    );
  });

  return (
    <table>
      <tr>
        <th className="w-28">名稱</th>
        <th className="w-20">種類</th>
        <th className="w-32">季節</th>
        <th className="w-12">變種</th>
      </tr>
      {tableRows}
    </table>
  );
}

function Map({ locations, setLocations }) {

  function toggleLocation(selectedLocationName) {
    const nextLocations = locations.map(location => {
      if(location.name === selectedLocationName) {
        location.highlight = !location.highlight;
        if(!location.highlight) {
          location.goToShopping = false;
          location.goToGiveTheGift = false;
        }
      }
      return location;
    })

    setLocations(nextLocations);
  };

  function toggleGoToShopping(selectedLocationName) {
    const nextLocations = locations.map(location => {
      if(location.name === selectedLocationName) {
        location.goToShopping = !location.goToShopping;
        if(location.goToShopping) {
          location.highlight = true;
        }
        if(!location.goToGiveTheGift && !location.goToShopping) {
          location.highlight = false;
        }
      }
      return location;
    })

    setLocations(nextLocations);
  };

  function toggleGoToGiveTheGift(selectedLocationName) {
    const nextLocations = locations.map(location => {
      if(location.name === selectedLocationName) {
        location.goToGiveTheGift = !location.goToGiveTheGift;
        if(location.goToGiveTheGift) {
          location.highlight = true;
        }
        if(!location.goToGiveTheGift && !location.goToShopping) {
          location.highlight = false;
        }
      }
      return location;
    })

    setLocations(nextLocations);
  };

  const rows = [];
  locations.forEach(location => {
    rows.push(
      <div key={location.name} className={`${location.rowClass} ${location.colClass}`}>
        <div
          className={`border border-stone-600 rounded-t-lg border-b-0 text-center h-15 overflow-x-auto relative ${location.highlightClass}`}
          onClick={() => toggleLocation(location.name)}
        >
          <div className='text-xs text-stone-500 absolute right-1 bottom-0'>{`${location.openTime} ${location.closedDay}`}</div>
          <div className='whitespace-nowrap py-4'>{location.name}</div>
        </div>
        <div className='flex border border-stone-600 rounded-b-lg overflow-x-auto'>
            <div className={`flex-1 p-2 ${location.goToShoppingClass}`} onClick={() => toggleGoToShopping(location.name)}></div>
            <div className={`flex-1 p-2 ${location.goToGiveTheGiftClass}`} onClick={() => toggleGoToGiveTheGift(location.name)}></div>
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

function Item({ searchInput }) {
  const rows = [];

  Object.entries(itemRawData).forEach(entry => {
    const [key, value] = entry;
    if(!key.includes(searchInput)) return;
    rows.push(<tr>
      <td>{key}</td>
      <td>{value}</td>
    </tr>)
  });

  return (
    <table>
      <tr>
        <th>名稱</th>
        <th>取得方式</th>
      </tr>
      {rows}
    </table>
  );
}

const tabs = ['neighbor', 'crop', 'item', 'map'];

function Tabs({ activeTab, setActiveTab }) {
  const lis = [];
  tabs.forEach(tab => {
    lis.push(<li key={tab}>
      <span className={activeTab === tab ? "active" : "inactive"} onClick={() => setActiveTab(tab)}>
        {tab}
      </span>
    </li>)
  })
  return (
    <ul className="my-tabs">
        {lis}
    </ul>
  );
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function App() {
  const [searchInput, setSearchInput] = useState('');
  const [activeTab, setActiveTab] = useState('neighbor');
  const [locations, setLocations] = useState(locationRawData);
  const [toGives, setToGives] = useState([]);
  const [showGiftList, setShowGiftList] = useState(false);

  function TabContent() {
    if(activeTab === tabs[0]) {
      return <Neighbors searchInput={searchInput} toGives={toGives} setToGives={setToGives} showGiftList={showGiftList} setShowGiftList={setShowGiftList} />
    }

    if(activeTab === tabs[1]) {
      return <Crops searchInput={searchInput}/>
    }

    if(activeTab === tabs[2]) {
      return <Item searchInput={searchInput}/>
    }

    return <Map locations={locations} setLocations={setLocations} />
  }

  function ToolButton({ onClick, children }) {
    return (<button className='w-8' onClick={onClick}>{children}</button>)
  }

  function GiftListButton() {
    if(activeTab === tabs[0] && toGives.length>0) {
      return(<ToolButton onClick={() => setShowGiftList(!showGiftList)} >⊞</ToolButton>);
    }
    return (<></>);
  }

  return (
    <div className='m-2 space-y-2'>
      <div className='w-full flex'>
        <input
          type="text"
          placeholder="Search here"
          className='grow border-b-2 border-stone-300 text-lg'
          onChange={e => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <button className='w-8' onClick={e => setSearchInput('')}>X</button>
      </div>
    <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
    <TabContent />
    <div className='fixed w-8 right-4 bottom-4'>
      <GiftListButton />
      <ToolButton onClick={scrollToTop} >⇧</ToolButton>
    </div>
    </div>
  );
}

export default App;
