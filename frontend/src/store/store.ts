import {configureStore} from '@reduxjs/toolkit'
import {apiSlice} from '../api/apiSlice'
import tasksSlice from './slices/tasks'

export const reducers = {
  tasks: tasksSlice.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
}

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
