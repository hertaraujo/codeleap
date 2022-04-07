import { authActions } from "../redux/auth-slice";

export const login = () => {
  return async dispatch => {
    dispatch(authActions.setLoggedUser(localStorage.getItem("username")));
  };
};
