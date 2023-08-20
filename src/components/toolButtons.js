import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import upArrow from 'assets/icons/up-arrow.png';
import add from 'assets/icons/add.png';
import { addToDo } from 'store/toDoListSlice';
import giftBox from 'assets/icons/giftbox.png';
import { toggleShowGiftList } from 'store/showGiftListSlice';

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

export default function ToolButtons() {
  return (
    <div className='fixed w-8 right-4 top-1/2'>
      <GiftListButton />
      <AddToDoButton />
      <ToolButton onClick={scrollToTop} icon={upArrow}></ToolButton>
    </div>
  )
}