import { createSlice } from '@reduxjs/toolkit';
import { hideGiftList } from './showGiftListSlice';

export const toGivesSlice = createSlice({
  name: 'toGives',
  initialState: [],
  reducers: {
    toggleToGive: (state, { payload }) => {
      const { neighborhood, level, gift } = payload;

      if(state.find(toGive => toGive.neighborhood === neighborhood && toGive.gift === gift)) {
        return state.filter(toGive => !(toGive.neighborhood === neighborhood && toGive.gift === gift));
      } else {
        const start = state.findIndex(toGive => toGive.neighborhood === neighborhood);
        if (start === -1) {
          return [
            ...state,
            {neighborhood, level, gift},
          ];
        }
        const end = state.findLastIndex(toGive => toGive.neighborhood === neighborhood);
        const before = state.slice(0, start);
        const toSort = state.slice(start, end+1);
        const after = state.slice(end+1, state.length);

        toSort.push({neighborhood, level, gift});
        toSort.sort((x, y) => {
          if(x.level > y.level) return 1;
          if(x.level === y.level) return 0;
          return -1;
        });

        const next = before.concat(toSort).concat(after);
        return next;
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