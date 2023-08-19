import { configureStore } from '@reduxjs/toolkit'
import searchInputSlice from './searchInputSlice'
import locationsSlice from './locationsSlice';
import toGivesSlice from './toGivesSlice';
import showGiftListSlice from './showGiftListSlice';
import toDoListSlice from './toDoListSlice';

export default configureStore({
  reducer: {
    searchInput: searchInputSlice,
    locations: locationsSlice,
    toGives: toGivesSlice,
    showGiftList: showGiftListSlice,
    toDoList: toDoListSlice,
  },
})