import { useState } from "react";
import {
  getGeo,
  getForecast,
  getCurrent,
  getIconUrl,
} from "@/service/weatherApi";
import {
  StyledCurrentWeather,
  StyledMainWeather,
  StyledSearchForm,
  StyledInfoCatds,
  ButtonDiv,
} from "@/components/StyledApp";
import { Card } from "@/components/Card";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { LuWind } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import { WiRaindrops } from "react-icons/wi";
import { WiSunrise } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

const isRain = (weather: Object) => {
  return Object.keys(weather).includes("rain");
};

function formatAMPM(date: Date) {
  var hours = date.getHours();
  var minutes: number | string = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes;
  return { strTime, ampm };
}

function Weather() {
  const [city, setCity] = useState("");
  const [findCity, setFindCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<WeatherData[]>([]);
  const [current, setCurrent] = useState(0);
  const onSubmit = async () => {
    try {
      const geoData = await getGeo(city);
      const forecast = await getForecast(geoData);
      const weather = await getCurrent(geoData);
      console.log(weather);

      forecast.unshift(weather);
      setWeather(weather);
      setCurrent(0);
      setForecast(forecast);
      setFindCity(city);
    } catch (err) {
      console.log(err);
    }
  };

  const onNext = () => {
    if (current + 1 >= forecast.length) {
      return;
    }
    setWeather(forecast[current + 1]);
    setCurrent((prev) => prev + 1);
  };
  const onPrev = () => {
    if (current <= 0) {
      return;
    }
    setWeather(forecast[current - 1]);
    setCurrent((prev) => prev - 1);
  };
  return (
    <div className="App">
      <StyledCurrentWeather>
        <StyledMainWeather>
          {weather === null ? (
            <p>Enter city name</p>
          ) : (
            <>
              <p className="date">
                {new Date(weather.dt * 1000).toLocaleDateString()}
              </p>
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
            <div>
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
                  value={
                    current === 0
                      ? formatAMPM(new Date(weather.sys.sunrise)).strTime
                      : ""
                  }
                  sp={` ${
                    current === 0
                      ? formatAMPM(new Date(weather.sys.sunrise)).ampm
                      : ""
                  }`}
                  Icon={WiSunrise}
                  color={"orange"}
                />
                <Card
                  name={"Sunset"}
                  value={
                    current === 0
                      ? formatAMPM(new Date(weather.sys.sunset)).strTime
                      : ""
                  }
                  sp={` ${
                    current === 0
                      ? formatAMPM(new Date(weather.sys.sunset)).ampm
                      : ""
                  }`}
                  Icon={WiSunset}
                  color={"orange"}
                />
              </StyledInfoCatds>
              <ButtonDiv>
                <button onClick={onPrev} className="controlButton">
                  <TbPlayerTrackPrevFilled />
                </button>
                <button onClick={onNext} className="controlButton">
                  <TbPlayerTrackNextFilled />
                </button>
              </ButtonDiv>
            </div>
          )}
        </div>
      </StyledCurrentWeather>
    </div>
  );
}

export default Weather;
