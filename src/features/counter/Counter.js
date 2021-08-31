import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addtodo, decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  console.log(count)

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(addtodo())}
        >
          Increment
        </button>
        <div style={{border:"1px red solid"}}>
        {count.map((item, i) => (
          <div>{item}</div>
        ))}
        
        </div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}