import axios from "axios";

export const getWeatherGQL = async (
  zip: string,
  fields: string[] = ["tempC", "tempF", "weather"]
) => {
  try {
    const response = await axios.post("/api/graphql", {
      query: `query weather { weather(zip: \"${zip}\") {  ${fields.join(
        " "
      )}  }}`,
    });
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};
