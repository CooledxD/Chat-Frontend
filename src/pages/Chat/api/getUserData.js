import ky from "../../../utils/ky/ky.js";

export default async function getUserData() {
  try {
    const res = await ky.get('user').json()

    return res
  } catch (error) {
    throw new Error(error.message)
  }
}