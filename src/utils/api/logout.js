import ky from '../ky/ky.js'

export default async function logout() {
  try {
    await ky.post('auth/logout', {
      json: {
        userId: localStorage.getItem('userId')
      }
    })

    localStorage.clear()
  } catch (error) {
    if (error.message.split(' ')[0] === 'NetworkError') {
      throw new Error('503')
    }

    return {
      error: error.message,
    }
  }
}