import { createSlice } from '@reduxjs/toolkit'

export const panelSettingSlice = createSlice({
  name: 'panelSetting',
  initialState: {
    cooking: {
      category: '全品項',
    },
    item: {
      category: '全品項',
    }
  },
  reducers: {
    setCookingCategory: (state, { payload }) => {
      state.cooking.category = payload;
    },
    setItemCategory: (state, { payload }) => {
      state.item.category = payload;
    },
  },
})

export const { setCookingCategory, setItemCategory } = panelSettingSlice.actions

export default panelSettingSlice.reducer