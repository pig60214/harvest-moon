import { createSlice } from '@reduxjs/toolkit';
import { hideGiftList } from './showGiftListSlice';

export const toGivesSlice = createSlice({
  name: 'toGives',
  initialState: [],
  reducers: {
    toggleToGive: (state, { payload }) => {
      const { neighborhood, level, gift } = payload;

      if(state.find(toGive => toGive.neighborhood === neighborhood && toGive.gift === gift)) {
        const next = state.filter(toGive => toGive.neighborhood !== neighborhood);
        return next;
      } else if (state.find(toGive => toGive.neighborhood === neighborhood)) {
        const next = state.filter(toGive => toGive.neighborhood !== neighborhood);
        return [
          ...next,
          {neighborhood, level, gift},
        ];

      } else {
        return [
          ...state,
          {neighborhood, level, gift},
        ];
      }
    }
  },
})

const { toggleToGive: toggleToGiveAction } = toGivesSlice.actions

export const toggleToGive = (payload) => {
  return (dispatch, getState) => {
    dispatch(toggleToGiveAction(payload));

    const toGives = getState().toGives;

    if(toGives.length === 0) {
      dispatch(hideGiftList());
    }

  }
}

export default toGivesSlice.reducer