import { configureStore } from "@reduxjs/toolkit";

import authReducer from './features/auth/authSlice.js'
import themeReducer from './features/theme/themeSlice.js'
import userReducer from './features/user/userSlice.js'
import chatReducer from './features/chat/chatSlice.js'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    user: userReducer,
    chat: chatReducer
  },
  devTools: import.meta.env.DEV
})