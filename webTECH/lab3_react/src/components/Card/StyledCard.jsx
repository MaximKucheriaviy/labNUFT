import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: ${({ active }) => (active ? "yellow" : "transparent")};
  border: 1px solid gray;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .name {
    font-size: 30px;
  }
  & .imageThumb {
    width: 100px;
  }
`;
