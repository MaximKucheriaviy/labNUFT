import { useState, useEffect } from "react";
import { getWeatherGQL, createWeatherGQL } from "@/service/weatherGQL";
import { FormEvent } from "react";

function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

export default function GQL() {
  const [zip, setZip] = useState<string>("");
  const [tempC, setTempC] = useState<number>(0);
  const [tempF, setTempF] = useState<number>(0);
  const [weather, setWeather] = useState<string>("");

  const [answer, setAnswer] = useState<WeatherGQLResponse[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getWeatherGQL();
        console.log(data);

        setAnswer(data.weather);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!zip || !weather) {
      return;
    }
    try {
      const data = await createWeatherGQL(
        tempC.toString(),
        tempF.toString(),
        zip,
        weather
      );
      setAnswer(data.weather);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>GraphQL weather</h1>
      <form
        onSubmit={onSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginTop: "30px",
        }}
      >
        <label>
          ZIP code
          <input
            value={zip}
            onChange={({ target }) => setZip(target.value)}
            type="text"
          />
        </label>
        <label>
          Temperature
          <input
            value={tempC}
            onChange={({ target }) => {
              setTempC(target.valueAsNumber);
              setTempF(celsiusToFahrenheit(target.valueAsNumber));
            }}
            type="number"
          />
        </label>
        <p>
          temperature f: <span>{tempF}</span>
        </p>
        <label>
          weather
          <input
            value={weather}
            onChange={({ target }) => setWeather(target.value)}
            type="text"
          />
        </label>

        <button type="submit">send</button>
      </form>
      <p style={{ marginTop: "30px" }}>Response</p>

      {answer.map((item) => (
        <div
          style={{
            border: "1px solid black",
            width: "300px",
            marginBottom: "30px",
          }}
          key={item.zip}
        >
          <p>
            zip: <span>{item.zip}</span>
          </p>
          <p>
            weather: <span>{item.weather}</span>
          </p>
          <p>
            tempC: <span>{item.tempC}</span>
          </p>
          <p>
            tempF: <span>{item.tempF}</span>
          </p>
        </div>
      ))}
    </>
  );
}
