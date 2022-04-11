import styled from "styled-components";
import { ErrorBoundary } from "./error/ErrorBoundary";

const Header = styled.header`
  align-self: stretch;

  color: #fff;
  background-color: #000;
  font-weight: 700;
  padding: ${props => (props.isPost ? `1.8rem 3rem` : `2.7rem`)};
  ${props => props.isPost && "margin: -1px;"}

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
`;

const CompHeader = props => {
  return (
    <Header {...props}>
      <h1>{props.text}</h1>
      {/* <ErrorBoundary>{props.children}</ErrorBoundary> */}
      {props.children}
    </Header>
  );
};

export default CompHeader;
