import { useEffect } from "react";
import { getGeo, getForecast } from "./service/weatherApi";

function App() {
  useEffect(() => {
    (async () => {
      try {
        const geoResult = await getGeo("Київ");
        const weatherData = await getForecast(geoResult);
        console.log(weatherData);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return <div className="App"></div>;
}

export default App;
