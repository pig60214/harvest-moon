// import logo from './logo.svg';
import './App.css';
import parse from 'html-react-parser';
import { useState } from 'react';
import giftRawData from './giftRawData';
import { cropRawDataNameAsKey } from './cropRawData';

function TableRow ({data, searchInput}) {
  const isSearchName = data.name.includes(searchInput) || data.description.includes(searchInput);
  const isMe = (gift, level) => gift.level === level && (isSearchName || JSON.stringify(gift).includes(searchInput));
  return (
    <tr>
      <td width="66" valign="top">{ data.name }<br/>({ data.description })</td>
      <td width="124" valign="top">{ parse(data.gifts.filter(gift => isMe(gift, 1)).map(gift => gift.name).join('<br/>')) }</td>
      <td width="124" valign="top">{ parse(data.gifts.filter(gift => isMe(gift, 2)).map(gift => gift.name).join('<br/>')) }</td>
      <td width="124" valign="top">{ parse(data.gifts.filter(gift => isMe(gift, 3)).map(gift => gift.name).join('<br/>')) }</td>
      <td width="124" valign="top">{ parse(data.gifts.filter(gift => isMe(gift, 4)).map(gift => gift.name).join('<br/>')) }</td>
   </tr>
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
    if(JSON.stringify(data).includes(searchInput)) {
      row.push(<TableRow data={data} key={data.name} searchInput={searchInput} />)
    }
  });
  return <table class="cbox-table" border="1" cellspacing="0" cellpadding="0">
  <tbody><tr>
   <td width="66" bgcolor="#CCFFFF" valign="top"> </td>
   <td width="124" bgcolor="#CCFFFF" align="center" valign="top">最愛</td>
   <td width="124" bgcolor="#CCFFFF" align="center" valign="top">很喜歡</td>
   <td width="124" bgcolor="#CCFFFF" align="center" valign="top">喜歡</td>
   <td width="124" bgcolor="#CCFFFF" align="center" valign="top">稍微喜歡</td>
  </tr>{row}
  </tbody></table>
}

function App() {
  const [searchInput, setSearchInput] = useState('');
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
    <>
    <input
      type="text"
      placeholder="Search here"
      onChange={e => setSearchInput(e.target.value)}
      value={searchInput}
    />
    <Neighborhoods searchInput={searchInput}/>
    </>
  );
}

export default App;
