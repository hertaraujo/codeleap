import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    updatePosts(state, action) {
      // Sorting posts by date time
      const posts = [...action.payload.posts];

      posts.sort(
        (a, b) =>
          new Date(b.created_datetime).getTime() -
          new Date(a.created_datetime).getTime()
      );

      // Formatting objects of posts
      const formattedPosts = posts.map(post => ({
        id: post.id,
        username: post.username,
        createdAt: new Date(post.created_datetime).getTime(),
        content: post.content,
        title: post.title,
      }));

      state.posts = formattedPosts;
    },

    addPost(state, action) {
      const post = action.payload;

      state.posts = [
        {
          id: post.id,
          username: post.username,
          createdAt: new Date(post.created_datetime).getTime(),
          content: post.content,
          title: post.title,
        },
        ...state.posts,
      ];
    },

    changePost(state, action) {},
  },
});

export const postActions = postSlice.actions;

export default postSlice.reducer;
