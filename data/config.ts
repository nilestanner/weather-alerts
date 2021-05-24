require('dotenv').config();
import { LatLong } from '../models';

export const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY;
export const SLACK_WEBHOOK = process.env.SLACK_WEBHOOK;

export const LATLONG: LatLong = {
  lat: parseFloat(process.env.LAT ?? '0'),
  long: parseFloat(process.env.LONG ?? '0'),
}

export const THRESHOLDS = {
  wind_gust: parseFloat(process.env.THRESHOLD_WIND_GUST ?? '999999'),
}