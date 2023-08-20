import { createSlice } from '@reduxjs/toolkit';

export const locationsSlice = createSlice({
  name: 'locations',
  initialState: [],
  reducers: {
    toggleLocation:(state, { payload }) => {
      if (state.find(loc => loc.name === payload)) {
        return state.filter(loc => loc.name !== payload);
      }

      return [
        ...state,
        { name: payload, shopping: false, toGive: false },
      ];
    },
    toggleGoToShopping: (state, { payload }) => {
      const togo = state.filter(loc => loc.name === payload)[0];
      if (togo) {
        const { shopping, toGive } = togo;
        if (shopping && !toGive) {
          return state.filter(loc => loc.name !== payload);
        }
        return state.map(loc => {
          if(loc.name === payload) {
            return {
              ...loc,
              shopping: !shopping,
            }
          }

          return loc;
        })
      }

      return [
        ...state,
        { name: payload, shopping: true, toGive: false },
      ]
    },
    toggleGoToGiveTheGift: (state, { payload }) => {
      const togo = state.filter(loc => loc.name === payload)[0];
      if (togo) {
        const { shopping, toGive } = togo;
        if (!shopping && toGive) {
          return state.filter(loc => loc.name !== payload);
        }
        return state.map(loc => {
          if(loc.name === payload) {
            return {
              ...loc,
              toGive: !toGive,
            }
          }

          return loc;
        })
      }

      return [
        ...state,
        { name: payload, shopping: false, toGive: true },
      ];
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleLocation, toggleGoToShopping, toggleGoToGiveTheGift } = locationsSlice.actions

export default locationsSlice.reducer