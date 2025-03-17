import { getHello, getFruit, getNames } from "./service";
import { useEffect, useState } from "react";
import { StyledHello } from "./components/Styledello";
import { Card } from "./components/Card/Card";

function App() {
  const [hello, setHello] = useState("");
  const [fruit, setFruit] = useState({});
  const [names, setNames] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const helloResult = await getHello();
        const fruitResult = await getFruit();
        const namesResult = await getNames();
        setHello(helloResult.data);
        setFruit(fruitResult.data);
        setNames(namesResult.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <div className="App">
      <StyledHello>
        <p>{hello}</p>
      </StyledHello>
      <StyledHello>
        <p>{`фрукт: ${fruit.fruit}`}</p>
        <p>{`розмір: ${fruit.Large}`}</p>
        <p>{`колір: ${fruit.color}`}</p>
      </StyledHello>
      <StyledHello style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
        {names.map((item) => (
          <Card key={item.name} info={item} />
        ))}
      </StyledHello>
    </div>
  );
}

export default App;
