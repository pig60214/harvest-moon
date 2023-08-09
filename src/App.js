// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Map from './Map';
import Neighbors from './Neignbors';
import Crops from './Crops';
import Item from './Item';

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

    return <Map />
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
