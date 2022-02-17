import { languages } from "./index.js";
import { state } from "../state/state.js";

export const getHeaderNavigationValue = (name) => {
  return languages[state.settings.language].header.navigation[name];
};

export const getHomePageValue = (name) => {
  return languages[state.settings.language].homePage[name];
};

export const getSettingsValue = (name) => {
  return languages[state.settings.language].settings[name];
};
