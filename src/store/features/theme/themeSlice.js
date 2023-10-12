import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: Boolean(localStorage.getItem('theme'))
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state) => {
      if (state.theme) {
        localStorage.removeItem('theme')
        state.theme = false
      } else {
        localStorage.setItem('theme', 1)
        state.theme = true
      }
    }
  }
})

export const { switchTheme } = themeSlice.actions

export default themeSlice.reducer