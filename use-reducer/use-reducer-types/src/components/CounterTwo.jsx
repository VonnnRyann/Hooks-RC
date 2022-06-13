import {useReducer} from 'react'
import countReducer from '../reducers/countReducer'
import ACTION  from '../actions/action'

const CounterTwo = () => {

    
    const [count, countDispatch] = useReducer(countReducer, 0)

   


  return (
    <div>
        <button onClick={() => countDispatch({type: ACTION.INCREMENT})}>INCREMENT</button>
        <button onClick={() => countDispatch({type: ACTION.DECREMENT})}>DECREMENT</button>
        <button onClick={() => countDispatch({type: ACTION.RESET})}>RESET</button>
        <h2>{count}</h2>
    </div>
  )
}

export default CounterTwo