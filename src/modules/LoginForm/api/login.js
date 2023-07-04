import ky from '../../../utils/ky/ky.js'

export default async function login(payload) {
  try {
    const res = await ky.post('auth/login', {
      json: payload,
    }).json()

    return res
  } catch (error) {
    throw new Error(error)
  }
}