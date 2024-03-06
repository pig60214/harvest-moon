import { createSlice } from '@reduxjs/toolkit';

export const toAnimalsSlice = createSlice({
  name: 'toAnimals',
  initialState: [],
  reducers: {
    toggleToAnimal: (state, { payload }) => {
      const find = (animal) => {
        const stateKey = animal.key ? animal.key : animal.name + animal.locations;
        const payloadKey = payload.key ? payload.key : payload.name + payload.locations;
        return stateKey === payloadKey;
      }
      if(state.find(animal => find(animal))) {
        const next = state.filter(animal => !find(animal));
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