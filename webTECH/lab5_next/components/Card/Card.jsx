import { StyledCard } from "./StyledCard";
import { useState } from "react";

export const Card = ({ info }) => {
  const [active, setActive] = useState(false);

  return (
    <StyledCard onClick={() => setActive(!active)}>
      <div className={`back ${active ? "active" : ""}`}>
        <p>{info.phoneNumber}</p>
        <p>{info.email}</p>
      </div>
      <div className={`front ${active ? "active" : ""}`}>
        <p>{info.name}</p>
      </div>
    </StyledCard>
  );
};
