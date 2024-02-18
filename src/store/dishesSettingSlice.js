import { createSlice } from '@reduxjs/toolkit'

export const dishesSettingSlice = createSlice({
  name: 'dishesSetting',
  initialState: {
    category: '全品項',
  },
  reducers: {
    setCategory: (state, { payload }) => {
      state.category = payload;
    },
  },
})

export const { setCategory } = dishesSettingSlice.actions

export default dishesSettingSlice.reducer