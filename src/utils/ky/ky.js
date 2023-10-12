import ky from "ky";

import { store } from "../../store/config.js";
import { setAccessToken } from "../../store/features/auth/authSlice.js";

export default ky.create({
  prefixUrl: import.meta.env.VITE_HOST,
  hooks: {
    beforeError: [
      async error => {
        const { message } = await error.response.json()
        error.message = message
        return error
      }
    ],
    beforeRequest: [
      request => {
        request.headers.set(
          'Authorization', 
          `Bearer ${store.getState().auth.accessToken}`
        )
      }
    ],
    afterResponse: [
      async (request, _, response) => {
        if (response.status === 401) {
          const {accessToken, refreshToken} = await ky.post(`${import.meta.env.VITE_HOST}/auth/refresh`, {
            json: {
              refreshToken: localStorage.getItem('refreshToken')
            }
          }).json()

          store.dispatch(setAccessToken(accessToken))
          localStorage.setItem('refreshToken', refreshToken)

          request.headers.set(
            'Authorization', 
            `Bearer ${accessToken}`
          )

          return ky(request)
        }
      }
    ]
  }
})