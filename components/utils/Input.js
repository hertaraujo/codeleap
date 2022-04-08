import styled from "styled-components";

const TextArea = styled.textarea`
  resize: none;
  align-items: stretch;
  border: 0.1rem solid #777;
  border-radius: 4px;
  padding: 0.6rem 0.8rem 5.2rem;

  ::placeholder {
    color: #ccc;
    font-family: inherit;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.6rem;
  }

  ${props =>
    props.isInvalid &&
    `
  border-color: #e31919;
  color: #e31919;
  
  ::placeholder {
    color: #e3191978;
  }
  `}
`;

const InputComp = styled.input`
  align-items: stretch;
  border: 0.1rem solid #777;
  border-radius: 4px;
  padding: 0.6rem 0.8rem;

  ::placeholder {
    color: #ccc;
    font-family: inherit;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.6rem;
  }

  ${props =>
    props.isInvalid &&
    `
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
  display: inline-block;
  border: solid 1px #000;
  font-size: 1.2rem;
  padding: 0 3px;
  border-radius: 50rem;
  margin-left: 0.7rem;
  transform: translateY(-1.5px);
`;

const Input = props => {
  let input = <InputComp {...props} />;
  if (props.isTextArea) {
    input = (
      <TextArea {...props} rows="1">
        {props.value}
      </TextArea>
    );
  }

  return (
    <>
      <Label htmlFor={props.id}>
        {props.label}
        {` `}
        <HelperMsg title={props.helperMessage}>&#x0003F;</HelperMsg>
      </Label>
      {input}
    </>
  );
};

Input.displayName = Input;

export default Input;
