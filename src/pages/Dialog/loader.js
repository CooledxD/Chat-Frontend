// store
import { store } from "../../store/config.js"

export const loader = async ({ params }) => {
  try {
    const chatData = store
      .getState()
      .chat
      .chats
      ?.find((chat) => {
        return chat.id === parseInt(params.chatId)
      })
      
    return chatData ? chatData : null
  } catch (error) {
    throw new Error(error.message)
  }
}