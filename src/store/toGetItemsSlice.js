import { createSlice } from '@reduxjs/toolkit';

export const toGetItemsSlice = createSlice({
  name: 'toGetItems',
  initialState: {
    showToGetItems: false,
    items: [],
  },
  reducers: {
    toggleShowToGetItems: (state) => {
      state.showToGetItems = !state.showToGetItems;
    },
    toggleItem:(state, { payload }) => {
      if (state.items.find(item => item === payload)) {
        state.items = state.items.filter(item => item !== payload);
        if (state.items.length === 0) {
          state.showToGetItems = false;
        }
      } else {
        state.items = [...state.items, payload];
      }
    },
  },
})

export const { toggleShowToGetItems, toggleItem } = toGetItemsSlice.actions

export default toGetItemsSlice.reducer