import Head from "next/head";
import Form from "../components/utils/Form";
import Card from "../components/UI/Card";
import Input from "../components/utils/Input";
import Button from "../components/utils/Button";

// Hooks
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  // letters, numbers, dots and underscores && startsWith a letter
  const valueIsValid =
    /^[0-9A-Z_.-]+$/i.test(enteredValue) &&
    /^[0-9A-Z]+$/i.test(enteredValue[0]);
  const hasError = !valueIsValid && isTouched;

  const changeHandler = e => {
    setEnteredValue(e.target.value + "");
    if (!enteredValue) setIsTouched(true);
  };

  const submitHandler = event => {
    event.preventDefault();

    if (!valueIsValid) return;

    localStorage.setItem("username", enteredValue);

    router.push("/main-screen");
  };

  return (
    <>
      <Head>
        <title>CodeLeap</title>
        <meta
          name="description"
          content="A network to share what you're thinking"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Card center>
          <Form
            heading={`Welcome to CodeLeap network!`}
            onSubmit={submitHandler}
          >
            <Input
              label={`Please enter your username`}
              title={`This field can't be empty`}
              placeholder={`John doe`}
              id={`username`}
              onChange={changeHandler}
              onBlur={() => setIsTouched(true)}
              required
              isInvalid={hasError}
              helperMessage={`Only letters, numbers, dots and underscores it and MUST start with a letter.`}
            />
            <Button
              disabled={hasError}
              type="submit"
              title={
                hasError
                  ? `It MUST start with a letter. Only letters, numbers, dots and underscores are accepted.`
                  : ""
              }
              onClick={() => setIsTouched(true)}
            >
              ENTER
            </Button>
          </Form>
        </Card>
      </main>
    </>
  );
}
