import React from "react";
import PropTypes from 'prop-types';

// styles
import styles from './search.module.css'

export default function Search() {
  return (
    <form className={styles.form}>
      <input 
        className={styles.input} 
        type="search" 
        placeholder="search" 
      />
      <button 
        className={styles.button} 
        type="submit"
      ></button>
    </form>
  )
}

Search.propTypes = {
  onClick: PropTypes.func,
}