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

    editPost(state, action) {
      const editedPost = {
        id: action.payload.id,
        username: action.payload.username,
        createdAt: new Date(action.payload.created_datetime).getTime(),
        content: action.payload.content,
        title: action.payload.title,
      };

      state.posts = state.posts.map(post =>
        post.id === editedPost.id ? editedPost : post
      );
    },

    deletePost(state, action) {
      const postId = action.payload;

      state.posts = state.posts.filter(post => post.id !== postId);
    },
  },
});

export const postActions = postSlice.actions;

export default postSlice.reducer;
