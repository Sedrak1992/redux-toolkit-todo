import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   value: ["gufi","uhefrqi","qhk jhg"],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addtodo: (state,action) => {
      state.value.push(action.payload) 
    },
    decreTodo: (state,action) => {
        state.value.splice(0,1);
    },
    
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addtodo, decreTodo, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer;