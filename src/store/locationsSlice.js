import { createSlice } from '@reduxjs/toolkit';
import locationRawData, { addGetter } from '../locationRawData';

export const locationsSlice = createSlice({
  name: 'locations',
  initialState: locationRawData,
  reducers: {
    toggleLocation:(state, { payload }) => {
      return state.map((location, index) => {
        if(index !== payload) {
          return location;
        }

        const { highlight } = location;

        const next = {
          ...location,
          highlight: !highlight,
        };

        if(!next.highlight) {
          next.goToShopping = false;
          next.goToGiveTheGift = false;
        }
        addGetter(next);

        return next
      })
    },
    toggleGoToShopping: (state, { payload }) => {
      return state.map((location, index) => {
        if(index !== payload) {
          return location;
        }

        const { goToShopping } = location;

        const next = {
          ...location,
          goToShopping: !goToShopping,
        };

        if(next.goToShopping) {
          next.highlight = true;
        }
        if(!next.goToGiveTheGift && !next.goToShopping) {
          next.highlight = false;
        }
        addGetter(next);

        return next
      })
    },
    toggleGoToGiveTheGift: (state, { payload }) => {
      return state.map((location, index) => {
        if(index !== payload) {
          return location;
        }

        const { goToGiveTheGift } = location;

        const next = {
          ...location,
          goToGiveTheGift: !goToGiveTheGift,
        };

        if(next.goToGiveTheGift) {
          next.highlight = true;
        }
        if(!next.goToGiveTheGift && !next.goToShopping) {
          next.highlight = false;
        }
        addGetter(next);

        return next
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleLocation, toggleGoToShopping, toggleGoToGiveTheGift } = locationsSlice.actions

export default locationsSlice.reducer