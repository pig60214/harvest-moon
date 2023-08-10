// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Map from './Map';
import Neighbors from './Neignbors';
import Crops from './Crops';
import Item from './Item';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchInput } from './store/searchInputSlice';
import { toggleShowGiftList } from './store/showGiftListSlice';

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
  const searchInput = useSelector((state) => state.searchInput.value);
  const toGives = useSelector((state) => state.toGives);
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState('neighbor');

  function TabContent() {
    if(activeTab === tabs[0]) {
      return <Neighbors />
    }

    if(activeTab === tabs[1]) {
      return <Crops />
    }

    if(activeTab === tabs[2]) {
      return <Item />
    }

    return <Map />
  }

  function ToolButton({ onClick, children }) {
    return (<button className='w-8' onClick={onClick}>{children}</button>)
  }

  function GiftListButton() {
    if(activeTab === tabs[0] && toGives.length>0) {
      return(<ToolButton onClick={() => dispatch(toggleShowGiftList())} >⊞</ToolButton>);
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
          onChange={e => dispatch(setSearchInput(e.target.value))}
          value={searchInput}
        />
        <button className='w-8' onClick={() => dispatch(setSearchInput(''))}>X</button>
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
