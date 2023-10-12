import ky from '../../../utils/ky/ky.js'

export default async function uploadAvatar(payload) {
  try {
    const avatarUrl = await ky.post('user/avatar', {
      body: payload
    }).json()

    return avatarUrl
  } catch (error) {
    throw new Error(error.message)
  }
}