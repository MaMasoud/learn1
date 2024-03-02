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
        id: 1,
        name: 'masoud',
        age: 21,
        phone: '0123456789', 
        address: 'Alexandria, Egypt',
        email: 'Masoud@gmail.com',
        type:'boy'
      },
      {
        id: 2,
        name: 'ahmed',
        age: 25,
        phone: '0123456789', 
        address: 'Cairo, Egypt',
        email: 'email.com',
        type:'boy'
      },
      {
        id: 3,
        name: 'ali',
        age: 30,
        phone: '0123456789', 
        address: 'Giza, Egypt',
        email: 'email.com',
        type:'boy'
      },
      {
        id: 4,
        name: 'nagwa',
        age: 20,
        phone: '0123456789', 
        address: 'Mansoura, Egypt',
        email: 'email.com',
        type: 'girl'
      } 
    ]
  );

  const deleteCard = (event, id) => {
    setBoys((prevBoys) => {
      return prevBoys.filter((card) => card.id !== id);
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
        
        <Card namesList={boysHandler()}s deleteCard={deleteCard}/>
      </div>
    </div>
  );
}

export default App;
