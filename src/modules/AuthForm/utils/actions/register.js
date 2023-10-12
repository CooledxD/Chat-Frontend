import register from "../../api/register.js"
import validation from "../validations/register.js"

export const action = async ({ request }) => {
  try {
    const formData = Object.fromEntries(await request.formData())

    await validation(formData)

    await register(formData)

    return {
      success: 'success'
    }
  } catch (error) {
    if (error.message.split(' ')[0] === 'NetworkError') {
      throw new Error('503')
    }

    return {
      error: error.message,
    }
  }
}