import { useState } from "react";
import {
  getGeo,
  getForecast,
  getCurrent,
  getIconUrl,
} from "./service/weatherApi";
import {
  StyledCurrentWeather,
  StyledMainWeather,
  StyledSearchForm,
  StyledInfoCatds,
} from "./StyledApp";
import { Card } from "./components/Card";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { LuWind } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import { WiRaindrops } from "react-icons/wi";
import { WiSunrise } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";

const isRain = (weather) => {
  return Object.keys(weather).includes("rain");
};

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes;
  return { strTime, ampm };
}

function App() {
  const [city, setCity] = useState("");
  const [findCity, setFindCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const onSubmit = async () => {
    try {
      const geoData = await getGeo(city);
      const weather = await getCurrent(geoData);
      const forecast = await getForecast(geoData);
      console.log(weather);
      setWeather(weather);
      setForecast(forecast);
      setFindCity(city);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <StyledCurrentWeather>
        <StyledMainWeather>
          {weather === null ? (
            <p>Enter ciny name</p>
          ) : (
            <>
              <p className="name">{findCity}</p>
              <img
                src={getIconUrl(weather.weather[0].icon)}
                alt="weather icon"
              ></img>
              <p className="temp">
                {Math.ceil(weather.main.temp)}
                <span>°C</span>
              </p>
              <p className="desc">{weather.weather[0].description}</p>
            </>
          )}
        </StyledMainWeather>
        <div>
          <StyledSearchForm
            onSubmit={(event) => {
              event.preventDefault();
              onSubmit();
            }}
          >
            <input
              type="text"
              onChange={({ target }) => setCity(target.value)}
            ></input>
          </StyledSearchForm>
          {weather && (
            <StyledInfoCatds>
              <Card
                name={"Feels like"}
                value={Math.ceil(weather.main.feels_like)}
                sp="°C"
                Icon={FaTemperatureThreeQuarters}
                color={"orange"}
                customSpan={false}
              />
              <Card
                name={"Wind"}
                value={weather.wind.speed}
                sp="m/s"
                Icon={LuWind}
                color={"blue"}
              />
              <Card
                name={"Humidity"}
                value={weather.main.humidity}
                sp="%"
                Icon={WiHumidity}
                color={"blue"}
              />
              <Card
                name={"Rain"}
                value={isRain(weather) ? weather.rain["1h"] : "N/A"}
                sp=" mm"
                Icon={WiRaindrops}
                color={"blue"}
              />
              <Card
                name={"Sunrise"}
                value={formatAMPM(new Date(weather.sys.sunrise)).strTime}
                sp={` ${formatAMPM(new Date(weather.sys.sunrise)).ampm}`}
                Icon={WiSunrise}
                color={"orange"}
              />
              <Card
                name={"Sunset"}
                value={formatAMPM(new Date(weather.sys.sunset)).strTime}
                sp={` ${formatAMPM(new Date(weather.sys.sunset)).ampm}`}
                Icon={WiSunset}
                color={"orange"}
              />
            </StyledInfoCatds>
          )}
        </div>
      </StyledCurrentWeather>
    </div>
  );
}

export default App;
