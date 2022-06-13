import React from 'react';
import useNavigator from './hooks/useNavigator';
import './App.css';

const App = () => {

    const location = useNavigator()

  return (
    <main>
     <h1>Welcome to React</h1>
     <p>{location.lat}</p>
     <p>{location.lon}</p>
    </main>
  );
}

export default App;

