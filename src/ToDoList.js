import { useDispatch, useSelector } from "react-redux";
import { removeToDo } from "./store/toDoListSlice";
import { toggleLocation, toggleGoToShopping, toggleGoToGiveTheGift } from './store/locationsSlice';
import { toggleToGive } from "./store/toGivesSlice";
import { toggleCrop } from "./store/toGetCropsSlice";
import { toggleItem } from "store/toGetItemsSlice";
import itemRawData from 'itemRawData';

function ToDo({ content, children, className, onClick }) {
  return (
    <li className={`bg-stone-300 text-stone-600 rounded-lg px-4 py-2 cursor-pointer flex ${className}`} onClick={onClick}>
      <div className="m-auto">
        {content}
        {children}
      </div>
    </li>
  );
}

function getGiftImage(name) {
  let imgSource;
  try {
    imgSource = require(`assets/images/crops/${name}.jpg`);
  } catch (error) {
    try {
      imgSource = require(`assets/images/dishes/${name}.jpg`);
    } catch (error) {
      try {
        imgSource = require(`assets/images/animalProduct/${name}.jpg`);
      } catch (error) {
        
      }
    }
  }
  const giftImage = imgSource ? <img className='w-10 inline rounded-full border border-stone-900' src={imgSource} alt={name} /> : <></>;
  return giftImage;
}

export default function ToDoList() {
  const hightlighText = 'font-bold text-stone-800';
  const toGives = useSelector((state) => state.toGives).map((toGive, index) => {
    const giftImage = getGiftImage(toGive.gift);
    return (
      <ToDo key={index}
        onClick={() => dispatch(toggleToGive(toGive))}>
        將 <span className={hightlighText}>{toGive.gift} </span>{giftImage} 送給 <span className={hightlighText}>{toGive.neighborhood}</span>
        <img className='w-10 inline rounded-full ml-2 border border-stone-900' src={require(`assets/images/neighbors/${toGive.neighborhood}-sm.jpg`)} alt={toGive.neighborhood} />
      </ToDo>
    );
  });
  const locations = useSelector((state) => state.locations).map(loc => {
    const { name, shopping, toGive } = loc;

    if (!shopping && !toGive) {
      return <div className="cursor-pointer" onClick={() => dispatch(toggleLocation(name))}>去{name}</div>
    }

    const shoppingDiv = <span className={`bg-sky-400 rounded p-1 cursor-pointer ${hightlighText}`} onClick={() => dispatch(toggleGoToShopping(name))}>買東西/找NPC</span>;
    const toGiveDiv = <span className={`bg-pink-400 rounded p-1 cursor-pointer ${hightlighText}`} onClick={() => dispatch(toggleGoToGiveTheGift(name))}>送禮物</span>;
    if (shopping && toGive) {
      return <div className="cursor-pointer" onClick={() => dispatch(toggleLocation(name))}>去{name}{shoppingDiv}{toGiveDiv}</div>;
    }

    return <div className="cursor-pointer" onClick={() => dispatch(toggleLocation(name))}>去{name}{shopping ? shoppingDiv : toGiveDiv}</div>
  });
  const toGetCrops = useSelector(state => state.toGetCrops).crops.map(todo => {
    const image = <img className='w-10 inline rounded-full ml-2 border border-stone-900' src={require(`assets/images/crops/${todo}.jpg`)} alt={todo}/>;
    const content = <>需要<span className={hightlighText}>{todo}</span>{image}</>;
    return <ToDo key={todo} onClick={() => dispatch(toggleCrop(todo))}>{content}</ToDo>;
  });
  const toGetItems = useSelector(state => state.toGetItems).items.map(todo => {
    const content = <>透過 <span className={hightlighText}>{itemRawData[todo]}</span> 取得 <span className={`${hightlighText} underline decoration-2`}>{todo}</span></>;
    return <ToDo key={todo} onClick={() => dispatch(toggleItem(todo))}>{content}</ToDo>;
  });
  const toDoList = useSelector((state) => state.toDoList);
  const nothingToDo = toGives.length === 0 && locations.length === 0 && toDoList.length === 0 && toGetCrops.length === 0 && toGetItems.length === 0;
  const dispatch = useDispatch();

  return (
    <ul className="flex flex-wrap gap-2">
      {toGives}
      {locations.map((todo, index) => <ToDo className='cursor-default' key={index}>{todo}</ToDo>)}
      {toGetCrops}
      {toGetItems}
      {toDoList.map(todo => <ToDo key={todo} content={todo} onClick={() => dispatch(removeToDo(todo))} />)}
      {nothingToDo && <ToDo className='bg-gradient-to-r from-purple-500 to-pink-500 text-white' content='哇！太優秀了吧，待辦全空' /> }
    </ul>
  );
}