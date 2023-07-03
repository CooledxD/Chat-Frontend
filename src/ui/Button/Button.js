import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

// styles
import styles from './button.module.css'

export default function Button({
  to,
  children,
  handler,
  className,
  type,
  bgColor = true,
  disabled
}) {
  return (
    to ?
      <Link
        to={to}
        className={`
          ${styles.btn} 
          ${className} 
          ${bgColor && styles.btn_bgColor}
        `}
      >
        {children}
      </Link> :

      <button
        className={`
          ${styles.btn} 
          ${className} 
          ${bgColor && styles.btn_bgColor} 
          ${disabled && styles.btn_loading}
        `}
        onClick={handler}
        type={type}
        disabled={disabled}
      >
        {children}
      </button>
  )
}

Button.propTypes = {
  to: PropTypes.string,
  handler: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  bgColor: PropTypes.bool,
  children: PropTypes.elementType,
  disabled: PropTypes.bool
}