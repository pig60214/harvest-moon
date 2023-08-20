import { createSlice } from '@reduxjs/toolkit'

export const cropSearchSettingSlice = createSlice({
  name: 'cropSearchSetting',
  initialState: {
    category: ['果樹', '蔬菜', '花卉'],
    season: '全季節',
  },
  reducers: {
    toggleCategory: (state, { payload }) => {
      if (state.category.find(c => c === payload)) {
        if (state.category.filter(c => c !== payload).length === 0) return state;
        return {
          ...state,
          category: state.category.filter(c => c !== payload),
        }
      }

      return {
        ...state,
        category: [
          ...state.category,
          payload,
        ]
      }
    },
    setSeason: (state, { payload }) => {
      state.season = payload;
    },
  },
})

export const { toggleCategory, setSeason } = cropSearchSettingSlice.actions

export default cropSearchSettingSlice.reducer