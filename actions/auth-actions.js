import { authActions } from "../redux/auth-slice";

export const login = () => {
  return async dispatch => {
    const username = localStorage.getItem("username");
    dispatch(authActions.setLoggedUser(username));
  };
};

export const logout = () => {
  return async dispatch => {
    localStorage.setItem("username", "");
    dispatch(authActions.resetLoggedUser());
  };
};
