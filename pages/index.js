import Head from "next/head";
import Form from "../components/utils/Form";
import Card from "../components/UI/Card";
import Loader from "../components/UI/Loader";
import Input from "../components/utils/Input";
import Button from "../components/utils/Button";

// Hooks
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { login } from "../actions/auth-actions";

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [isLoggedOut, setIsLoggedOut] = useState(true);
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueIsValid = /^[0-9A-Z_.]+$/i.test(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const submitHandler = event => {
    event.preventDefault();

    if (!valueIsValid) return;

    localStorage.setItem("username", enteredValue);
    dispatch(login());
    router.push("/main-screen");
  };
  
  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      router.push("/main-screen")  
    } else {
      setIsLoggedOut(true);
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>CodeLeap</title>
        <meta
          name="description"
          content="A network to share what you're thinking"
        />
        <link rel="icon" href="./favicon.png" type="image/png" />
      </Head>

      <main>
        {isLoggedOut ? <Loader /> :
        <Card center>
          <Form
            heading={`Welcome to CodeLeap network!`}
            onSubmit={submitHandler}
          >
            <Input
              label={`Please enter your username`}
              title={`This field can't be empty and max of 30 chars`}
              placeholder={`John Doe`}
              id={`username`}
              onChange={e => {
                setEnteredValue(e.target.value + "");
                if (!enteredValue) setIsTouched(true);
              }}
              onBlur={() => setIsTouched(true)}
              value={enteredValue}
              maxLength={30}
              required
              isInvalid={hasError}
            />
            <Button
              disabled={hasError}
              type="submit"
              title={
                hasError
                  ? `Only letters, numbers, dots and underscores are accepted.`
                  : ""
              }
              onClick={() => setIsTouched(true)}
            >
              ENTER
            </Button>
          </Form>
        </Card>
        }
      </main>
    </>
  );
}
