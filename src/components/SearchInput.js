import { useSelector, useDispatch } from 'react-redux';
import { setSearchInput } from '../store/searchInputSlice';
import { gaEventTracker } from '../GA';
import PropTypes from 'prop-types';

export default function SearchInput({ placeholder, storeKey }) {
  const searchInput = useSelector((state) => state.searchInput[storeKey]);
  const dispatch = useDispatch();
  const searchInputEle = document.getElementById('searchInput');

  return (
    <div className='flex'>
      <input
        id='searchInput'
        type="text"
        placeholder={placeholder}
        className='grow border-b-2 border-stone-300 placeholder:text-stone-400 bg-inherit'
        onChange={e => dispatch(setSearchInput({key: storeKey, value: e.target.value}))}
        onFocus={() => gaEventTracker('Search Bar Focus')}
        value={searchInput}
      />
      <button className='w-8 text-stone-400' onClick={() => {dispatch(setSearchInput({key: storeKey, value: ''})); searchInputEle.focus()}}>X</button>
    </div>
  );
}

SearchInput.propTypes = {
  storeKey: PropTypes.string.isRequired,
};