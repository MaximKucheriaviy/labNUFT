type CardProps = {
  name: string;
  value: string | number;
  sp: string;
  Icon: ElementType;
  color: string;
  customSpan?: boolean;
};

type GeoData = {
  lat: number;
  lon: number;
  name: string;
};

type WeatherArr = {
  icon: string;
  description: string;
};

type WeatherData = {
  dt_txt: string;
  dt: number;
  weather: WeatherArr[];
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  rain: {
    "1h": string;
  };
  sys: {
    sunrise: number;
    sunset: sunset;
  };
};
