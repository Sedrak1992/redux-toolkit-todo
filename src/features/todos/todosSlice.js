import { createSlice } from '@reduxjs/toolkit'

const randomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;

const initialState =  [
    { name: "sport live", color: randomColor(),selected:false },
    { name: "2", color: randomColor() ,selected:false},
    { name: "2", color: randomColor() ,selected:false},
   ]

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addtodo: (state,action) => {
      state.push({name: action.payload, color: randomColor() ,selected:false}) 
    },
    decreTodo: (state,action) => {
        state.splice(action.payload, 1);
    },
    toglggel: (state,action) => {
        state[action.payload].selected = !state[action.payload].selected 
    }
  },
})

// Action creators are generated for each case reducer functio
export const { addtodo, decreTodo,toglggel } = counterSlice.actions

export default counterSlice.reducer;