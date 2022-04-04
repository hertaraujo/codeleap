// Styles
import styled from "styled-components";

// Components
import Card from "./UI/Card";
import CompHeader from "./CompHeader";
import Image from "next/image";
import Button from "./utils/Button";
import Modal from "react-modal";

// Icons
import binIcon from "../assets/bin.svg";
import editIcon from "../assets/edit.svg";
import { useEffect, useState } from "react";
import ConfirmBox from "./ConfirmBox";
import PostForm from "./PostForm";

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

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(119, 119, 119, 0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    position: "relative",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    border: "none",
    background: "none",
    overflow: "auto",
    borderRadius: 0,
    outline: "none",
    padding: "0",
  },
};

const getQuotientTrunc = (dividend, divisor) => Math.trunc(dividend / divisor);

const getDateString = (now, date) => {
  if (now < date) return `from the future`;

  const minutesPassed = getQuotientTrunc(now - date, 1000 * 60);

  if (minutesPassed < 2) return `Few seconds ago`;

  if (minutesPassed < 60) return `${minutesPassed} minutes ago`;

  if (minutesPassed < 120) return `An hour ago`;

  if (minutesPassed < 60 * 24)
    return `${getQuotientTrunc(minutesPassed, 60)} hours ago`;

  if (minutesPassed < 60 * 24 * 7) {
    const days = getQuotientTrunc(minutesPassed, 60 * 24);
    return `${days > 1 ? days : `An`} day${days > 1 ? `s` : ""} ago`;
  }

  if (minutesPassed < 60 * 24 * 30) {
    const weeks = getQuotientTrunc(minutesPassed, 60 * 24 * 7);
    return `${weeks > 1 ? weeks : `An`} week${weeks > 1 ? `s` : ""} ago`;
  }

  if (minutesPassed < 60 * 24 * 365) {
    const months = getQuotientTrunc(minutesPassed, 60 * 24 * 30);
    return `${months > 1 ? months : `An`} month${months > 1 ? `s` : ""} ago`;
  }

  const years = getQuotientTrunc(minutesPassed, 60 * 24 * 365);
  return `${years > 1 ? years : `An`} year${years > 1 ? `s` : ""} ago`;
};

function Post({ post, nowDate }) {
  const [isShowingExcludingModal, setIsShowingExcludingModal] = useState(false);
  const [isShowingEditingModal, setIsShowingEditingModal] = useState(false);

  const [loggedUser, setLoggedUser] = useState("");

  useEffect(() => {
    setLoggedUser(localStorage.getItem("username"));
  }, [post]);

  const toggleExcludingPostHandler = () => {
    setIsShowingExcludingModal(prev => !prev);
  };

  const toggleEditingPostHandler = () => {
    setIsShowingEditingModal(prev => !prev);
  };

  return (
    <Card fillCard>
      <CompHeader isPost text={post.title}>
        <Modal
          onRequestClose={toggleExcludingPostHandler}
          isOpen={isShowingExcludingModal}
          style={modalStyles}
        >
          <ConfirmBox onToggleModal={toggleExcludingPostHandler} />
        </Modal>

        {post.username === loggedUser && (
          <Button isIcon onClick={toggleExcludingPostHandler}>
            <Image
              src={binIcon}
              alt="Bin icon for the button that excludes its post"
              title="Delete this post"
            />
          </Button>
        )}

        <Modal
          onRequestClose={toggleEditingPostHandler}
          isOpen={isShowingEditingModal}
          style={modalStyles}
        >
          <Card stretchCard>
            <PostForm isEdit onToggleModal={toggleEditingPostHandler} />
          </Card>
        </Modal>

        {post.username === loggedUser && (
          <span style={{ transform: `translateY(3.5px)` }}>
            <Button
              isIcon
              onClick={toggleEditingPostHandler}
              title="Edi this post"
            >
              <Image src={editIcon} alt="Edit icon, a cadre holding a pencil" />
            </Button>
          </span>
        )}
      </CompHeader>

      <PostMain>
        <div className="post-info">
          <span className="post-owner">{post.username}</span>
          <span className="post-date">
            {getDateString(nowDate, post.createdAt)}
          </span>
        </div>
        <p className="post-text">{post.content}</p>
      </PostMain>
    </Card>
  );
}

export default Post;
