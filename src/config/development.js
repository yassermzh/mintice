// @flow
import type { Config } from "./index";

const config: Config = {
  lengths: {
    blank: 500 - 100,
    feedback: 700 - 200,
    fixation: 800 - 300,
    trial: 600 + 200 - 400,
    breathing: {
      preInhale: 400,
      inhale: 3000,
      hold: 4000,
      exhale: 6000,
    },
    breathings: 2 * (6000 + 4000 + 3000 + 400),
  },
  sessions: 2,
  sessionBlocks: 3,
  blockTrials: 4,
  testTrials: 1,
  goVsNogoPercentage: 80, // between 0 and 10,
  successValue: 5,
  baseUrl: "http://192.168.100.103:3000",
  newSessionAfter: {
    unit: "minutes",
    quantity: 1,
  },
};

module.exports = config;
