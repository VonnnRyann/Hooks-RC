import {useReducer} from 'react'
import { ACTIONS } from '../actions/action'
import categoriesReducer  from '../reducers/categoriesReducer'
import  jokeReducer  from '../reducers/jokeReducer'
import  selectReducer  from '../reducers/selectReducer'
import MyContext from './MyContext'

const MyProvider = ({children}) => {
    const URL = 'https://api.chucknorris.io/jokes/';

    const initializer = {
        result: null,
        loading: true,
        error: null
    }

    const [categories,categoriesDispatch] = useReducer(categoriesReducer,initializer)
    const [joke,jokeDispatch] = useReducer(jokeReducer,initializer)
    const [select,selectDispatch] = useReducer(selectReducer,null)

    const handleJokeButton = () => {
        const URL_JOKE = `${URL}random?category=${select}` 

        fetch(URL_JOKE)
        .then((res) => res.json())
        .then((result) => jokeDispatch({
            type: ACTIONS.GET_JOKE,
            payload:{
                ...joke, 
                result,
                loading:false, 
                error: null
            }
        }))
        .catch((error) => jokeDispatch({
            type: ACTIONS.ERROR,
            payload: {
                ...joke,
                loading: false,
                error
            }
        }))
    }

  return (
    <MyContext.Provider value={{
        select,
        selectDispatch,
        URL,
        categories,
        categoriesDispatch,
        joke,
        handleJokeButton
    }}>
        {children}
    </MyContext.Provider>
  )
}

export default MyProvider