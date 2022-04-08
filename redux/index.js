import { configureStore } from "@reduxjs/toolkit";

// Slices
import postReducer from "./post-slice";
import authReducer from "./auth-slice";

export const store = configureStore({
  reducer: { post: postReducer, auth: authReducer },
});
