import { useSelector } from "react-redux";
import Post from "./Post";

function Posts() {
  const posts = useSelector(state => state.post.posts);
  const postsFetchedAt = Date.now();

  return posts.map(post => (
    <Post
      key={post.id}
      post={{
        ...post,
        createdAt: getDateString(postsFetchedAt, post.createdAt),
      }}
      nowDate={postsFetchedAt}
    />
  ));
}

export default Posts;

const getQuotientTrunc = (dividend, divisor) => Math.trunc(dividend / divisor);

const getDateString = (now, date) => {
  if (now < date) return `from the future`;

  const minutesPassed = getQuotientTrunc(now - date, 1000 * 60);

  if (minutesPassed < 2) return `Few seconds ago`;

  if (minutesPassed < 60) return `${minutesPassed} minutes ago`;

  if (minutesPassed < 120) return `An hour ago`;

  if (minutesPassed < 60 * 24)
    return `${getQuotientTrunc(minutesPassed, 60)} hours ago`;

  if (minutesPassed < 60 * 24 * 7) {
    const days = getQuotientTrunc(minutesPassed, 60 * 24);
    return `${days > 1 ? days : `An`} day${days > 1 ? `s` : ""} ago`;
  }

  if (minutesPassed < 60 * 24 * 30) {
    const weeks = getQuotientTrunc(minutesPassed, 60 * 24 * 7);
    return `${weeks > 1 ? weeks : `An`} week${weeks > 1 ? `s` : ""} ago`;
  }

  if (minutesPassed < 60 * 24 * 365) {
    const months = getQuotientTrunc(minutesPassed, 60 * 24 * 30);
    return `${months > 1 ? months : `An`} month${months > 1 ? `s` : ""} ago`;
  }

  const years = getQuotientTrunc(minutesPassed, 60 * 24 * 365);
  return `${years > 1 ? years : `An`} year${years > 1 ? `s` : ""} ago`;
};
