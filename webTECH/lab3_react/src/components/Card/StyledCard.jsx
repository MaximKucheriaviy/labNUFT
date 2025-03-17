import styled from "styled-components";

export const StyledCard = styled.div`
  width: 400px;
  height: 200px;
  perspective: 1000px;
  position: relative;
  & .front,
  & .back {
    border: 1px solid blue;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;
    transition-duration: 600ms;
    transition-property: transform;
  }
  & .front {
    background-color: #96ff96;
    font-weight: 800;
    font-size: 24px;
  }
  & .back {
    background-color: #96d5ff;
    transform: rotateY(180deg);
    flex-direction: column;
    gap: 10px;
  }
  & .back.active {
    transform: rotateY(360deg);
  }
  & .front.active {
    transform: rotateY(180deg);
  }
`;
