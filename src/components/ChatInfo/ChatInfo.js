import React from "react";
import PropTypes from 'prop-types';

// styles
import styles from './chatInfo.module.css'

export default function ChatInfo({chatName}) {
  return (
    <div>
      <h2 className={styles.chatName}>
        {chatName}
      </h2>
    </div>
  )
}

ChatInfo.propTypes = {
  chatName: PropTypes.string,
}