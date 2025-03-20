import { Card } from "./components/Card/Card";
import { useState } from "react";

function App() {
  const [activiCity, setActiveCity] = useState("");
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        justifyContent: "center",
      }}
      className="App"
    >
      <Card
        activeCity={activiCity}
        setActiveCity={setActiveCity}
        info={{
          name: "New York",
          timerZone: -5,
          imageLink:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Arms_of_New_York_City.svg/800px-Arms_of_New_York_City.svg.png",
        }}
      />
      <Card
        activeCity={activiCity}
        setActiveCity={setActiveCity}
        info={{
          name: "London",
          timerZone: 0,
          imageLink:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Lesser_Coat_of_Arms_of_The_City_of_London.svg/800px-Lesser_Coat_of_Arms_of_The_City_of_London.svg.png",
        }}
      />
      <Card
        activeCity={activiCity}
        setActiveCity={setActiveCity}
        info={{
          name: "Kyiv",
          timerZone: 2,
          imageLink:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/COA_of_Kyiv_Kurovskyi.svg/800px-COA_of_Kyiv_Kurovskyi.svg.png",
        }}
      />
      <Card
        activeCity={activiCity}
        setActiveCity={setActiveCity}
        info={{
          name: "Beijing ",
          timerZone: 8,
          imageLink:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E5%9B%BD%E5%BE%BD.png/600px-%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E5%9B%BD%E5%BE%BD.png",
        }}
      />
      <Card
        activeCity={activiCity}
        setActiveCity={setActiveCity}
        info={{
          name: "Sydney",
          timerZone: 11,
          imageLink:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Sydney_-_COA.svg/800px-Sydney_-_COA.svg.png",
        }}
      />
    </div>
  );
}

export default App;
