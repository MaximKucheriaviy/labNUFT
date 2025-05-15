import axios from "axios";

const appidDefault = "8322956a2fe976317c52f1ea622a56f2";

export const getGeo = async (name: string) => {
  const result = await axios.get(
    "http://api.openweathermap.org/geo/1.0/direct",
    {
      params: { q: name, appid: appidDefault, limit: 1 },
    }
  );
  return {
    lat: result.data[0].lat,
    lon: result.data[0].lon,
    name: result.data[0].name,
  } as GeoData;
};

export const getCurrent = async ({ lat, lon }: GeoData) => {
  const result = await axios.get(
    "http://api.openweathermap.org/data/2.5/weather",
    {
      params: { lat, lon, appid: appidDefault, units: "metric" },
    }
  );
  return result.data as WeatherData;
};

export const getForecast = async ({ lat, lon }: GeoData) => {
  const result = await axios.get(
    "http://api.openweathermap.org/data/2.5/forecast",
    {
      params: { lat, lon, appid: appidDefault, units: "metric" },
    }
  );

  const arr: WeatherData[] = result.data.list.reduce(
    (acc: WeatherData[], item: WeatherData) => {
      const itemDate = new Date(item.dt_txt);
      if (itemDate.getDate() === new Date(Date.now()).getDate()) {
        return acc;
      }
      if (acc.length === 0) {
        acc.push(item);
        return acc;
      }
      const lastDate = new Date(acc[acc.length - 1].dt_txt);
      if (itemDate.getDate() !== lastDate.getDate()) {
        acc.push(item);
      }
      return acc;
    },
    []
  );
  return arr;
};

export const getIconUrl = (icon: string) => {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
};
