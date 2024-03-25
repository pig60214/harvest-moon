import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistReducer, persistStore, createMigrate } from 'redux-persist';
import thunk from 'redux-thunk';
import searchInputSlice, { searchInputMigration } from './searchInputSlice'
import locationsSlice from './locationsSlice';
import toGivesSlice from './toGivesSlice';
import showGiftListSlice from './showGiftListSlice';
import toDoListSlice from './toDoListSlice';
import cropSearchSettingSlice from './cropSearchSettingSlice';
import toGetCropsSlice from './toGetCropsSlice';
import toGetItemsSlice from './toGetItemsSlice';
import toAnimalsSlice, { toAnimalsMigration } from './toAnimalsSlice';
import panelSettingSlice from './panelSettingSlice';
import notificationsSlice from './notificationsSlice';

const appReducer = combineReducers({
  searchInput: searchInputSlice,
  locations: locationsSlice,
  toGives: toGivesSlice,
  showGiftList: showGiftListSlice,
  toDoList: toDoListSlice,
  cropSearchSetting: cropSearchSettingSlice,
  toGetCrops: toGetCropsSlice,
  toGetItems: toGetItemsSlice,
  toAnimals: toAnimalsSlice,
  panelSetting: panelSettingSlice,
  notifications: notificationsSlice,
});

const rootReducer = (state, action) => {
  if (process.env.REACT_APP_STORE_VERSION !== localStorage.getItem('sv')) {
    storage.removeItem('persist:root');
    localStorage.setItem('sv', process.env.REACT_APP_STORE_VERSION);
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
}

const migrations = {
  0: (state) => {
    return {
      ...state,
      panelSetting: {
        ...state.panelSetting,
        animal: {
          category: '野生動物',
          fishCategory: '全種類',
          season: '全季節',
          location: '全區域',
        }
      },
      toAnimals: toAnimalsMigration(state.toAnimals)
    }
  },
  1: (state) => {
    return {
      ...state,
      searchInput: searchInputMigration(state.searchInput),
      versionNotification: '[動物 > 水中生物]補齊資料囉，歡迎去看看',
    }
  },
  2: (state) => {
    const newNotification = { title: '尋人啟事', message: '尋找填過右下角意見回饋的那位大恩人，我表單忘記請您留聯絡資訊了，再幫我填一次，讓我找到你，拜託🙏', duration: 10000 };
    if (state.versionNotification !== '') {
      return {
        ...state,
        notifications: [ { title: '版本更新', message: state.versionNotification }, newNotification ],
      }
    }
    return {
      ...state,
      notifications: [ newNotification ],
    };
  }
};

const persistConfig = {
  key: 'root',
  storage,
  version: 2,
  migrate: createMigrate(migrations, { debug: false}),
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export const persistor = persistStore(store);