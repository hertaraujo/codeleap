import { postActions } from "../redux/post-slice";

export const sendNewPost = post => {
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

export const sendEditedPost = post => {
  return async dispatch => {
    const sendData = async () => {
      const res = await fetch(
        `https://dev.codeleap.co.uk/careers/${post.id}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(post),
        }
      );

      return await res.json();
    };

    try {
      const post = await sendData();

      dispatch(postActions.editPost(post));
    } catch (err) {}
  };
};

export const sendDeletePost = postId => {
  return async dispatch => {
    const sendData = async () => {
      await fetch(`https://dev.codeleap.co.uk/careers/${postId}/`, {
        method: "DELETE",
      });
    };

    try {
      await sendData();

      dispatch(postActions.deletePost(postId));
    } catch (err) {}
  };
};
