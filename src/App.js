import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchInput } from './store/searchInputSlice';
import { Outlet, Link, useLocation, useMatch, useResolvedPath } from "react-router-dom";
import ToolButtons from 'components/toolButtons';

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
    <li className={ match ? 'active' : 'inactive' }>
      <Link
        to={to}
        {...props}
      >
        {match ? <h1>{children}</h1> : children}
      </Link>
    </li>
  );
}

export default function Layout() {
  const searchInput = useSelector((state) => state.searchInput.value);
  const dispatch = useDispatch();

  return (
    <div className='m-3 md:mx-auto max-w-screen-lg space-y-2'>
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
        <ul className='my-tabs nav'>
            <MyLink to="/neighbor">居民喜好</MyLink>
            <MyLink to="/crop">農作物</MyLink>
            <MyLink to="/item">物品</MyLink>
            <MyLink to="/map">地圖</MyLink>
            <MyLink to="/todo">待辦清單</MyLink>
        </ul>
      </nav>
      <PageDescription />
      <Outlet />
      <ToolButtons />
    </div>
  );
}