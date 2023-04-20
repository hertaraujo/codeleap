import styled, { css } from "styled-components";

const Header = styled.header`
  align-self: stretch;
  color: #fff;
  background-color: #7695EC;
  font-weight: 700;
  
  padding: ${props => (props.isPost ? `1.8rem 3rem` : `2.7rem`)};
  ${props => props.isPost &&
    css`
      margin: -1px;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
    `
  }

  display: flex;

  justify-content: space-between;
  gap: 3rem;

  h1 {
    ${props => !props.isPost && `text-indent: 1rem;`}
    font-size: 2.2rem;
    line-height: 2.6rem;
    flex-shrink: 999;
    max-width: 90%;
    max-height: 10rem;
    word-break: break-all;
    hyphens: auto;
    align-self: flex-end;
  }

  /* 1em = 16px | xem = 500px | 31,25 */
  @media (max-width: 31.25rem) {
    padding: ${props => (props.isPost ? `1.4rem 2.5rem` : `2rem`)};

    h1 {
      font-size: 2rem;
    }
  }
  
   span {
    width: 24px;
  }
`;

const CompHeader = props => {
  return (
    <Header {...props}>
      <h1>{props.text}</h1>
      {props.children}
    </Header>
  );
};

export default CompHeader;
