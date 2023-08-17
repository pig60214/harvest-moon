import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchInput } from './store/searchInputSlice';
import { toggleShowGiftList } from './store/showGiftListSlice';
import { Outlet, Link, useLocation, useMatch, useResolvedPath } from "react-router-dom";


function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function ToolButton({ onClick, children }) {
  return (<button className='w-8' onClick={onClick}>{children}</button>)
}

function GiftListButton() {
  const toGives = useSelector((state) => state.toGives);
  const dispatch = useDispatch();
  const location = useLocation();

  if(location.pathname === '/neighbor' && toGives.length > 0) {
    return(<ToolButton onClick={() => dispatch(toggleShowGiftList())} >⊞</ToolButton>);
  }
  return (<></>);
}

function MyLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
      <Link
        className={ match ? 'active' : 'inactive' }
        to={to}
        {...props}
      >
        {children}
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
        </ul>
      </nav>
      <Outlet />
      <div className='fixed w-8 right-4 bottom-4'>
        <GiftListButton />
        <ToolButton onClick={scrollToTop} >⇧</ToolButton>
      </div>
    </div>
  );
}