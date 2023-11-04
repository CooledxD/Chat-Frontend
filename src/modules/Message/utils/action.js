import socket from "../../../utils/socket.js"

export const action = async ({ request }) => {
  try {
    const formData = await request.formData()

    socket.emit('userMessage', {
      text: formData.get('message'),
      chatId: formData.get('chatId')
    })
    
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