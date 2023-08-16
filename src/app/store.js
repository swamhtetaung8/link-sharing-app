import { configureStore } from '@reduxjs/toolkit'
import userInfoSlice from '../features/userInfo/userInfoSlice'
import { linkSlice } from '../features/links/linksSlice'

export const store = configureStore({
  reducer: {
    userInfo:userInfoSlice,
    links:linkSlice
  },
})