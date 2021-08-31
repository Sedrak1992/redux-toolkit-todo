import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/todos/todosSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
