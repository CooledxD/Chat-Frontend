import { configureStore } from "@reduxjs/toolkit";

import authReducer from './features/auth/authSlice.js'
import themeReducer from './features/theme/themeSlice.js'
import userReducer from './features/user/userSlice.js'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    user: userReducer
  },
  devTools: import.meta.env.DEV
})