import { createSlice } from '@reduxjs/toolkit';

export const toWildAnimalsSlice = createSlice({
  name: 'toWildAnimals',
  initialState: [],
  reducers: {
    toggleToWildAnimal: (state, { payload }) => {

      if(state.find(animal => animal.name === payload.name)) {
        const next = state.filter(animal => animal.name !== payload.name);
        return next;
      } else {
        return [
          ...state,
          payload,
        ];
      }
    }
  },
})

export const { toggleToWildAnimal } = toWildAnimalsSlice.actions

export default toWildAnimalsSlice.reducer