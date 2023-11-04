import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// components
import ChatCard from '../ChatCard/ChatCard.js'

// styles
import styles from './chatList.module.css'

export default function ChatList() {
  const navigate = useNavigate()
  const { chats } = useSelector(state => state.chat)

  return (
    <ul className={styles.list}>
      {
        chats?.map((chat) => {
          return (
            <li 
              key={chat.id} 
              onClick={() => navigate(`${chat.id}`)}
            >
              <ChatCard data={chat} />
            </li>
          )
        })
      }
    </ul>
  )
}