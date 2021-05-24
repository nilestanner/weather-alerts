import { SLACK_WEBHOOK } from "../data/config";

const slackNotify = require('slack-notify');

const slack = slackNotify(SLACK_WEBHOOK);

export async function sendSlackMessage (message: string, logOnly: boolean = false) {
  if (logOnly) {
    console.log(message);
  } else {
    await slack.note(message);
  }
}