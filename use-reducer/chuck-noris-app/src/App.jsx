import React from 'react';
import './App.css';
import DropDown from './components/DropDown';
import Header from './components/Header';
import Joke from './components/Joke';
import Button from './components/Button';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <main>
      <Header />
      <Joke />
      <section>
      <DropDown />
      <Button />
      </section>
      <br />
      <br />
      <br />
    </main>
      <Footer />
    </>
  );
}

export default App;

