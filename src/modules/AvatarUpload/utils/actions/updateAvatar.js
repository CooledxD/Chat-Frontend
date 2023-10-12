import uploadAvatar from "../../api/uploadAvatar.js"

// store
import { store } from "../../../../store/config.js"
import { setAvatarUrl } from "../../../../store/features/user/userSlice.js"

export const action = async ({ request }) => {
  try {
    const formData = await request.formData()

    const avatarUrl = await uploadAvatar(formData)

    localStorage.setItem('avatarUrl', avatarUrl)

    store.dispatch(setAvatarUrl(avatarUrl))

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