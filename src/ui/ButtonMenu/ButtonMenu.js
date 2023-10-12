import React from "react";
import PropTypes from 'prop-types';

// styles
import styles from './buttonMenu.module.css'

export default function ButtonMenu({ onClick, type }) {
  return (
    <div 
      className={styles.wrap} 
      onClick={onClick}
    >
      <button
        className={`${styles.button} ${type === 'kebab' ? styles.kebab  : undefined}`}
      />
    </div>
  )
}

ButtonMenu.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
}