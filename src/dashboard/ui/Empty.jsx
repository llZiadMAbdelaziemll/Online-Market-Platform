import styled from "styled-components";

const StyledEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20rem;
`;
function Empty({ resource }) {
  return (
    <StyledEmpty>
      <p>No {resource} could be found.</p>
    </StyledEmpty>
  );
}

export default Empty;
