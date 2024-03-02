import React from 'react'
import styles from './card.module.css'

export default function Card({namesList, color, deleteCard}) {
    const cards = namesList.map((card, index) => {
        return (
          <div key={index} className={styles.card} style={{backgroundColor: color}}>
            <div>Name: {card.name}</div>
            <div>Age: {card.age}</div>
            <div>phone: {card.phone}</div>
            <div>Address: {card.address}</div>
            <div>email: {card.email}</div>
            <div className={styles.closeButton} onClick={(event) => deleteCard(event, index)}></div>
          </div>
        );
      });
  return ( 
    <>
      {cards}
    </>
  )
}
