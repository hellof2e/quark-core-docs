import baseConfig from "./baseConfig";

let config: any = {};

config = {
  ...baseConfig,
};

export const {
  nav,
  docs,
  version,
  demoUrl,
  homePage,
  versions,
  header,
  repository,
} = config;
