import axios from 'axios';
import * as qs from 'query-string';

import { LatLong, OpenWeatherOncallResponse, OpenWeatherUnits } from '../models';
import { OPEN_WEATHER_API_KEY } from './config';

// Open Weather Docs: https://openweathermap.org/api

const apiHost = 'https://api.openweathermap.org/data/2.5/';

export async function onecall(
  latLong: LatLong,
  exclude: Array<string> = [],
  units: OpenWeatherUnits = OpenWeatherUnits.IMPERIAL,
  additionalArgs: {[key: string]: string} = {},
): Promise<OpenWeatherOncallResponse> {
  const queries = {
    lat: latLong.lat,
    lon: latLong.long,
    appId: OPEN_WEATHER_API_KEY,
    units,
    exclude: exclude.join(','),
    ...additionalArgs,
  };
  const queryString = qs.stringify(queries);
  try {
    const result = await axios.get(`${apiHost}onecall?${queryString}`);
    return result.data as unknown as OpenWeatherOncallResponse;
  } catch (err) {
    console.error(err);
    throw err;
  }
  
}