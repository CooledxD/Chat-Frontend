import getUserData from "../api/getUserData.js";

// store
import { store } from "../../../store/config.js";
import { setUserData } from "../../../store/features/user/userSlice.js";

export const loader = async () => {
  try {
    if (localStorage.getItem('username')) {
      return null
    }

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