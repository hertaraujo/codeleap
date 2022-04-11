import styled from "styled-components";

const CardComp = styled.div`
  border: 1px solid #999;
  background-color: #fff;
  align-self: stretch;
  padding: 2.3rem 3.4rem 2.9rem 3rem;
  position: relative;
  ${props =>
    props.center &&
    `
    border-color:#ccc;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 50rem;
    padding: 2.8rem 2.5rem 2.3rem 3.1rem;
    `};

  ${props => props.fillCard && `padding: 0;`}

  /* 1em = 16px | xem = 500px | 31,25 */
  
  @media (-webkit-max-width: 31.25rem), (max-width: 31.25rem) {
    ${props => props.center && `border: none;  min-width: 95vw;`}
    ${props => props.stretchCard && `width: 90vw`}
  }

  ${props => props.stretchCard && `min-width: 60vw`}
`;

function Card(props) {
  return (
    <>
      <CardComp {...props}>{props.children}</CardComp>
    </>
  );
}

export default Card;
