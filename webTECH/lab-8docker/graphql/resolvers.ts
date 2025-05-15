import { db } from "./data";
import { Weather } from "@/mongoose/weather";
import { connectToDatabase } from "@/mongoose/mongooseConnect";

declare interface WeatherInterface {
  zip: string;
  weather: string;
  tempC: string;
  tempF: string;
  friends: string[];
}
export const resolvers = {
  Query: {
    weather: async (_: any, param: WeatherInterface) => {
      await connectToDatabase();
      const result = await Weather.find();
      return result;
    },
  },
  Mutation: {
    weather: async (_: any, param: { data: WeatherInterface }) => {
      await connectToDatabase();
      const data = await Weather.findOne({ zip: param.data.zip });
      if (!data) {
        await Weather.create(param.data);
      } else {
        await Weather.findOneAndUpdate({ zip: param.data.zip }, param.data);
      }
      const result = await Weather.find();
      return result;
    },
  },
};
