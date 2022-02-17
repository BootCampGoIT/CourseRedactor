import { createHeader } from "../header/header.js";
import { getSettingsValue } from "../languages/methods.js";
import { refs } from "../refs/index.js";
import { state } from "../state/state.js";

const languages = [
  {
    name: "English",
    value: "english",
  },
  {
    name: "Українська",
    value: "ukrainian",
  },
  {
    name: "Русский",
    value: "russian",
  },
];

const createOption = (languageItem) => `
    <option value="${languageItem.value}" ${
  languageItem.value === state.settings.language ? "selected" : ""
} >${languageItem.name}</option>
`;

const createLanguageSelector = (languages) => {
  const options = languages.map(createOption).join("");
  return `
  <select name="languagesSelector"> 
    ${options} 
  </select>`;
};

export const createSettingsPage = () => {
  refs.main.innerHTML = `
    <h2>Settings</h2>
    <label>
    ${getSettingsValue("language")}: ${createLanguageSelector(languages)}
    </label>
  `;
  const selectRef = document.querySelector('[name="languagesSelector"]');

  const getActiveLanguage = (e) => {
    console.log(e.target.value);

    localStorage.setItem("language", JSON.stringify(e.target.value));
    state.settings.language = e.target.value;
    createLanguageSelector(languages);
    createHeader();
  };

  selectRef.addEventListener("change", getActiveLanguage);
};
