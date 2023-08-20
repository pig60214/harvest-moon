import { createSlice } from '@reduxjs/toolkit';

export const toGetCropsSlice = createSlice({
  name: 'toGetCrops',
  initialState: {
    showToGetCrops: false,
    crops: [],
  },
  reducers: {
    toggleShowToGetCrops: (state) => {
      state.showToGetCrops = !state.showToGetCrops;
    },
    toggleCrop:(state, { payload }) => {
      if (state.crops.find(crop => crop === payload)) {
        state.crops = state.crops.filter(crop => crop !== payload);
        if (state.crops.length === 0) {
          state.showToGetCrops = false;
        }
      } else {
        state.crops = [...state.crops, payload];
      }
    },
  },
})

export const { toggleShowToGetCrops, toggleCrop } = toGetCropsSlice.actions

export default toGetCropsSlice.reducer