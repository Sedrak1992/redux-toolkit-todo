import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   value: ["gufi","uhefrqi","qhk jhg"],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addtodo: (state) => {
      state.value.push(["55"]) 
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addtodo, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer;