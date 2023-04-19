import { useDispatch } from "react-redux";

import { sendDeletePost } from "../actions/post-actions";

import Button from "./utils/Button";
import styled from "styled-components";

const CBComp = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  row-gap: 6rem;
  background-color: #fff;
  border-radius: 16px;
  padding: 3.4rem 3.4rem 2.5rem;

  p {
    font-size: 2.2rem;
    line-height: 2.6rem;
    font-weight: 600;
  }

  div {
    display: flex;
    gap: 1.6rem;
    justify-self: flex-end;
  }
  
  /* 1em = 16px | xem = 600px | 37,5 */
  @media (min-width: 37.5rem) {
   min-width: 660px;
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
        <Button mood="cancel" onClick={onToggleModal}>
          Cancel
        </Button>
        <Button mood="delete" onClick={confirmHandler}>
          Delete
        </Button>
      </div>
    </CBComp>
  );
}

export default ConfirmBox;
