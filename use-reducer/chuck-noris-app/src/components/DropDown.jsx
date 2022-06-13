import {useContext,useEffect} from 'react'
import MyContext from '../context/MyContext'
import { ACTIONS } from '../actions/action'

const DropDown = () => {
    const {select, selectDispatch,URL, categories, categoriesDispatch } = useContext(MyContext)

    const categoriesURL = `${URL}categories`
    const {result, loading, error} = categories;

    useEffect(() => {
        fetch(categoriesURL)
        .then((res) => res.json())
        .then((result) => categoriesDispatch({
            type: ACTIONS.GET_CATEGORIES,
            payload: {
                ...categories,
                result,
                loading:false,
            }
        }))
        .catch((error) => categoriesDispatch({
            type: ACTIONS.ERROR,
            payload: {
                ...categories,
                loading:false,
                error
            }
        }))
    }, [categories,categoriesURL,categoriesDispatch])

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>
  return (
    <select 
    defaultValue={select}
    onChange={(e) => selectDispatch({
        type:ACTIONS.CHANGE,
        payload: e.target.value
    })}
    >
        <option value="default">Please Select a Category</option>
        {result.map((category, i) => (
            <option key={i} value={category}>{category}</option>)
         )}
    </select>
  )
}

export default DropDown