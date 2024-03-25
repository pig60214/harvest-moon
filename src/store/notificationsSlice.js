import { createSlice } from '@reduxjs/toolkit'

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: [],
  reducers: {
    setNotificationShowed: () => {
      return [];
    },
  },
})

export const { setNotificationShowed } = notificationsSlice.actions

export default notificationsSlice.reducer