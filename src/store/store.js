import { configureStore } from '@reduxjs/toolkit'
import searchInputSlice from './searchInputSlice'
import locationsSlice from './locationsSlice';

export default configureStore({
  reducer: {
    searchInput: searchInputSlice,
    locations: locationsSlice
  },
})