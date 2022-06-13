import {useContext} from 'react'
import MyContext from '../context/MyContext'

const Joke = () => {
    const {joke} = useContext(MyContext)
    const {result, loading, error} = joke;
    
    if (loading) return (<div className='joke'>
        <p>Select a category and then click on the button</p>
    </div>)
    if (error) return <p>{error.message}</p>


  return (
    <div className='joke'>
        <img src={result.icon_url} alt="icon" /> 
        <p>{result.value}</p>
    </div>
  )
}

export default Joke