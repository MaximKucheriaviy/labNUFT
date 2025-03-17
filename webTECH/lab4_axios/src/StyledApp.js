import styled from "styled-components";

const MainBlock = styled.div`
  width: 800px;
  border: 4px solid gray;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
`;

export const StyledCurrentWeather = styled(MainBlock)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 10px;
`;

export const StyledMainWeather = styled.div`
  border: 4px solid gray;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  height: 100%;
  & .name {
    font-size: 46px;
    font-weight: 600;
  }
  & img {
    display: block;
    width: 50%;
  }
  & .temp {
    font-size: 68px;
    display: flex;
    align-items: flex-start;
    font-weight: 600;
    & span {
      position: relative;
      top: 15px;
      font-size: 24px;
      font-weight: 400;
    }
  }
  & .desc {
    font-size: 24px;
    color: rgb(97, 97, 97);
  }
`;

export const StyledSearchForm = styled.form`
  display: block;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  & input {
    width: 100%;
    font-size: 20px;
    display: block;
    border: 3px solid brown;
    height: 40px;
    border-radius: 20px;
    padding-left: 10px;
    padding-right: 10px;
    &:focus {
      box-shadow: 0px 0px 10px black;
      outline: none;
    }
  }
`;

export const StyledInfoCatds = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  & .card {
    box-shadow: 1px 1px 3px black;
    border: 2px solid gray;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .name {
      color: gray;
    }
    & .num {
      font-size: 30px;
      font-weight: 600;
    }
    & .icon {
      font-size: 30px;
    }
    & .customSpan {
      font-size: 16px;
      color: gray;
    }
  }
`;

export const ButtonDiv = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  & button {
    flex-grow: 1;
  }
`;
