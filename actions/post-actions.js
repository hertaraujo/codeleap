import { postActions } from "../redux/post-slice";

export const sendPost = post => {
  return async dispatch => {
    const sendData = async () => {
      const res = await fetch(`https://dev.codeleap.co.uk/careers/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });

      return await res.json();
    };

    try {
      const post = await sendData();

      dispatch(postActions.addPost(post));
    } catch (err) {}
  };
};

export const changePost = post => {};
