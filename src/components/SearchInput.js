import { useSelector, useDispatch } from 'react-redux';
import { setSearchInput } from '../store/searchInputSlice';
import { gaEventTracker } from '../GA';

export default function SearchInput({ placeholder }) {
  const searchInput = useSelector((state) => state.searchInput.value);
  const dispatch = useDispatch();
  const searchInputEle = document.getElementById('searchInput');

  return (
    <div className='flex'>
      <input
        id='searchInput'
        type="text"
        placeholder={placeholder}
        className='grow border-b-2 border-stone-300 placeholder:text-stone-400 bg-inherit'
        onChange={e => dispatch(setSearchInput(e.target.value))}
        onFocus={() => gaEventTracker('Search Bar Focus')}
        value={searchInput}
      />
      <button className='w-8 text-stone-400' onClick={() => {dispatch(setSearchInput('')); searchInputEle.focus()}}>X</button>
    </div>
  );
}