import { useState } from "react";
import styled, { css } from "styled-components";

const InputComp = styled.input`
  resize: none;
  align-items: stretch;
  border: 0.1rem solid #777;
  border-radius: 8px;
  padding: 0.6rem 0.8rem
    ${props => (props.placeholder === "Content here" ? "5.2rem" : "")};

  ::placeholder {
    color: #ccc;
    font-family: inherit;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.6rem;
  }

  ${props =>
    props.isInvalid &&
    css`
      border-color: #e31919;
      color: #e31919;
  
      ::placeholder {
        color: #e3191978;
      }
  `}
`;

const Label = styled.label`
  margin-bottom: -3rem;
  padding-bottom: 2rem;
`;

const HelperMsg = styled.span`
  display: block;
  margin-top: 0.3rem;
  font-size: 1.2rem;
  color: #ccc;
`;

const Input = props => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <>
      <Label htmlFor={props.id}>
        {props.label}
        {` `}
        {isShowing && <HelperMsg>({props.title})</HelperMsg>}
      </Label>
      <InputComp {...props} onFocus={() => setIsShowing(true)} onBlur={() => setIsShowing(false)}/>
    </>
  );
};

Input.displayName = Input;

export default Input;
