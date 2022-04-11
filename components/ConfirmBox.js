import { useDispatch } from "react-redux";

import { sendDeletePost } from "../actions/post-actions";

import Button from "./utils/Button";
import styled from "styled-components";

const CBComp = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  row-gap: 6rem;
  background-color: #fff;
  padding: 3.4rem 3.4rem 2.5rem 4.9rem;

  p {
    font-size: 2.2rem;
    line-height: 2.6rem;
  }

  div {
    display: flex;
    gap: 1.6rem;
    justify-self: flex-end;
  }
`;

function ConfirmBox({ postId, onToggleModal }) {
  const dispatch = useDispatch();

  const confirmHandler = () => {
    dispatch(sendDeletePost(postId));
  };

  return (
    <CBComp>
      <p>Are you sure you want to delete this post?</p>
      <div>
        <Button isWhite onClick={onToggleModal}>
          Cancel
        </Button>
        <Button isWhite onClick={confirmHandler}>
          OK
        </Button>
      </div>
    </CBComp>
  );
}

export default ConfirmBox;
