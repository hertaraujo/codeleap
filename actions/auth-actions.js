import { authActions } from "../redux/auth-slice";

export const login = () => {
  return async dispatch => {
    const username = localStorage.getItem("username");
    dispatch(authActions.setLoggedUser(username));
  };
};
