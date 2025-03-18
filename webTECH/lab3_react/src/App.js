import { Card } from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Card
        info={{
          name: "New York",
          imageLink:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Arms_of_New_York_City.svg/800px-Arms_of_New_York_City.svg.png",
        }}
      />
    </div>
  );
}

export default App;
