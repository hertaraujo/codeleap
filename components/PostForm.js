import Input from "./utils/Input";
import Form from "./utils/Form";
import Button from "./utils/Button";

// Hooks
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { sendPost } from "../actions/post-actions";

function PostForm({ isEdit }) {
  const dispatch = useDispatch();

  // TODO  Esses estados aqui serão recebidos por Slice e por isso já estarão com texto editável em corpo ao ser renderizado no caso de isEdit === true
  const [titleValue, setTitleValue] = useState(``);
  const [contentValue, setContentValue] = useState(``);

  // TODO  Criar um hook para esse input validation
  const username = useSelector(state => state.auth.loggedUser);

  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = titleValue.trim() !== "" && contentValue.trim() !== "";

  const hasError = !valueIsValid && isTouched;

  const submitHandler = event => {
    event.preventDefault();

    if (!valueIsValid) return;

    if (isEdit) {
      // TEMP
      return;
      // TODO  Action and Reducer
      dispatch(
        changePost({ title: titleValue, content: contentValue, username })
      );
    } else {
      dispatch(
        sendPost({ title: titleValue, content: contentValue, username })
      );
    }
  };

  return (
    <Form
      heading={isEdit ? "Edit item" : "What’s on your mind?"}
      onSubmit={submitHandler}
    >
      <Input
        label={`Title`}
        title={`This field can't be empty`}
        placeholder={`Hello world`}
        id={`title`}
        onBlur={() => setIsTouched(true)}
        onChange={e => {
          setTitleValue(e.target.value);
          if (!isTouched) setIsTouched(true);
        }}
        value={titleValue}
        required
        helperMessage={`You have to give your post a title.`}
      />
      <Input
        paddingBottom={`5rem`}
        label={`Content`}
        title={`This field can't be empty`}
        placeholder={`Content here`}
        id={`content`}
        onBlur={() => setIsTouched(true)}
        onChange={e => {
          setContentValue(e.target.value);
          if (!isTouched) setIsTouched(true);
        }}
        value={contentValue}
        required
        helperMessage={`You have to give your post a content.`}
      />
      <Button
        disabled={hasError}
        type="submit"
        title={
          hasError
            ? "Please give your post a title and some content so that you can edit it."
            : ""
        }
      >
        {isEdit ? "SAVE" : "CREATE"}
      </Button>
    </Form>
  );
}

export default PostForm;
