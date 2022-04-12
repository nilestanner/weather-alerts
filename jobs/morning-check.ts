import { latestPollen } from "../data/ambee";
import { LATLONG, THRESHOLDS } from "../data/config";
import { onecall } from "../data/openweather";
import { sendSlackMessage } from "../messaging/slack";
import { OpenWeatherDay } from "../models";

async function morningCheck() {
  const pollenData = (await latestPollen(LATLONG))[0];
  if (pollenData.Count.grass_pollen > THRESHOLDS.pollen) {
    sendSlackMessage(`(Risk "${pollenData.Risk.grass_pollen}") Grass Pollens today at ${pollenData.Count.grass_pollen}`);
  }

  if (pollenData.Count.tree_pollen > THRESHOLDS.pollen) {
    sendSlackMessage(`(Risk "${pollenData.Risk.tree_pollen}") Tree Pollens today at ${pollenData.Count.tree_pollen}`);
  }

  if (pollenData.Count.weed_pollen > THRESHOLDS.pollen) {
    sendSlackMessage(`(Risk "${pollenData.Risk.weed_pollen}") Weed Pollens today at ${pollenData.Count.weed_pollen}`);
  }
}

morningCheck().then(() => {
  console.log('Complete');
});