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

const tabs = ['gift', 'crop'];

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
  return <Crops searchInput={searchInput}/>
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
    <input
      type="text"
      placeholder="Search here"
      className='w-full border-b-2 border-stone-300 text-lg'
      onChange={e => setSearchInput(e.target.value)}
      value={searchInput}
    />
    <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
    <TabContent activeTab={activeTab} searchInput={searchInput}/>
    </div>
  );
}

export default App;
