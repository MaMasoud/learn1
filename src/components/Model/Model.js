import React, { Fragment } from 'react'
import  ReactDOM from 'react-dom'
import styles from './Model.module.css'




const BackDrop = ({closeModel}) => {
  return <div className={styles.backDrop} onClick={closeModel}></div>
}

const Overlay = () => {
  return <div className={styles.overlay}></div>
}


export default function Model({show, closeModel}) {
    return show && ReactDOM.createPortal(
        <Fragment>
            <BackDrop closeModel={closeModel} />
            <Overlay />
        </Fragment>,
        document.getElementById('modal')
    );
}
