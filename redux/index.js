import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./post-slice";
import uiReducer from "./ui-slice";
import authReducer from "./auth-slice";

export const store = configureStore({
  reducer: { post: postReducer, ui: uiReducer, auth: authReducer },
});
