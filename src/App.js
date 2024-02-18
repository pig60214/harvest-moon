import './App.css';
import { Outlet, Link, useLocation, useMatch, useResolvedPath } from "react-router-dom";
import ToolButtons from 'components/ToolButtons';
import { useState } from 'react';
import lang from 'rawData/resourse';

function PageDescription() {
  const location = useLocation();
  const [ showDescription, setShowDescription ] = useState();
  const descriptions = {
    '/neighbor': {
      'title': '牧場物語橄欖鎮 | 居民喜好 | 讓你送禮不再耗腦',
      // 'h1': '不知道居民喜好嗎？知道喜好但背包一堆禮物，配對困難嗎？讓禮物小助手協助你吧',
      // 'h2': '禮物小助手說明',
      // 'p': '這是一個為了不考驗自己記憶力而生的功能，上方可以搜尋居民名字、居民描述或想送出的物品，快速找到想要的配對。點選物品後，小助手會幫你記錄起來，接著可以點擊出現在右手邊的禮物按鈕一覽要送出的配對。🩶：可結婚的居民，🩷：要送禮物給這位可結婚的居民🧡：要送禮給這位不可結婚居民'
    },
    '/crop': {
      // 'h1': '不知道農作物對應的季節嗎？煮飯時需要太多農作物很混亂嗎？試試看背包小助手吧',
      // 'h2': '背包小助手說明',
      // 'p': '除了上方可以搜尋名稱功能外，下方也有種類和季節的標籤，可以只顯示出你想要的種類或季節，讓你快速找到它。點擊想要的農作物，小助手會記錄起來，接著可以點擊出現在右手邊的背包按鈕可以一覽你現在需要的農作物呦',
    },
    '/item':{
      'h1':  '物品太多不知道去哪收集嗎？這裡或許可以告訴你答案呦',
      'h2': '',
    },
    '/map': {
      'h1': '常常忘記到小鎮的時候要做哪些事嗎？快使用地圖小助手吧～',
      'h2': '地圖小助手說明',
      'p': '這裡沒搜尋功能，因為沒什麼好搜尋的ＸＤ，但可以點擊你想去的地方，甚至可以標記去那裡要幹嘛，讓小助手幫你記錄一下',
    },
    '/todo': {
      // 'h1': '溫馨提醒：今日事，今日畢',
      // 'h2': '代辦清單使用方式',
      // 'p': '在其他頁面紀錄要做的事情，會全部集中顯示在這裡。也可以點擊右手邊的「+」按鈕新增自己的代辦事項呦。完成事項後，點擊該事項，就會通知對應的小助手把紀錄移除囉'
    },
  };
  if (descriptions[location.pathname]) {
    if (descriptions[location.pathname].title) {
      document.title = descriptions[location.pathname].title;
    }
    return (
    <>
      <h1>{descriptions[location.pathname].h1}</h1>
      { descriptions[location.pathname].h2 &&
        <h2>
          {descriptions[location.pathname].h2}
          <span className='cursor-pointer' onClick={() => setShowDescription(!showDescription)}>{ showDescription ? ' ▲' : ' ▼'}</span>
        </h2>}
      { descriptions[location.pathname].p && showDescription && <p>{descriptions[location.pathname].p}</p>}
    </>);
  }

  return (<></>);
}

function MyLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  const path = resolved.pathname;
  let match = useMatch({ path, end: true });

  if(match && children !== '居民喜好') {
    document.title = `牧場物語-橄欖鎮：${children}`;
  }

  return (
    <li className={ match ? 'active' : 'inactive' }>
      <Link
        to={to}
        {...props}
      >
        {children}
      </Link>
    </li>
  );
}

export default function Layout() {
  return (
    <>
    <nav>
        <ul className='my-nav'>
            <MyLink to="/neighbor">{ lang('居民喜好') }</MyLink>
            <MyLink to="/crop">{ lang('農作物') }</MyLink>
            <MyLink to="/item">{ lang('物品') }</MyLink>
            <MyLink to="/map">{ lang('地圖') }</MyLink>
            <MyLink to="/animals">{ lang('動物') }</MyLink>
            <MyLink to="/todo">{ lang('待辦清單') }</MyLink>
            <MyLink to="/cooking">{ lang('烹飪') }</MyLink>
        </ul>
      </nav>
    <div className='m-3 md:mx-5 lg:mx-auto max-w-screen-lg space-y-2'>
      
      <PageDescription />
      <Outlet />
      <ToolButtons />
    </div>
    </>
  );
}