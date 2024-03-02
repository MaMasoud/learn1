import React from 'react'
import styles from './card.module.css'

export default function Card({namesList, deleteCard}) {
    const cards = namesList.map((card) => {
        return (
          <div key={card.id} className={styles.card} style={{backgroundColor: card.type === 'boy' ? 'skyblue' : 'pink'}}>
            <div>Name: {card.name}</div>
            <div>Age: {card.age}</div>
            <div>phone: {card.phone}</div>
            <div>Address: {card.address}</div>
            <div>email: {card.email}</div>
            <div className={styles.closeButton} onClick={(event) => deleteCard(event, card.id)}></div>
          </div>
        );
      });
  return ( 
    <>
      {cards}
    </>
  )
}
