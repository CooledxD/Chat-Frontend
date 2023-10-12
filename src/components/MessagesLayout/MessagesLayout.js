import React from "react";
import PropTypes from 'prop-types';

// styles
import styles from './messagesLayout.module.css'

export default function MessagesLayout({children}) {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  )
}

MessagesLayout.propTypes = {
  children: PropTypes.node,
}