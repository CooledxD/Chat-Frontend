import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: null,
  messages: null,
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChats: (state, action) => {
      state.chats = action.payload
    },
    setMessages: (state, action) => {
      state.messages = action.payload
    }
  }
})

export const {
  setChats,
  setMessages,
} = chatSlice.actions

export default chatSlice.reducer