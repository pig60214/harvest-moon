import { createSlice } from '@reduxjs/toolkit';

export const toAnimalsSlice = createSlice({
  name: 'toAnimals',
  initialState: [],
  reducers: {
    toggleToAnimal: (state, { payload }) => {

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

export const { toggleToAnimal } = toAnimalsSlice.actions

export default toAnimalsSlice.reducer