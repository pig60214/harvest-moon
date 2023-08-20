import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import searchInputSlice from './searchInputSlice'
import locationsSlice from './locationsSlice';
import toGivesSlice from './toGivesSlice';
import showGiftListSlice from './showGiftListSlice';
import toDoListSlice from './toDoListSlice';
import cropSearchSettingSlice from './cropSearchSettingSlice';
import toGetCropsSlice from './toGetCropsSlice';

const appReducer = combineReducers({
  searchInput: searchInputSlice,
  locations: locationsSlice,
  toGives: toGivesSlice,
  showGiftList: showGiftListSlice,
  toDoList: toDoListSlice,
  cropSearchSetting: cropSearchSettingSlice,
  toGetCrops: toGetCropsSlice
});

const rootReducer = (state, action) => {
  if (process.env.REACT_APP_STORE_VERSION !== localStorage.getItem('sv')) {
    storage.removeItem('persist:root');
    localStorage.setItem('sv', process.env.REACT_APP_STORE_VERSION);
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
}

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export const persistor = persistStore(store);