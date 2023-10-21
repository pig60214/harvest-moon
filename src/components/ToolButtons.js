import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import upArrow from 'assets/icons/up-arrow.png';
import add from 'assets/icons/add.png';
import { addToDo } from 'store/toDoListSlice';
import giftBox from 'assets/icons/giftbox.png';
import { toggleShowGiftList } from 'store/showGiftListSlice';
import bag from 'assets/icons/school-bag.png';
import { toggleShowToGetCrops } from 'store/toGetCropsSlice';
import { toggleShowToGetItems } from 'store/toGetItemsSlice';
import { setupGAEventTracker } from 'GA';
import feedback from 'assets/icons/feedback.png';

const FEEDBACK_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSckoi1QGqUuSgusVMuVgWTqQxrnxvG98YOtWWFbISqtWX3zFQ/viewform';

export default function ToolButtons() {
  const gaEventTracker = setupGAEventTracker('ToolButtons');

  const dispatch = useDispatch();
  const location = useLocation();

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function ToolButton({ onClick, icon, light = false }) {
    return (<button className={`w-10 h-10 rounded-full shadow-lg ${light ? 'bg-stone-100 border border-stone-500' : 'opacity-80'}`} onClick={onClick}><img className='m-auto' src={icon} alt=''/></button>)
  }

  function ScrollToTopButton() {
    return location.pathname !== '/map' && <ToolButton onClick={() => { scrollToTop(); gaEventTracker('ToolButtons-ScrollToTop'); }} icon={upArrow}></ToolButton>;
  }

  function FeedbackButton() {
    const openFeedbackForm = () => window.open(FEEDBACK_FORM);
    return process.env.REACT_APP_ENV !== 'test' && (<ToolButton onClick={openFeedbackForm} icon={feedback}></ToolButton>)
  }

  function GiftListButton() {
    const toGives = useSelector((state) => state.toGives);
    const showGiftList = useSelector(state => state.showGiftList.value);

    if(location.pathname === '/neighbor' && toGives.length > 0) {
      return(<ToolButton light={showGiftList} onClick={() => { dispatch(toggleShowGiftList()); gaEventTracker('ToolButtons-GiftList'); }} icon={giftBox} ></ToolButton>);
    }
  }

  function AddToDoButton() {
    function writeTodo() {
      const toDoContent = prompt('484有什麼該做的事要做？');
      if (toDoContent != null && toDoContent !== '') {
        dispatch(addToDo(toDoContent));
      }
    }

    if(location.pathname === '/todo') {
      return(<ToolButton onClick={() => { writeTodo(); gaEventTracker('ToolButtons-AddToDo'); }} icon={add} ></ToolButton>);
    }
  }

  function ToGetCropsButton() {
    const toGetCrops = useSelector(state => state.toGetCrops);

    if (location.pathname === '/crop' && toGetCrops.crops.length > 0) {
      return(<ToolButton light={toGetCrops.showToGetCrops} onClick={() => { dispatch(toggleShowToGetCrops()); gaEventTracker('ToolButtons-ToGetCrops');}} icon={bag} ></ToolButton>);
    }
  }

  function ToGetItemsButton() {
    const toGetItems = useSelector(state => state.toGetItems);

    if (location.pathname === '/item' && toGetItems.items.length > 0) {
      return(<ToolButton light={toGetItems.showToGetItems} onClick={() => { dispatch(toggleShowToGetItems()); gaEventTracker('ToolButtons-ToGetItems');}} icon={bag} ></ToolButton>);
    }
  }

  return (
    <>
      <div className='fixed w-8 right-4 top-1/2'>
        <GiftListButton />
        <AddToDoButton />
        <ToGetCropsButton />
        <ToGetItemsButton />
        <ScrollToTopButton />
      </div>
      <div className='fixed w-8 right-4 bottom-4'><FeedbackButton /></div>
    </>
  )
}