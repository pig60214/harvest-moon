import { createSlice } from '@reduxjs/toolkit'

export const showGiftListSlice = createSlice({
  name: 'showGiftList',
  initialState: {
    value: false,
  },
  reducers: {
    hideGiftList: (state) => {
      state.value = false;
    },
    toggleShowGiftList: (state) => {
      state.value = !state.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleShowGiftList, hideGiftList } = showGiftListSlice.actions

export default showGiftListSlice.reducer