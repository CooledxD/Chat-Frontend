import { redirect } from 'react-router-dom'

import login from '../../api/login.js'
import validation from '../validations/login.js'

// store
import { store } from '../../../../store/config.js'
import { setAccessToken } from '../../../../store/features/auth/authSlice.js'

export const action = async ({ request }) => {
  try {
    const formData = Object.fromEntries(await request.formData())

    await validation(formData)

    const { 
      accessToken, 
      refreshToken 
    } = await login(formData)

    // token payload
    const { userId } = JSON.parse(window.atob(accessToken.split('.')[1]))

    store.dispatch(setAccessToken(accessToken))

    localStorage.setItem('userId', userId)
    localStorage.setItem('refreshToken', refreshToken)

    return redirect('/chat')
  } catch (error) {
    if (error.message.split(' ')[0] === 'NetworkError') {
      throw new Error('503')
    }

    return {
      error: error.message,
    }
  }
}