import { configureStore } from '@reduxjs/toolkit'
import slice from './pages/slice'

export const store = configureStore({
  reducer: {
    login:slice
  },
})

