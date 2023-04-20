import styled, { css } from "styled-components";

const LoaderComp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 2.2rem;
    font-weight: 700;
    text-align: center;
  }
  padding: 2rem;
  height: 100vh;
`;

function Loader(props) {
  return (
    <LoaderComp>
      <h2 {...props}>Loading...</h2>
    </LoaderComp>
  );
}

export default Loader;
