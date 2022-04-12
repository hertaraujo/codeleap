import Head from "next/head";
import Card from "../../components/UI/Card";
import CompHeader from "../../components/CompHeader";
import Posts from "../../components/Posts";
import PostForm from "../../components/PostForm";

// Styles
import styled from "styled-components";

// hooks
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// Actions
import { postActions } from "../../redux/post-slice";
import { login } from "../../actions/auth-actions";

const CompMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 6rem 4rem;

  /* 1em = 16px | xem = 1400px | 87.5em */
  @media (min-width: 87.5em) {
    max-width: 1400px;
    margin: 0 auto;
  }

  /* 1em = 16px | xem = 500px | 31,25 */
  @media (max-width: 31.25rem) {
    padding: 3rem 2rem;
    gap: 2rem;
  }
`;

function MainScreen(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      postActions.updatePosts({
        posts: props.posts,
      })
    );
  }, [dispatch, props.posts]);

  useEffect(() => dispatch(login()), [dispatch]);

  return (
    <>
      <Head>
        <title>Welcome to CodeLeap Network</title>
        <meta
          name="description"
          content="A network to share what you're thinking"
        />
        <link rel="icon" href="./favicon.png" type="image/png" />
      </Head>
      <CompHeader text="CodeLeap Network" />
      <CompMain>
        <Card>
          <PostForm />
        </Card>

        <Posts />
      </CompMain>
    </>
  );
}

export default MainScreen;

export async function getStaticProps(context) {
  try {
    const res = await fetch(`https://dev.codeleap.co.uk/careers/`);

    const errorCode = +res.status === 404 ? 404 : false;

    const { results: posts } = await res.json();

    return { props: { posts, errorCode } };
  } catch (err) {
    console.log(err);
  }
}
