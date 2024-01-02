
import { configureStore } from '@reduxjs/toolkit'
import binarySearchSlice from './redux/binarySearchSlice'
export const store = configureStore({
  reducer: {
    binary:binarySearchSlice
  },
})
