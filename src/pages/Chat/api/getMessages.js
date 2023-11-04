import ky from "../../../utils/ky/ky.js";

export default async function getMessages() {
  try {
    const messageArr = await ky.get('chat/messages').json()

    return messageArr
  } catch (error) {
    throw new Error(error.message)
  }
}