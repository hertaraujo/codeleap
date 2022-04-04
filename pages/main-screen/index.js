import Card from "../../components/UI/Card";
import CompHeader from "../../components/CompHeader";
import Posts from "../../components/Posts";

// Styles
import styled from "styled-components";
import PostForm from "../../components/PostForm";

const CompMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 6rem 4rem;
`;

function MainScreen(props) {
  return (
    <>
      <CompHeader text="CodeLeap Network" />
      <CompMain>
        <Card>
          <PostForm />
        </Card>
        <Posts posts={props.posts} nowDate={props.nowDate} />
      </CompMain>
    </>
  );
}

export default MainScreen;

export async function getServerSideProps(context) {
  const res = await fetch(`https://dev.codeleap.co.uk/careers/`);

  // Create date here, for time accuracy
  const nowDate = Date.now();

  const { results: posts } = await res.json();

  // Sorting posts by date time
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

  return {
    props: { nowDate, posts: formattedPosts },
  };
}
