import { createSlice } from '@reduxjs/toolkit'

export const searchInputSlice = createSlice({
  name: 'searchInput',
  initialState: {
    neighbor: '',
    item: '',
    crop: '',
    fish: '',
    cooking: '',
  },
  reducers: {
    setSearchInput: (state, { payload }) => {
      const { key, value } = payload;
      state[key] = value;
    },
  },
})

export const searchInputMigration = (state) => {
  const newState = {
    neighbor: state.value,
    item: state.value,
    crop: state.value,
    fish: '',
  };
  return newState;
}

// Action creators are generated for each case reducer function
export const { setSearchInput } = searchInputSlice.actions

export default searchInputSlice.reducer