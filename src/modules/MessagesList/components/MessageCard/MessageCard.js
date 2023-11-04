import React from "react";
import PropTypes from 'prop-types';

// styles
import styles from './messageCard.module.css'

export default function MessageCard({
  title, 
  text, 
  time,
  user=true
}) {
  return (
    <article
      className={`
          ${styles.messageCard} 
          ${user ? styles.user : styles.interlocutor}
        `}
    >
      <h3 className={styles.title}>
        {title}
      </h3>
      <p className={styles.text}>
        {text}
      </p>
      <span className={styles.time}>
        {time}
      </span>
    </article>
  )
}

MessageCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  time: PropTypes.string,
  user: PropTypes.bool,
}