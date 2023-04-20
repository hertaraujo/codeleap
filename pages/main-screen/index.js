import Head from "next/head";
import Card from "../../components/UI/Card";
import Loader from "../../components/UI/Loader";
import CompHeader from "../../components/CompHeader";
import Posts from "../../components/Posts";
import PostForm from "../../components/PostForm";

// Styles
import styled from "styled-components";

// hooks
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

// Actions
import { postActions } from "../../redux/post-slice";

const CompMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 2.4rem;

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
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    dispatch(
      postActions.updatePosts({
        posts: props.posts,
      })
    );
  }, [dispatch, props.posts]);
  
  useEffect(() => {
    const username = localStorage.getItem("username");
    if (!username) {
      router.push("/");  
    } else {
      setIsLoggedIn(true);
    }
  }, [router]);

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
      {!isLoggedIn ? <Loader /> :
        <>
          <CompHeader text="CodeLeap Network" />
          <CompMain>
            <Card>
              <PostForm />
            </Card>
            <Posts />
          </CompMain>
        </>
      }
    </>
  );
}

export default MainScreen;

export async function getStaticProps(context) {
  try {
    const res = await fetch(`https://dev.codeleap.co.uk/careers/`);

    const { results: posts } = await res.json();

    return { props: { posts } };
  } catch (err) {
    console.log(err);
  }
}
