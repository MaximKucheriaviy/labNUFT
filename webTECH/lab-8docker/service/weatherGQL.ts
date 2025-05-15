import axios from "axios";

const addQuotes = (l: string) => `\"${l}\"`;

export const getWeatherGQL = async (
  fields: string[] = ["tempC", "tempF", "weather", "zip"]
) => {
  try {
    const response = await axios.post("/api/graphql", {
      query: `query weather { weather {  ${fields.join(" ")}  }}`,
    });
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const createWeatherGQL = async (
  tempC: string,
  tempF: string,
  zip: string,
  weather: string
) => {
  try {
    const response = await axios.post("/api/graphql", {
      query: `mutation CreateOrUpdateWeather { weather (data: {
      tempC: ${addQuotes(tempC)}
      tempF: ${addQuotes(tempF)}
      zip: ${addQuotes(zip)}
      weather: ${addQuotes(weather)}
      friends: ["09112"]
      } ) { tempC tempF zip weather }}`,
    });
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};

// mutation CreateOrUpdateWeather {
//   weather(data: {
//     tempC: "45"
//     tempF: "12"
//     zip: "09102"
//     weather: "Suny"
//     friends: ["09112"]
//   }) {
//     tempC
//     tempF
//     zip
//     weather
//   }
// }
