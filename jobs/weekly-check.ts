import { LATLONG } from "../data/config";
import { onecall } from "../data/openweather";
import { sendSlackMessage } from "../messaging/slack";

async function weeklyCheck() {
  const weatherData = await onecall(LATLONG, ['current', 'minutely', 'hourly', 'alerts']);
  const nextWeek = weatherData.daily!.slice(1,7);
  const totalRain = nextWeek.reduce((total, day) => {
    return total + (day.rain ?? 0) + (day.rain ?? 0);
  }, 0);
  sendSlackMessage(`Total Percipitation in the next week: ${totalRain}`);
}

weeklyCheck().then(() => {
  console.log('Complete');
})