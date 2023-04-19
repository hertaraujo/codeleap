import styled, { css } from "styled-components";

const moods = {
  save: css`
    color: #fff;
    background-color: #47B960;
  `,
  cancel: css`
    color: #000;
    background-color: #fff;
    border: 1px solid #999999;
  `,
  delete: css`
    color: #fff;
    background-color: #FF5151;
  `,
}

const Btn = styled.button`
  border: none;
  color: #fff;
  ${props => !props.isIcon && `min-width: 11rem;`}
  background-color: #7695EC;
  ${({mood}) => moods[mood]}
  border-radius: 8px;
  font-family: inherit;
  padding: 0.8rem 3.2rem;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.875rem;
  align-self: flex-end;
  ${props =>
    props.isIcon &&
    css`
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
    background-color: #ccc;
    color: #6a86d4;
    cursor: not-allowed;
  }
`;

const Button = props => {
  return <Btn {...props}>{props.children}</Btn>;
};

export default Button;
