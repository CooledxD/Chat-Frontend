import React from "react";
import PropTypes from 'prop-types';

import styles from './inputForm.module.css'

export default function InputForm({ 
  id, 
  name, 
  type, 
  title, 
  value, 
  onChange,
}) {
  return (
    <div className={styles.inputForm__container}>
      <input
        className={styles.inputForm__input}
        id={id}
        value={value}
        onChange={onChange}
        name={name}
        required
        type={type}
      />
      <label
        className={styles.inputForm__label}
        htmlFor={id}
      >
        {title}
      </label>
    </div>
  )
}

InputForm.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}