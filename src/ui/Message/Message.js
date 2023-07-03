import React from "react";
import PropTypes from 'prop-types';

// styles
import styles from './message.module.css'

export default function Message({
  error,
  success
}) {
  return (
    (error || success) ?
      <p
        className={`
          ${styles.message} 
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

Message.propTypes = {
  error: PropTypes.string,
  success: PropTypes.string,
}