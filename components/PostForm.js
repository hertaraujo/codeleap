import Input from "./utils/Input";
import Form from "./utils/Form";
import Button from "./utils/Button";
import Image from "next/image";

// Styles
import styled from "styled-components";

// Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { sendNewPost, sendEditedPost } from "../actions/post-actions";

// Icon
import closeIcon from "../assets/close.svg";

const Close = styled.button`
  position: absolute;
  top: 3%;
  right: 2%;
  transition: filter 0.25s;

  :hover {
    filter: brightness(0.8);
  }
`;

function PostForm({ isEdit, id, onToggleModal }) {
  const dispatch = useDispatch();

  const username = useSelector(state => state.auth.loggedUser);

  const [title, setTitle] = useState(``);
  const [content, setContent] = useState(``);
  const [isTouched, setIsTouched] = useState(false);
  const valueIsValid = title.trim() !== "" && content.trim() !== "";
  const hasError = !valueIsValid && isTouched;

  const post = useSelector(state =>
    state.post.posts.find(post => post.id === id)
  );

  useEffect(() => {
    if (!isEdit) return;
    setTitle(post.title);
    setContent(post.content);
  }, [isEdit, post]);

  const submitHandler = event => {
    event.preventDefault();

    if (!valueIsValid) return;

    if (isEdit) {
      dispatch(sendEditedPost({ title, content, id }, onToggleModal));
    } else {
      dispatch(sendNewPost({ title, content, username }));
    }
  };

  return (
    <>
      {isEdit && (
        <Close onClick={onToggleModal}>
          <Image alt="close form icon" src={closeIcon} />
        </Close>
      )}
      <Form
        heading={isEdit ? "Edit item" : "What’s on your mind?"}
        onSubmit={submitHandler}
      >
        <Input
          label={`Title`}
          title={`This field can't be empty`}
          placeholder={`Hello world`}
          id={`title-${id}`}
          onBlur={() => setIsTouched(true)}
          onChange={e => {
            setTitle(e.target.value);
            if (!isTouched) setIsTouched(true);
          }}
          value={title}
          required
        />
        <Input
          as="textarea"
          rows={1}
          label={`Content`}
          title={`This field can't be empty`}
          placeholder={`Content here`}
          id={`content-${id}`}
          onBlur={() => setIsTouched(true)}
          onChange={e => {
            setContent(e.target.value);
            if (!isTouched) setIsTouched(true);
          }}
          value={content}
          required
        />
        <div>
          {isEdit &&
            <Button
              type="reset"
              mood="cancel"
              onClick={onToggleModal}
            >Cancel</Button>}
          <Button
            disabled={hasError}
            mood={isEdit ? "save" : ""}
            type="submit"
            title={
              hasError
              ? "Please give your post a title and some content so that you can submit it."
              : ""
            }
            >
            {isEdit ? "Save" : "Create"}
          </Button>
        </div>
      </Form>
    </>
  );
}

export default PostForm;
