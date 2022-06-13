import {useEffect, useRef} from 'react';
import useFormHandler from './hooks/useFormHandler';
import './App.css';

const App = () => {
    const inputRef = useRef();

    const form = {
      name: '',
      email: '',
      age: '',
      password: ''
    } //and you can overwrite it here

    const {formData, changeHandler} = useFormHandler(form); // arguments have to be dynamic

    useEffect(() => {
      inputRef.current.focus();
    }, [])


  return (
    <main>
     <h1>Welcome to React</h1>
     <form>
        <input type="text" 
        placeholder='Please enter your name' 
        ref={inputRef} 
        name= 'name' 
        value={formData.name}
        onChange={changeHandler}
        />

        <input type="text" 
        placeholder='Please enter your email'
        name= 'email' 
        value={formData.email}
        onChange={changeHandler}
        />

        <input type="text" 
        placeholder='Please enter your age'
        name= 'age' 
        value={formData.age}
        onChange={changeHandler}
        />

        <input type="password" 
        placeholder='Please enter your age'
        name= 'password' 
        value={formData.password}
        onChange={changeHandler}
        />
        

     </form>
     <p>{formData.name}</p>
     <p>{formData.email}</p>
     <p>{formData.age}</p>
     <p>{formData.password}</p>
    </main>
  );
}

export default App;

