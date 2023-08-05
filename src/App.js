// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import neighborRawData from './neighborRawData';
import { cropRawData, cropRawDataNameAsKey } from './cropRawData';

function Neighbors ({searchInput, toGives, setToGives, showGiftList}) {

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
        setToGives(toGives.filter(toGive => toGive.neighborhood !== neighborhood));
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
        <td className="border border-slate-600">{data.name}</td>
        <td className="border border-slate-600 text-center">{data.category}</td>
        <td className="border border-slate-600">{data.season.join(', ')}</td>
        <td className="border border-slate-600 text-center">{data.hasVariant ? 'V' : ''}</td>
      </tr>
    );
  });

  return (
    <table className='border-collapse border border-black'>
      <tr>
        <th className="border border-slate-600 w-28">名稱</th>
        <th className="border border-slate-600 w-20">種類</th>
        <th className="border border-slate-600 w-32">季節</th>
        <th className="border border-slate-600 w-12">變種</th>
      </tr>
      {tableRows}
    </table>
  );
}

const initialLocations = [
  {
    'name': '巡林員小屋',
    'rowClass': 'row-start-1',
    'colClass':'col-start-3',
  },
  {
    'name': '清心庵',
    'rowClass': 'row-start-2',
    'colClass':'col-start-1',
  },
  {
    'name': '鎮公所',
    'rowClass': 'row-start-2',
    'colClass':'col-start-3 col-span-2',
  },
  {
    'name': '博物館',
    'rowClass': 'row-start-2',
    'colClass':'col-start-5 col-span-2',
  },
  {
    'name': '旅館＆咖啡廳',
    'rowClass': 'row-start-3',
    'colClass':'col-start-7 col-span-2',
  },
  {
    'name': '最喜翻的家',
    'rowClass': 'row-start-4',
    'colClass':'col-start-1',
  },
  {
    'name': '工具行',
    'rowClass': 'row-start-4',
    'colClass':'col-start-2',
  },
  {
    'name': '美人沙龍',
    'rowClass': 'row-start-4',
    'colClass':'col-start-4',
  },
  {
    'name': '花店',
    'rowClass': 'row-start-4',
    'colClass':'col-start-6',
  },
  {
    'name': '觀光服務中心',
    'rowClass': 'row-start-4',
    'colClass':'col-start-9',
  },
  {
    'name': '木工店',
    'rowClass': 'row-start-5',
    'colClass':'col-start-2',
  },
  {
    'name': '食材店',
    'rowClass': 'row-start-5',
    'colClass':'col-start-4',
  },
  {
    'name': '小餐館',
    'rowClass': 'row-start-5',
    'colClass':'col-start-6',
  },
  {
    'name': '動物商店',
    'rowClass': 'row-start-6',
    'colClass':'col-start-2',
  },
  {
    'name': '雜貨店',
    'rowClass': 'row-start-6',
    'colClass':'col-start-4',
  },
  {
    'name': '馬可斯的家',
    'rowClass': 'row-start-6',
    'colClass':'col-start-7',
  },
];

function initLocations() {
  initialLocations.forEach(location => {
    location.highlight = false;
    Object.defineProperty(location, 'highlightClass', {
      get: function() { return this.highlight ? 'bg-stone-200' : '' }
    });

    location.goToShopping = false;
    Object.defineProperty(location, 'goToShoppingClass', {
      get: function() { return this.goToShopping ? 'bg-sky-600' : 'bg-sky-100' }
    });

    location.goToGiveTheGift = false;
    Object.defineProperty(location, 'goToGiveTheGiftClass', {
      get: function() { return this.goToGiveTheGift ? 'bg-pink-600' : 'bg-pink-100' }
    });
  });
}

initLocations();

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
          className={`border border-stone-600 rounded-t-lg border-b-0 text-center py-2 h-10 overflow-x-auto ${location.highlightClass}`}
          onClick={() => toggleLocation(location.name)}
        >
          <div className='whitespace-nowrap'>{location.name}</div>
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

const tabs = ['neighbor', 'crop', 'map'];

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
  const [locations, setLocations] = useState(initialLocations);
  const [toGives, setToGives] = useState([]);
  const [showGiftList, setShowGiftList] = useState(false);

  function TabContent() {
    if(activeTab === tabs[0]) {
      return <Neighbors searchInput={searchInput} toGives={toGives} setToGives={setToGives} showGiftList={showGiftList} />
    }
  
    if(activeTab === tabs[1]) {
      return <Crops searchInput={searchInput}/>
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
