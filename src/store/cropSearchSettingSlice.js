import { createSlice } from '@reduxjs/toolkit'
import lang from 'rawData/resourse';

export const cropSearchSettingSlice = createSlice({
  name: 'cropSearchSetting',
  initialState: {
    category: lang('全品種'),
    season: lang('全季節'),
  },
  reducers: {
    // toggleCategory: (state, { payload }) => {
    //   if (payload === '全品種') {
    //     state.category = selectAll;
    //     return;
    //   }

    //   if (state.category.find(c => c === payload)) {
    //     if (state.category.filter(c => c !== payload).length > 0) {
    //       state.category = state.category.filter(c => c !== payload);
    //     }
    //   } else {
    //     state.category = [...state.category, payload];
    //   }

    //   if (state.category.filter(c => c !== '全品種').length === selectAll.length - 1) {
    //     state.category = selectAll;
    //   } else {
    //     state.category = state.category.filter(c => c !== '全品種');
    //   }
    // },
    setCategory: (state, { payload }) => {
      // state.category =  ['果樹', '蔬菜', '花卉', '農作物', '全品種'];
      state.category = payload;
    },
    setSeason: (state, { payload }) => {
      state.season = payload;
    },
  },
})

export const { setSeason, setCategory } = cropSearchSettingSlice.actions

export default cropSearchSettingSlice.reducer