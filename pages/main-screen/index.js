import Head from "next/head";
import Card from "../../components/UI/Card";
import CompHeader from "../../components/CompHeader";
import Posts from "../../components/Posts";

// Styles
import styled from "styled-components";
import PostForm from "../../components/PostForm";

// hooks
import { useDispatch } from "react-redux";

import { postActions } from "../../redux/post-slice";
import { useEffect } from "react";
import { login } from "../../actions/auth-actions";

const CompMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 6rem 4rem;
`;

function MainScreen(props) {
  const dispatch = useDispatch();
  dispatch(
    postActions.updatePosts({
      posts: props.posts,
      postsFetchedAt: props.postsFetchedAt,
    })
  );

  useEffect(() => dispatch(login()), [dispatch]);

  return (
    <>
      <Head>
        <title>Welcome to CodeLeap Network</title>
        <meta
          name="description"
          content="A network to share what you're thinking"
        />
        <link rel="icon" href="/favicon.ico" />
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
  const res = await fetch(`https://dev.codeleap.co.uk/careers/`);

  const { results: posts } = await res.json();

  return {
    props: { posts },
  };
}
