import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// components
import MessageCard from "../MessageCard/MessageCard.js";

// styles
import styles from './messageList.module.css'

export default function MesssageList() {
  const chatId = parseInt(useParams().chatId)
  const messages = useSelector(state => state.chat.messages)
    ?.filter((message) => {
      return (chatId === message.recipient_id) || (chatId === message.creator_id)
    })

  return (
    <ul className={styles.wrapper}>
      {
        messages?.map((message) => {
          return (
            <li key={message.id} className={`${(message.creator_id === chatId) ? '' : styles.user}`}>
              <MessageCard
                // title={message.creator_id}
                text={message.text}
                time={message.createdAt}
                user={(message.creator_id === chatId) ? false : true}
              />
            </li>
          )
        })
      }
    </ul>
  )
}