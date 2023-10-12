import { 
  createSlice, 
} from "@reduxjs/toolkit";

const initialState = {
  username: localStorage.getItem('username'),
  avatarUrl: localStorage.getItem('avatarUrl')
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.username = action.payload.username,
      state.avatarUrl = action.payload.avatarUrl
    },
    setAvatarUrl: (state, action) => {
      state.avatarUrl = action.payload
    }
  }
})

export const { 
  setUserData, 
  setAvatarUrl
} = userSlice.actions

export default userSlice.reducer