import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment, incrementPro } from './redux/reducer'

export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementPro())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}