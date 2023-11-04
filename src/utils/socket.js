import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_HOST, {
  autoConnect: false
})

socket.on("connect_error", (err) => {
  if (err.message === 'Access token not valid') {
    throw new Error('Access token not valid')
  }
})

export default socket