import { useDispatch, useSelector } from "react-redux";
import { removeToDo } from "./store/toDoListSlice";
import { toggleLocation, toggleGoToShopping, toggleGoToGiveTheGift } from './store/locationsSlice';
import { toggleToGive } from "./store/toGivesSlice";

function ToDo({ content, children, className, onClick }) {
  return (
    <li className={`bg-stone-300 rounded-lg p-4 ${className}`} onClick={onClick}>
      {content}
      {children}
    </li>
  );
}

export default function ToDoList() {
  const toGives = useSelector((state) => state.toGives);
  const locations = useSelector((state) => state.locations).map(loc => {
    const { name, shopping, toGive } = loc;

    if (!shopping && !toGive) {
      return <div className="cursor-pointer" onClick={() => dispatch(toggleLocation(name))}>去{name}</div>
    }

    const shoppingDiv = <span className='bg-sky-400 rounded p-1 cursor-pointer' onClick={() => dispatch(toggleGoToShopping(name))}>買東西/找NPC</span>;
    const toGiveDiv = <span className='bg-pink-400 rounded p-1 cursor-pointer' onClick={() => dispatch(toggleGoToGiveTheGift(name))}>送禮物</span>;
    if (shopping && toGive) {
      return <div>去{name}{shoppingDiv}{toGiveDiv}</div>;
    }

    return <div>去{name}{shopping ? shoppingDiv : toGiveDiv}</div>
  });
  const toDoList = useSelector((state) => state.toDoList);
  const dispatch = useDispatch();

  return (
    <ul className="flex flex-wrap gap-2">
      {toGives.map((toGive, index) => <ToDo className="cursor-pointer" key={index} content={`送[${toGive.neighborhood}][${toGive.gift}]`} onClick={() => dispatch(toggleToGive(toGive))} />)}
      {locations.map((todo, index) => <ToDo key={index}>{todo}</ToDo>)}
      {toDoList.map(todo => <ToDo className="cursor-pointer" key={todo} content={todo} onClick={() => dispatch(removeToDo(todo))} />)}
      {(toGives.length === 0 && locations.length === 0 && toDoList.length === 0) && <ToDo className='bg-gradient-to-r from-purple-500 to-pink-500 text-white' content='哇！太優秀了吧，待辦全空' /> }
    </ul>
  );
}