import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchInput } from './store/searchInputSlice';
import { toggleShowGiftList } from './store/showGiftListSlice';
import { Outlet, Link, useLocation, useMatch, useResolvedPath } from "react-router-dom";
import upArrow from './assets/icons/up-arrow.png';
import giftBox from './assets/icons/giftbox.png';
import add from './assets/icons/add.png';
import { addToDo } from './store/toDoListSlice';

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function ToolButton({ onClick, icon }) {
  return (<button className='w-10 h-10 rounded-full shadow-lg' onClick={onClick}><img className='m-auto' src={icon} alt=''/></button>)
}

function GiftListButton() {
  const toGives = useSelector((state) => state.toGives);
  const dispatch = useDispatch();
  const location = useLocation();

  if(location.pathname === '/neighbor' && toGives.length > 0) {
    return(<ToolButton onClick={() => dispatch(toggleShowGiftList())} icon={giftBox} ></ToolButton>);
  }
  return (<></>);
}

function AddToDoButton() {
  const dispatch = useDispatch();
  const location = useLocation();

  function writeTodo() {
    const toDoContent = prompt('484有什麼該做的事要做？');
    if (toDoContent != null && toDoContent !== '') {
      dispatch(addToDo(toDoContent));
    }
  }

  if(location.pathname === '/todo') {
    return(<ToolButton onClick={() => writeTodo()} icon={add} ></ToolButton>);
  }
  return (<></>);
}

function PageDescription() {
  const location = useLocation();
  const descriptions = {
    '/neighbor': '不知道居民喜好嗎？知道喜好但背包一堆禮物，配對困難嗎？讓禮物小助手協助你吧～',
    '/crop': '不知道農作物對應的季節嗎？快來查看看吧',
    '/item': '物品太多不知道去哪收集嗎？這裡或許可以告訴你答案呦',
    '/map': '常常忘記到小鎮的時候要做哪些事嗎？快使用地圖小幫手吧～',
    '/todo': '溫馨提醒：今日事，今日畢',
  };
  if (descriptions[location.pathname]) {
    return (<p>{descriptions[location.pathname]}</p>);
  }

  return (<></>);
}

function MyLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  if(match) {
    document.title = `牧場物語-橄欖鎮：${children}`;
  }

  return (
      <Link
        className={ match ? 'active' : 'inactive' }
        to={to}
        {...props}
      >
        {match ? <h1>{children}</h1> : children}
      </Link>
  );
}

export default function Layout() {
  const searchInput = useSelector((state) => state.searchInput.value);
  const dispatch = useDispatch();

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
      <nav>
        <ul className='my-tabs'>
          <li>
            <MyLink to="/neighbor">居民喜好</MyLink>
          </li>
          <li>
            <MyLink to="/crop">農作物</MyLink>
          </li>
          <li>
            <MyLink to="/item">物品</MyLink>
          </li>
          <li>
            <MyLink to="/map">地圖</MyLink>
          </li>
          <li>
            <MyLink to="/todo">待辦清單</MyLink>
          </li>
        </ul>
      </nav>
      <PageDescription />
      <Outlet />
      <div className='fixed w-8 right-4 top-1/2'>
        <GiftListButton />
        <AddToDoButton />
        <ToolButton onClick={scrollToTop} icon={upArrow}></ToolButton>
      </div>
    </div>
  );
}