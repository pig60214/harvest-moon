import './App.css';
import { Outlet, Link, useLocation, useMatch, useResolvedPath } from "react-router-dom";
import ToolButtons from 'components/ToolButtons';
import { useEffect } from 'react';
import lang from 'rawData/resourse';
import { Store } from 'react-notifications-component';
import { useDispatch, useSelector } from 'react-redux';
import { setNotificationShowed } from 'store/notificationsSlice';
import { gaEventTracker } from 'GA';

function PageDescription() {
  const location = useLocation();
  const descriptions = {
    '/neighbor': {
      'title': '牧場物語橄欖鎮 | 居民喜好 | 讓你送禮不再耗腦',
      // 'h1': '不知道居民喜好嗎？知道喜好但背包一堆禮物，配對困難嗎？讓禮物小助手協助你吧',
      // 'h2': '禮物小助手說明',
    },
    '/crop': {
      'title': '牧場物語橄欖鎮 | 果樹 | 蔬菜 | 花卉 | 農作物',
      // 'h1': '不知道農作物對應的季節嗎？煮飯時需要太多農作物很混亂嗎？試試看背包小助手吧',
      // 'h2': '背包小助手說明',
    },
    '/item':{
      // 'h1':  '物品太多不知道去哪收集嗎？這裡或許可以告訴你答案呦',
      // 'h2': '',
    },
    '/map': {
      'h1': '常常忘記到小鎮的時候要做哪些事嗎？快使用地圖小助手吧～',
      'h2': '點擊你想去的地方，甚至可以標記去那裡要幹嘛，讓小助手幫你記錄一下吧',
    },
    '/todo': {
      // 'h1': '溫馨提醒：今日事，今日畢',
      // 'h2': '代辦清單使用方式',
    },
  };
  if (descriptions[location.pathname]) {
    if (descriptions[location.pathname].title) {
      document.title = descriptions[location.pathname].title;
    }
    return (
    <>
      { descriptions[location.pathname].h1 && <h1>{descriptions[location.pathname].h1}</h1>}
      { descriptions[location.pathname].h2 && <h2>{descriptions[location.pathname].h2}</h2>}
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
  const dispatch = useDispatch();
  const notifications = useSelector(state => state.notifications);
  useEffect(() => {
    if(notifications.length > 0) {
      notifications.forEach(notification => {
        const { title, message } = notification;
        Store.addNotification({
          title,
          message,
          type: "version-update",
          container: "top-right",
          dismiss: {
            onScreen: true,
            pauseOnHover: true,
            click: true,
            touch: true,
            showIcon: true,
          }
        });
        if(title === "版本更新") {
          gaEventTracker('版本更新通知', { value: message });
        } else {
          gaEventTracker('通知', { value: message });
        }
      })
      dispatch(setNotificationShowed());
    }
  }, [dispatch, notifications]);
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