import styled from "styled-components";

const FormComp = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
`;

function Form(props) {
  return (
    <FormComp {...props}>
      <h2>{props.heading}</h2>
      {props.children}
    </FormComp>
  );
}

export default Form;
