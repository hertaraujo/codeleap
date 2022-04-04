import styled from "styled-components";

const Header = styled.header`
  align-self: stretch;
  color: #fff;
  background-color: #000;
  font-weight: 700;
  padding: ${props => (props.isPost ? `1.8rem 3rem` : `2.7rem`)};
  ${props => props.isPost && "margin: -1px;"}

  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 3rem;

  h1 {
    ${props => !props.isPost && `text-indent: 1rem;`}
    font-size: 2.2rem;
    line-height: 2.6rem;
    margin-right: auto;
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
