import { useDispatch, useSelector } from "react-redux";
import { removeToDo } from "./store/toDoListSlice";

function ToDo({ content, children }) {
  return (
    <li className="bg-stone-400 rounded-lg p-4">
      {content}
      {children}
    </li>
  );
}

export default function ToDoList() {
  const toGives = useSelector((state) => state.toGives).map(toGive => `送[${toGive.neighborhood}][${toGive.gift}]`);
  const locations = useSelector((state) => state.locations).filter(loc => loc.highlight).map(loc => `去[${loc.name}][${loc.goToShopping ? '買東西' : ''}${loc.goToGiveTheGift ? '送禮物' : ''}]`);
  const toDoList = useSelector((state) => state.toDoList);
  const dispatch = useDispatch();

  return (
    <ul className="flex flex-wrap gap-2">
      {toGives.map(todo => <ToDo key={todo} content={todo} />)}
      {locations.map(todo => <ToDo key={todo} content={todo} />)}
      {toDoList.map(todo => <ToDo key={todo} content={todo}><button className='w-8' onClick={() => dispatch(removeToDo(todo))}>X</button></ToDo>)}
    </ul>
  );
}