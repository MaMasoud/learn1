import { useState } from 'react';

import './App.css';
import Card from '../Card/Card';


function App() {

  const [show, setShow] = useState(false);
  const [boys, setBoys] = useState(
    [
      {
        name: 'Masoud',
        age: 21,
        phone: '0123456789', 
        address: 'Alexandria, Egypt',
        email: 'Masoud@gmail.com'
      },
      {
        name: 'Ahmed',
        age: 25,
        phone: '0123456789', 
        address: 'Cairo, Egypt',
        email: 'email.com'
      },
      {
        name: 'Ali',
        age: 30,
        phone: '0123456789', 
        address: 'Giza, Egypt',
        email: 'email.com'
      }
    ]
  );

  const deleteCard = (event, index) => {
    setBoys((prevBoys) => {
      return prevBoys.filter((card, indexCard) => indexCard !== index);
    });
  }
    
  return (
     
    <div className='main-container'>

      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'} Names</button>

      <div className={show ? 'show' : 'hide'}>
        <Card namesList={boys} color='skyblue' deleteCard={deleteCard}/>
      </div>
    </div>
  );
}

export default App;
