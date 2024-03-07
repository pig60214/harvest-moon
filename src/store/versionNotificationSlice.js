import { createSlice } from '@reduxjs/toolkit'

export const versionNotificationSlice = createSlice({
  name: 'versionNotification',
  initialState: '',
  reducers: {
    setNotificationShowed: () => {
      return '';
    },
  },
})

export const { setNotificationShowed } = versionNotificationSlice.actions

export default versionNotificationSlice.reducer