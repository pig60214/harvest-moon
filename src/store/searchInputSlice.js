import { createSlice } from '@reduxjs/toolkit'

export const searchInputSlice = createSlice({
  name: 'searchInput',
  initialState: {
    value: '',
  },
  reducers: {
    setSearchInput: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSearchInput } = searchInputSlice.actions

export default searchInputSlice.reducer