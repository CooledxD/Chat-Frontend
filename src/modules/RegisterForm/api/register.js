import ky from '../../../utils/ky/ky.js'

export default async function register(payload) {
  try {
    await ky.post('auth/register', {
      json: payload
    })
  } catch (error) {
    throw new Error(error.message)
  }
}
