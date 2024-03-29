export enum OpenWeatherUnits {
  IMPERIAL = 'imperial',
  STANDARD = 'standard',
  METRIC = 'mertic',
}

export interface OpenWeatherMinute {
  dt: number,
  precipitation: number,
}

export interface OpenWeatherHour {
  dt: number,
  temp: number,
  feels_like: number,
  pressure: number,
  humidity: number,
  dew_point: number,
  uvi: number,
  clouds: number,
  visibility: number,
  wind_speed: number,
  wind_deg: number,
  wind_gust: number,
  weather: Array<any>,
  pop: number,
  rain?: {
    '1h': number,
  },
  snow?: {
    '1h': number,
  }
}

export interface OpenWeatherCurrent extends OpenWeatherHour {
  sunset: number,
  sunrise: number,
}

export interface OpenWeatherDay {
  dt: number,
  sunrise: number,
  sunset: number,
  moonrise: number,
  moonset: number,
  moon_phase: number,
  temp: {
    day: number,
    min: number,
    max: number,
    night: number,
    eve: number,
    morn: number,
  },
  feels_like: {
    day: number,
    night: number,
    eve: number,
    morn: number,
  },
  pressure: number,
  humidity: number,
  dew_point: number,
  uvi: number,
  clouds: number,
  visibility: number,
  wind_speed: number,
  wind_deg: number,
  wind_gust: number,
  rain?: number,
  snow?: number,
  weather: Array<any>,
}

export interface OpenWeatherAlert {
  sender_name: string,
  event: string,
  start: number,
  end: number,
  description: string,
}

export interface OpenWeatherOncallResponse {
  lat: number,
  lon: number,
  timezone: string,
  timezone_offset: number,
  current?: OpenWeatherCurrent,
  minutely?: Array<OpenWeatherMinute>,
  hourly?: Array<OpenWeatherHour>,
  daily?: Array<OpenWeatherDay>,
  alerts?: Array<OpenWeatherAlert>,
}