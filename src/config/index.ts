import navConfig from "./config.json";
import headeNavConfig from "./headeNavConfig";

let config: any = {};

config = {
  ...navConfig,
  ...headeNavConfig,
};

export const { docs, header } = config;
