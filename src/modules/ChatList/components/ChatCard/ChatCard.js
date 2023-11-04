import React from "react";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types'

// ui
import Avatar from "../../../../ui/Avatar/Avatar.js";

// styles
import styles from './chatCard.module.css'

export default function ChatCard({ data }) {
  const { theme } = useSelector(state => state.theme)
  const { messages } = useSelector(state => state.chat)
  const lastMessageIndex = messages?.findLastIndex((message) => {
    return (data.id === message.recipient_id) || (data.id === message.creator_id)
  })

  return (
    <article className={`${styles.card} ${theme && styles.text_white}`}>
      <Avatar src={data.avatarUrl}/>
      <div className={styles.card__inner}>
        <h2 
          className={`
            ${styles.title} 
            ${styles.overflow_hidden}
          `}
        >{data.username}</h2>
        <span 
          className={styles.overflow_hidden}
        >{messages?.[lastMessageIndex]?.text}</span>
      </div>
      <div className={styles.card__inner}>
        <span className={styles.time}>{messages?.[lastMessageIndex]?.createdAt}</span>
        <span className={styles.notification}>555</span>
      </div>
    </article>
  )
}

ChatCard.propTypes = {
  data: PropTypes.object,
}