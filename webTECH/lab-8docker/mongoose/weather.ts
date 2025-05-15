import { Schema, model, models } from "mongoose";

const weatherSchema = new Schema({
  zip: String,
  weather: String,
  tempC: String,
  tempF: String,
  friends: [String],
});

export const Weather = models.weather || model("weather", weatherSchema);
