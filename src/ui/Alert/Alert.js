import React from "react";
import PropTypes from 'prop-types';

// styles
import styles from './alert.module.css'

export default function Alert({
  error,
  success
}) {
  return (
    (error || success) ?
      <p
        className={`
          ${styles.alert} 
          ${error ?
            styles.isError :
            styles.isSuccess}
        `}
      >
        {error}
        {success}
      </p> : undefined
  )
}

Alert.propTypes = {
  error: PropTypes.string,
  success: PropTypes.string,
}