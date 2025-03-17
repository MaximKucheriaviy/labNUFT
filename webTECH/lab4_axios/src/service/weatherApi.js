import axios from "axios";

axios.defaults.baseURL = "http://api.openweathermap.org";
const appidDefault = "8322956a2fe976317c52f1ea622a56f2";
const appidWeather = "1f607f4508efb28d5bae55a9be5ae5a4";

export const getGeo = async (name) => {
  const result = await axios.get("/geo/1.0/direct", {
    params: { q: name, appid: appidDefault, limit: 1 },
  });
  return {
    lat: result.data[0].lat,
    lon: result.data[0].lon,
    name: result.data[0].name,
  };
};

export const getFCurrent = async ({ lat, lon }) => {
  const result = await axios.get("/data/2.5/weather", {
    params: { lat, lon, appid: appidDefault, units: "metric" },
  });
  return result;
};

export const getForecast = async ({ lat, lon }) => {
  const result = await axios.get("/data/2.5/forecast/daily", {
    params: { lat, lon, appid: appidWeather, units: "metric", cnt: 7 },
  });
  return result;
};

export const getIconUrl = (icon) => {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
};
