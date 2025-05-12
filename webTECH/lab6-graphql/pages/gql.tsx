import { useState } from "react";
import { getWeatherGQL } from "@/service/weatherGQL";
import { FormEvent, ChangeEvent } from "react";

const arrayChanger = (field: string, array: string[], type: boolean) => {
  let arr: string[] = [...array];
  if (type) {
    arr.push(field);
  } else {
    arr = arr.filter((item) => item !== field);
  }
  return arr;
};

export default function GQL() {
  const [zip, setZip] = useState<string>("");
  const [fields, setFields] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string>("");
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const data =
      fields.length > 0
        ? await getWeatherGQL(zip, fields)
        : await getWeatherGQL(zip);
    setAnswer(JSON.stringify(data));
  };
  const onCheck = (filed: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setFields((prev: string[]) => {
      return arrayChanger(filed, prev, event.target.checked);
    });
  };
  return (
    <>
      <h1>GraphQL weather</h1>
      <form onSubmit={onSubmit} style={{ marginTop: "30px" }}>
        <label>
          ZIP code
          <input
            value={zip}
            onChange={({ target }) => setZip(target.value)}
            type="text"
          />
        </label>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>
            tempC
            <input onChange={onCheck("tempC")} type="checkbox"></input>
          </label>
          <label>
            weather
            <input onChange={onCheck("weather")} type="checkbox"></input>
          </label>
          <label>
            tempF
            <input onChange={onCheck("tempF")} type="checkbox"></input>
          </label>
        </div>
        <button type="submit">send</button>
      </form>
      <p style={{ marginTop: "30px" }}>Response</p>
      <p
        style={{
          display: "inline-block",
          width: "600px",
          minHeight: "400px",
          border: "1px solid black",
        }}
      >
        {answer}
      </p>
    </>
  );
}
