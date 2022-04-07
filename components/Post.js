// Special Components
import Image from "next/image";
import Modal from "react-modal";

// Components
import Card from "./UI/Card";
import CompHeader from "./CompHeader";
import Button from "./utils/Button";
import ConfirmBox from "./ConfirmBox";
import PostForm from "./PostForm";

// Hooks
import { useSelector, useDispatch } from "react-redux";

// Actions
import { uiActions } from "../redux/ui-slice";

// Icons
import binIcon from "../assets/bin.svg";
import editIcon from "../assets/edit.svg";

// Styles
import styled from "styled-components";

const PostMain = styled.main`
  display: grid;
  grid-template-rows: fit-content 1fr;
  padding: 3rem;
  row-gap: 1.4rem;
  .post-info {
    display: flex;
    justify-content: space-between;
  }

  .post-owner {
    font-weight: 700;
    color: #777777;
  }

  .post-date {
    color: #777777;
  }

  .post-text {
    text-indent: 1rem;
  }
`;

function Post({ post }) {
  const dispatch = useDispatch();

  const loggedUser = useSelector(state => state.auth.loggedUser);
  const isEditOpen = useSelector(state => state.ui.isEditOpen);
  const isExcludeOpen = useSelector(state => state.ui.isExcludeOpen);

  return (
    <Card fillCard>
      <CompHeader isPost text={post.title}>
        {post.username === loggedUser && (
          <>
            <Modal
              className="modal"
              overlayClassName="overlay"
              onRequestClose={() => dispatch(uiActions.toggleExcludeModal())}
              isOpen={isExcludeOpen}
            >
              <ConfirmBox />
            </Modal>
            <Button
              isIcon
              onClick={() => dispatch(uiActions.toggleExcludeModal())}
            >
              <Image
                src={binIcon}
                alt="Bin icon for the button that excludes its post"
                title="Delete this post"
              />
            </Button>

            <Modal
              className="modal"
              overlayClassName="overlay"
              onRequestClose={() => dispatch(uiActions.toggleEditModal())}
              isOpen={isEditOpen}
            >
              <Card stretchCard>
                <PostForm isEdit />
              </Card>
            </Modal>
            <span style={{ transform: `translateY(3.5px)` }}>
              <Button
                isIcon
                onClick={() => dispatch(uiActions.toggleEditModal())}
                title="Edi this post"
              >
                <Image
                  src={editIcon}
                  alt="Edit icon, a cadre holding a pencil"
                />
              </Button>
            </span>
          </>
        )}
      </CompHeader>

      <PostMain>
        <div className="post-info">
          <span className="post-owner">{post.username}</span>
          <span className="post-date">{post.createdAt}</span>
        </div>
        <p className="post-text">{post.content}</p>
      </PostMain>
    </Card>
  );
}

export default Post;
