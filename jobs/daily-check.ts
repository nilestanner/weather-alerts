import { LATLONG, THRESHOLDS } from "../data/config";
import { onecall } from "../data/openweather";
import { sendSlackMessage } from "../messaging/slack";
import { OpenWeatherDay } from "../models";



async function dailyCheck() {
  const weatherData = await onecall(LATLONG, ['current', 'minutely', 'hourly', 'alerts']);
  const tomorrow = weatherData.daily![1];

  // check for wind speeds
  if (tomorrow.wind_gust > THRESHOLDS.wind_gust) {
    sendSlackMessage(`Wind gusts tomorrow of ${tomorrow.wind_gust} mph`);
  }
}

dailyCheck().then(() => {
  console.log('Complete');
});