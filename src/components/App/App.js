import { useState, useRef } from 'react';

import './App.css';
import Card from '../Card/Card';
import Filter from '../Filter/Filter';


function App() {
  const [show, setShow] = useState(true);
  const [filter, setFilter] = useState('');
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

  const filterHandler = (name) => {
    setFilter(name);
  }

  const boysHandler = () => {
    if (filter !== '') {
      return boys.filter((el) => el.name.includes(filter));
    }
    return boys
  }
    
  return (
     
    <div className='main-container'>

      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'} Names</button>

      <div className={show ? 'show' : 'hide'}>
        
          <Filter fHandler={filterHandler} />
        
        <Card namesList={boysHandler()} color='skyblue' deleteCard={deleteCard}/>
      </div>
    </div>
  );
}

export default App;
