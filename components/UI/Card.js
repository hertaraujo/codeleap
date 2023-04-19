import styled, { css } from "styled-components";

const CardComp = styled.div`
  border: 1px solid #999;
  background-color: #fff;
  align-self: stretch;
  border-radius: 16px;
  padding: 2.3rem 3.4rem 2.9rem 3rem;
  position: relative;
  ${props =>
    props.center &&
    css`
      border-color:#ccc;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 50rem;
      padding: 2.8rem 2.5rem 2.3rem 3.1rem;
    `};

  ${props => props.fillCard && css`padding: 0;`}

  /* 1em = 16px | xem = 500px | 31,25 */
  @media (max-width: 31.25rem) {
    ${props => props.center && css`border: none;  min-width: 95vw;`}
    ${props => props.stretchCard && css`width: 90vw`}
  }

  ${props => props.stretchCard && css`min-width: 60vw`}
`;

function Card(props) {
  return (
    <>
      <CardComp {...props}>{props.children}</CardComp>
    </>
  );
}

export default Card;
