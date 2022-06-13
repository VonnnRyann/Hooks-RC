import React,{useReducer} from 'react'

const countReducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
            return state + 1;

        case 'DECREMENT':
            return state - 1;

        case 'RESET':
            return state = 0;
    
        default:
            return state;
    }
}

const Counter = () => {

    const [count, countDispatch] = useReducer(countReducer, 0)
  return (
    <div>
        <button onClick={() => countDispatch('INCREMENT')}>INCREMENT</button>
        <button onClick={() => countDispatch('DECREMENT')}>DECREMENT</button>
        <button onClick={() => countDispatch('RESET')}>RESET</button>
        <h2>{count}</h2>
    </div>
  )
}

export default Counter