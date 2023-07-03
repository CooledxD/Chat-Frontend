import { 
  createSlice, 
} from "@reduxjs/toolkit";

const initialState = {
  accessToken: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    set: (state, action) => {
      state.accessToken = action.payload
    }
  }
})

export const { set } = authSlice.actions

export default authSlice.reducer