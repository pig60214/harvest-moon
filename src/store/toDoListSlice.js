import { createSlice } from '@reduxjs/toolkit';

export const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState: [],
  reducers: {
    addToDo: (state, { payload }) => {
      if (state.find(todo => todo === payload)) {
        return;
      }
      return [
        ...state,
        payload,
      ]
    },
    removeToDo: (state, { payload }) => {
      return state.filter(todo => todo !== payload);
    },
  },
})

export const { addToDo, removeToDo } = toDoListSlice.actions

export default toDoListSlice.reducer