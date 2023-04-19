import { authActions } from "../redux/auth-slice";

export const login = (router) => {
  return async dispatch => {
    const username = localStorage.getItem("username");
    
    if (username) {
      dispatch(authActions.setLoggedUser(username));
    } else {
      router.push("/")
    }
  };
};
