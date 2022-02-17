import { getHeaderNavigationValue } from "../languages/methods.js";
import { createAboutPage } from "../pages/about.js";
import { createAuthPage } from "../pages/auth.js";
import { createHomePage } from "../pages/home.js";
import { createSettingsPage } from "../pages/settings.js";
import { refs } from "../refs/index.js";

const items = [
  {
    name: "home",
    path: "/home",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "signIn",
    path: "/signin",
  },
  {
    name: "signUp",
    path: "/signup",
  },
  {
    name: "settings",
    path: "/settings",
  },
];

const createHeaderMarkup = () => {
  return items.reduce((acc, item) => {
    acc += `<li class="navListItem" data-navlink="${
      item.path
    }">${getHeaderNavigationValue(item.name)}</li>`;
    return acc;
  }, "");
};

const setActiveLink = (targetElement) => {
  const activeElement = refs.navList.querySelector(".navListItemActive");
  if (activeElement) {
    activeElement.classList.remove("navListItemActive");
    targetElement.classList.add("navListItemActive");
  }
};

export const createHeader = () => {
  refs.navList.innerHTML = createHeaderMarkup();
  refs.navList.firstElementChild.classList.add("navListItemActive");
  createHomePage();
  // refs.navList.lastElementChild.classList.add("navListItemActive");
  // createSettingsPage();
  refs.navList.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) return;
    setActiveLink(e.target);

    switch (e.target.dataset.navlink) {
      case "/about":
        createAboutPage();
        break;
      case "/signup":
        createAuthPage({
          name: "Sign up",
          path: "/signup",
        });
        break;
      case "/signin":
        createAuthPage({
          name: "Sign in",
          path: "/signin",
        });
        break;
      case "/settings":
        createSettingsPage();
        break;
      default:
        createHomePage();
    }
  });
};
