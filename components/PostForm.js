import Input from "./utils/Input";
import Form from "./utils/Form";
import Button from "./utils/Button";

import { useState } from "react";

function EditingForm(props) {
  const [titleValue, setTitleValue] = useState(``);
  const [contentValue, setContentValue] = useState(``);

  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = titleValue.trim() !== "" && contentValue.trim() !== "";

  const hasError = !valueIsValid && isTouched;

  const submitHandler = event => {
    event.preventDefault();
  };

  return (
    <Form
      heading={props.isEdit ? "Edit item" : "What’s on your mind?"}
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
        {props.isEdit ? "SAVE" : "CREATE"}
      </Button>
    </Form>
  );
}

export default EditingForm;
