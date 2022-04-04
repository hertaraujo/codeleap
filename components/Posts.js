import Post from "./Post";

function Posts({ nowDate, posts }) {
  return posts.map(post => (
    <Post key={post.id} post={post} nowDate={nowDate} />
  ));
}

export default Posts;
