import getUserData from "../api/getUserData.js";
import getChats from '../api/getChats.js'
import getMessages from '../api/getMessages.js'

// socket
import socket from "../../../utils/socket.js";

// store
import { store } from "../../../store/config.js";
import { setUserData } from "../../../store/features/user/userSlice.js";
import { setChats } from "../../../store/features/chat/chatSlice.js";
import { setMessages } from "../../../store/features/chat/chatSlice.js";

export const loader = async () => {
  try {
    // get user data
    if (!localStorage.getItem('username')) {
      const {
        username,
        avatarUrl
      } = await getUserData()

      store.dispatch(setUserData({
        username,
        avatarUrl
      }))

      localStorage.setItem('username', username)
      localStorage.setItem('avatarUrl', avatarUrl)
    }

    // get chat list
    const chats = await getChats()
    store.dispatch(setChats(chats))

    // get messages list
    const messages = await getMessages()
    store.dispatch(setMessages(messages))

    // socket
    socket.auth = { 
      token: store.getState().auth.accessToken 
    }

    socket.connect()

    return null
  } catch (error) {
    if (error.message.split(' ')[0] === 'NetworkError') {
      throw new Error('503')
    }

    return {
      error: error.message,
    }
  }
}