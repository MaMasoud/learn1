import styles from './Filter.module.css'
import {useState} from 'react'


export default function Filter({fHandler}) {
    const [filter, setFilter] = useState('');

    const filterHandler = (event) => {
        setFilter(event.target.value);
        fHandler(event.target.value);
    }
  return (
      <div className={styles.inputText}>
        <input type='text' placeholder='testing....' value={filter} onChange={filterHandler} />
      </div>
  )
}
