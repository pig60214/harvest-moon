import { configureStore, combineReducers } from '@reduxjs/toolkit'
import searchInputSlice from './searchInputSlice'
import locationsSlice from './locationsSlice';
import toGivesSlice from './toGivesSlice';
import showGiftListSlice from './showGiftListSlice';
import toDoListSlice from './toDoListSlice';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  searchInput: searchInputSlice,
  locations: locationsSlice,
  toGives: toGivesSlice,
  showGiftList: showGiftListSlice,
  toDoList: toDoListSlice,
});

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