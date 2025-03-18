import { StyledCard } from "./StyledCard";
import { useState } from "react";

export const Card = ({ info }) => {
  const [active, setActive] = useState(false);

  return (
    <StyledCard>
      <p>{info.name}</p>
      <div className="imageThumb">
        <img src={info.imageLink} alt="flag" />
      </div>
    </StyledCard>
  );
};
