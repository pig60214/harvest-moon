import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import upArrow from 'assets/icons/up-arrow.png';
import add from 'assets/icons/add.png';
import { addToDo } from 'store/toDoListSlice';
import giftBox from 'assets/icons/giftbox.png';
import { toggleShowGiftList } from 'store/showGiftListSlice';
import bag from 'assets/icons/school-bag.png';
import { toggleShowToGetCrops } from 'store/toGetCropsSlice';

export default function ToolButtons() {

  const dispatch = useDispatch();
  const location = useLocation();

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function ToolButton({ onClick, icon, light = false }) {
    return (<button className={`w-10 h-10 rounded-full shadow-lg ${light ? 'bg-stone-100 border border-stone-500' : 'opacity-80'}`} onClick={onClick}><img className='m-auto' src={icon} alt=''/></button>)
  }

  function GiftListButton() {
    const toGives = useSelector((state) => state.toGives);
    const showGiftList = useSelector(state => state.showGiftList.value);

    if(location.pathname === '/neighbor' && toGives.length > 0) {
      return(<ToolButton light={showGiftList} onClick={() => dispatch(toggleShowGiftList())} icon={giftBox} ></ToolButton>);
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
      return(<ToolButton onClick={() => writeTodo()} icon={add} ></ToolButton>);
    }
  }

  function ToGetCropsButton() {
    const toGetCrops = useSelector(state => state.toGetCrops);

    if (location.pathname === '/crop' && toGetCrops.crops.length > 0) {
      return(<ToolButton light={toGetCrops.showToGetCrops} onClick={() => dispatch(toggleShowToGetCrops())} icon={bag} ></ToolButton>);
    }
  }

  return (
    <div className='fixed w-8 right-4 top-1/2'>
      <GiftListButton />
      <AddToDoButton />
      <ToGetCropsButton />
      <ToolButton onClick={scrollToTop} icon={upArrow}></ToolButton>
    </div>
  )
}