import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedUser: "",
  },
  reducers: {
    setLoggedUser(state, action) {
      state.loggedUser = action.payload;
    },
  },
});

export default authSlice.reducer;

export const authActions = authSlice.actions;
