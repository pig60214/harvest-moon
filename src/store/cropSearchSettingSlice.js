import { createSlice } from '@reduxjs/toolkit'

export const cropSearchSettingSlice = createSlice({
  name: 'cropSearchSetting',
  initialState: {
    category: ['果樹', '蔬菜', '花卉', '全品種'],
    season: '全季節',
  },
  reducers: {
    toggleCategory: (state, { payload }) => {
      const selectAll = () => state.category = ['果樹', '蔬菜', '花卉', '全品種'];

      if (payload === '全品種') {
        selectAll();
        return;
      }

      if (state.category.find(c => c === payload)) {
        if (state.category.filter(c => c !== payload).length > 0) {
          state.category = state.category.filter(c => c !== payload);
        }
      } else {
        state.category = [...state.category, payload];
      }

      if (state.category.filter(c => c !== '全品種').length === 3) {
        selectAll();
      } else {
        state.category = state.category.filter(c => c !== '全品種');
      }
    },
    setSeason: (state, { payload }) => {
      state.season = payload;
    },
  },
})

export const { toggleCategory, setSeason } = cropSearchSettingSlice.actions

export default cropSearchSettingSlice.reducer