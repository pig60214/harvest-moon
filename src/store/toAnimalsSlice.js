import { createSlice } from '@reduxjs/toolkit';

export const toAnimalsSlice = createSlice({
  name: 'toAnimals',
  initialState: [],
  reducers: {
    toggleToAnimal: (state, { payload }) => {
      const find = (animal) => animal.key === payload.key;
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

export const toAnimalsMigration = (state) => {
  const newState = [...state];
  return newState.map(animal => {
    if(!animal.key) {
      animal.key = animal.name + animal.locations;
    }
    if(animal.locations === '區域 1 河流') {
      animal.locations = '區域 1 河流(礦區旁)';
    }
    if(animal.locations === '釣客島海邊') {
      animal.locations = '釣客之島海邊';
    }
    if(animal.locations === '上古之湖') {
      animal.locations = '古老湖';
    }
    if(animal.locations === '區域 3 海邊、礦區') {
      animal.locations = '區域 3 海邊';
    }
    return animal;
  })
};

export const { toggleToAnimal } = toAnimalsSlice.actions

export default toAnimalsSlice.reducer