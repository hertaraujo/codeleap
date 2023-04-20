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
    resetLoggedUser(state, action) {
      state.loggedUser = "";
    },
  },
});

export default authSlice.reducer;

export const authActions = authSlice.actions;
