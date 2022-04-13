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
import { useSelector } from "react-redux";
import { useState } from "react";

// Icons
import binIcon from "../assets/bin.svg";
import editIcon from "../assets/edit.svg";

// Styles
import styled from "styled-components";

const PostMain = styled.main`
  display: grid;
  grid-template-rows: 1fr;
  padding: 3rem;
  row-gap: 1.8rem;
  line-height: 2.1rem;
  font-size: 1.8rem;

  /* 1em = 16px | xem = 500px | 31,25 */
  @media (max-width: 31.25rem) {
    font-size: 1.6rem;
  }

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
    display: flex;
    flex-direction: column;
    gap: 2rem;

    p {
      word-break: break-all;
    }
  }
`;

function Post({ post }) {
  const [isExcludeOpen, setIsExcludeOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const loggedUser = useSelector(state => state.auth.loggedUser);

  const toggleExcludeHandler = () => {
    setIsExcludeOpen(prev => !prev);
  };

  const toggleEditHandler = () => {
    setIsEditOpen(prev => !prev);
  };

  return (
    <Card fillCard>
      <CompHeader isPost text={post.title}>
        {post.username === loggedUser && (
          <>
            <Modal
              className="modal"
              overlayClassName="overlay"
              onRequestClose={toggleExcludeHandler}
              isOpen={isExcludeOpen}
              appElement={document.querySelector("#main")}
            >
              <ConfirmBox
                postId={post.id}
                onToggleModal={toggleExcludeHandler}
              />
            </Modal>

            <span style={{ marginLeft: "auto", transform: "translateY(4px)" }}>
              <Button isIcon onClick={toggleExcludeHandler}>
                <Image
                  src={binIcon}
                  alt="Bin icon for the button that excludes its post"
                  title="Delete this post"
                />
              </Button>
            </span>

            <Modal
              className="modal"
              overlayClassName="overlay"
              onRequestClose={toggleEditHandler}
              isOpen={isEditOpen}
              appElement={document.querySelector("#main")}
            >
              <Card stretchCard>
                <PostForm
                  isEdit
                  id={post.id}
                  onToggleModal={toggleEditHandler}
                />
              </Card>
            </Modal>
            <span style={{ transform: `translateY(2.2px)` }}>
              <Button isIcon onClick={toggleEditHandler} title="Edi this post">
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
          <span className="post-owner">@{post.username}</span>
          <span className="post-date">{post.createdAt}</span>
        </div>
        <div className="post-text">
          {post.content.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </PostMain>
    </Card>
  );
}

export default Post;
