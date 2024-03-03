import React from 'react'
// import styles from './card.module.css'
import Card from '../Card/Card';

export default function CardList({namesList, deleteCard}) {
    const cards = namesList.map(({id, ...otherProps}) => <Card key={id} id={id} {...otherProps} deleteCard= {deleteCard}/>);
  return ( 
    <>
      {cards}
    </>
  )
}
