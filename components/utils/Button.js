import styled from "styled-components";

const Btn = styled.button`
  border: none;
  color: #fff;
  ${props => !props.isIcon && `min-width: 11rem;`}
  background-color: #000;
  ${props =>
    props.isWhite &&
    `
    color: #000;
    background-color: #fff;
    border: 1px solid #000000;`}
  font-family: inherit;
  padding: 0.8rem 3.2rem;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.875rem;
  align-self: flex-end;
  ${props =>
    props.isIcon &&
    `
  padding: 0;
  align-self: flex-start;
  `}
  display: inline-block;
  position: relative;
  transition: all 0.27s;

  :hover:not(:disabled) {
    transform: translateY(-1.5px);
  }

  :active:not(:disabled) {
    transform: translateY(0.7px);
  }

  :disabled {
    background-color: #999;
    color: #e31919;
    cursor: not-allowed;
  }
`;

const Button = props => {
  return <Btn {...props}>{props.children}</Btn>;
};

export default Button;
