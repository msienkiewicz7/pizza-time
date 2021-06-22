import dayjs from 'dayjs';
import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import PizzaForm from './components/PizzaForm/PizzaForm';

function App() {
  return (
    <div className="App">
      <Header/>
      <PizzaForm initialEatDate={dayjs()}/>
    </div>
  );
}

export default App;
