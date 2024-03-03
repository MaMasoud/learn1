import React, { Fragment } from 'react'
import  ReactDOM from 'react-dom'
import styles from './Model.module.css'




const BackDrop = () => {
  return <div className={styles.backDrop}></div>
}

const Overlay = () => {
  return <div className={styles.overlay}></div>
}


export default function Model() {
    return ReactDOM.createPortal(
        <Fragment>
            <BackDrop />
            <Overlay />
        </Fragment>,
        document.getElementById('modal')
    );
}
