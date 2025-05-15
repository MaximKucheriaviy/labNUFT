type Person = {
  name: string;
  phoneNumber: string;
  email: string;
  userAgent: string;
  hexcolor: string;
};
type Fruit = {
  fruit: string;
  size: string;
  color: string;
};

type personResponse = Person[];

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

type WeatherGQLResponse = {
  zip: string;
  weather: string;
  tempC: string;
  tempF: string;
  friends: string[];
};
