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

export const sendEditedPost = (post, toggleModal) => {
  return async dispatch => {
    const sendData = async () => {
      const res = await fetch(
        `https://dev.codeleap.co.uk/careers/${post.id} TEMP /`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(post),
        }
      );

      if (res.status === 404) {
        throw new Error("Post not found");
      }

      return await res.json();
    };

    try {
      const post = await sendData();

      dispatch(postActions.editPost(post));
      toggleModal();
    } catch (err) {
      throw err;
    }
  };
};

export const sendDeletePost = postId => {
  return async dispatch => {
    const sendData = async () => {
      const res = await fetch(
        `https://dev.codeleap.co.uk/careers/${postId} TEMP /`,
        {
          method: "DELETE",
        }
      );

      console.log(res);
    };

    try {
      await sendData();

      dispatch(postActions.deletePost(postId));
    } catch (err) {}
  };
};
