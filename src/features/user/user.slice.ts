import { createSlice } from "@reduxjs/toolkit";
import { REHYDRATE } from "redux-persist";

const initialState = {
  user: {},
  isLoggedIn: false,
}
const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = {...state.user, ...action.payload}
      state.isLoggedIn = true
    },
    signOut: (state) => {
      state.user = {}
      state.isLoggedIn = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(REHYDRATE, (state) => {
      if (state.user) {
        state.isLoggedIn = true
      }
    })
  }
})

export const {signIn, signOut} = userSlice.actions
export default userSlice.reducer