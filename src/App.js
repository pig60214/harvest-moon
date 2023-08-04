// import logo from './logo.svg';
import './App.css';
import parse from 'html-react-parser';
import { useState } from 'react';
import giftRawData from './giftRawData';
import { cropRawData, cropRawDataNameAsKey } from './cropRawData';

function TableRow ({data, searchInput}) {
  const isSearchName = data.name.includes(searchInput) || data.description.includes(searchInput);
  const isMe = (gift, level) => gift.level === level && (isSearchName || JSON.stringify(gift).includes(searchInput));
  return (
    <div className='my-card space-y-2'>
      <div className='my-card-header flex flex-col md:w-1/5'>
        <div className='font-black'>{ data.name }</div>
        <div className='flex text-stone-600 divide-x divide-stone-400'>
          <div className='pr-2'>{ data.description }</div>
          <div className='px-2'>{ data.gender === 'M' ? '♂' : '♀' }</div>
          {data.isMarriageCandidate && <div className='px-2'>🩶</div>}
        </div>
      </div>
      <div className='my-card-body flex md:w-4/5'>
        <div className='w-1/4'>{ parse(data.gifts.filter(gift => isMe(gift, 1)).map(gift => gift.name).join('<br/>')) }</div>
        <div className='w-1/4'>{ parse(data.gifts.filter(gift => isMe(gift, 2)).map(gift => gift.name).join('<br/>')) }</div>
        <div className='w-1/4'>{ parse(data.gifts.filter(gift => isMe(gift, 3)).map(gift => gift.name).join('<br/>')) }</div>
        <div className='w-1/4'>{ parse(data.gifts.filter(gift => isMe(gift, 4)).map(gift => gift.name).join('<br/>')) }</div>
      </div>
   </div>
  )
}

function addGiftDescription() {
  giftRawData.forEach(data => {
    data.gifts.forEach(gift => {
      if(cropRawDataNameAsKey[gift.name]) {
        gift['description'] = cropRawDataNameAsKey[gift.name].category;
      }
    })
  });
}

function Neighborhoods ({searchInput}) {
  addGiftDescription();
  const row = [];
  giftRawData.forEach(data => {
    if(!JSON.stringify(data).includes(searchInput)) return;
    row.push(<TableRow data={data} key={data.name} searchInput={searchInput} />)
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

function Map({ searchInput }) {
  const locations = [
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
  const rows = [];
  locations.forEach(location => {
    if(!location.name.includes(searchInput)) {
      location.highlightClass = '';
    } else {
      location.highlightClass = 'bg-stone-200';
    }
    rows.push(<div className={`border border-stone-600 rounded-lg text-center py-2 ${location.rowClass} ${location.colClass} ${location.highlightClass}`}>{location.name}</div>);
  });
  return (
    <div className='grid grid-rows-6 grid-cols-9 gap-4'>
      {rows}
    </div>
  );
}

const tabs = ['gift', 'crop', 'map'];

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

function TabContent({ activeTab, searchInput }) {
  if(activeTab === tabs[0]) {
    return <Neighborhoods searchInput={searchInput}/>
  }

  if(activeTab === tabs[1]) {
    return <Crops searchInput={searchInput}/>
  }

  return <Map searchInput={searchInput}/>
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function App() {
  const [searchInput, setSearchInput] = useState('');
  const [activeTab, setActiveTab] = useState('gift');
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
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
    <TabContent activeTab={activeTab} searchInput={searchInput}/>
    <div className='fixed w-8 right-4 bottom-4'>
      <button className='w-8' onClick={scrollToTop}>⇧</button>
    </div>
    </div>
  );
}

export default App;
