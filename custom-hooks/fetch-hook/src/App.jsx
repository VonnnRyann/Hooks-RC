import {useState} from 'react';
import React from 'react';
import Users from './components/Users';
import Books from './components/Books';
import Text from './components/Text';
import './App.css';


const App = () => {
    

    const [button, setButton] = useState({
      books: false,
      texts: false,
      users: false

    })

    return (
      <main>
        <section className='buttons'>
          <button
            onClick={() =>
              setButton({ 
                books: !button.books, 
                texts: false, 
                users: false 
              })
            }>
            Books
          </button>
          <button
            onClick={() =>
              setButton({
                books: false,
                texts: !button.texts,
                users: false,
              })
            }>
            Texts
          </button>
          <button
            onClick={() =>
              setButton({ 
                books: false, 
                texts: false, 
                users: !button.users 
              })
            }>
            Users
          </button>
        </section>
        <section className='container'>
          {button.books && <Books />}
          {button.texts && <Text />}
          {button.users && <Users />}
        </section>
      </main>
    );
}

export default App;

