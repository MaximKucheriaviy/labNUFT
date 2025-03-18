import { NextPage } from "next";
import { GetServerSideProps } from "next";
import { StyledHello } from "../components/Styledello";

type Response{
    response: string
}

export const getServerSideProps: GetServerSideProps = () => {
    
}


const Hello: NextPage<Response> = ({ response }) => {
  return (
    <StyledHello>
      <p>{hello}</p>
    </StyledHello>
  );
};

export default Hello;
