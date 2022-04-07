import { postActions } from "../redux/post-slice";

export const fetchPosts = () => {
  return async dispatch => {
    const fetchData = async () => {
      // Create date here, for time accuracy
      const postsFetchedAt = Date.now();

      const res = await fetch(`https://dev.codeleap.co.uk/careers/`);

      const { results: posts } = await res.json();

      return [posts, postsFetchedAt];
    };

    try {
      const [posts, postsFetchedAt] = await fetchData();

      dispatch(postActions.updatePosts({ posts, postsFetchedAt }));
    } catch (err) {
      // TODO  Handle error
    }
  };
};

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
