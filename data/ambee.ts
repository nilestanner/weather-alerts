import axios from 'axios';
import * as qs from 'query-string';

import { LatLong, OpenWeatherOncallResponse, OpenWeatherUnits } from '../models';
import { LastestPollenResponse } from '../models/ambee';
import { AMBEE_API_KEY } from './config';

const apiHost = 'https://api.ambeedata.com/';

export async function latestPollen(latLong: LatLong) {
  const options = {
    url: `${apiHost}latest/pollen/by-lat-lng`,
    params: {lat: latLong.lat, lng: latLong.long},
    headers: {'x-api-key': AMBEE_API_KEY, 'Content-type': 'application/json'}
  };
  	
  const result = (await axios.request(options)).data as LastestPollenResponse;
  return result.data;
}