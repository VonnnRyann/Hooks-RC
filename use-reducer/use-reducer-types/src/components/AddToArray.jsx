import {useReducer, useEffect, useRef} from 'react'
import textReducer from '../reducers/textReducer'
import addToArrayReducer from '../reducers/addToArrayReducer'
import ACTION from '../actions/action'


const AddToArray = () => {
  const [text, dispatchText] = useReducer(textReducer, '')
  const [array, dispatchArray] = useReducer(addToArrayReducer,[])

  const myRef = useRef();

  useEffect(() => {
    myRef.current.focus();
  }, [])

  const addToArray = (e) => {
    e.preventDefault()
    dispatchArray({
      type:ACTION.ADD,
      payload: text
    })
    dispatchText({
      type:ACTION.RESET
    })
    myRef.current.focus();
  }
  return (
    <div>
      <form>
        <input 
        type="text" 
        ref={myRef} 
        placeholder='Please Enter some Text'
        onChange={(e) => dispatchText({
          type:ACTION.GRAB,
          payload: e.target.value
        })}
        value={text}
        />
        <button onClick={addToArray}>
          Add to Array
        </button>
      </form>
      {array.map((item,i) => <p key={i}>{item}</p>)}
    </div>
  )
}

export default AddToArray