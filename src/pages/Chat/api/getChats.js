import ky from "../../../utils/ky/ky.js";

export default async function getChats() {
  try {
    const chatArr = await ky.get('chat').json()

    return chatArr
  } catch (error) {
    throw new Error(error.message)
  }
}