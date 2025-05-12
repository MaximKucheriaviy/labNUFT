import { StyledCard } from "./StyledCard";
import { useState } from "react";
import { useEffect } from "react";

export const Card = ({ info, activeCity, setActiveCity }) => {
  const [active, setActive] = useState(false);
  const date = new Date(Date.now() + (info.timerZone - 2) * 3600000);
  useEffect(() => {
    if (activeCity === info.name) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [activeCity, info.name]);
  return (
    <StyledCard
      onClick={() => {
        setActiveCity(info.name);
      }}
      active={active ? 1 : 0}
    >
      <p className="name">{info.name}</p>
      <div className="imageThumb">
        <img src={info.imageLink} alt="flag" />
      </div>
      <p className="timer">{date.toLocaleString("ru-RU")}</p>
    </StyledCard>
  );
};
