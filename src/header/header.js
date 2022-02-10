import { createAboutPage } from "../pages/about.js";
import { createAuthPage } from "../pages/auth.js";
import { createHomePage } from "../pages/home.js";
import { refs } from "../refs/index.js";

const items = [
  {
    name: "Home",
    path: "/home",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Sign in",
    path: "/signin",
  },
  {
    name: "Sign up",
    path: "/signup",
  },
];

const createHeaderMarkup = () => {
  return items.reduce((acc, item) => {
    acc += `<li class="navListItem" data-navlink="${item.path}">${item.name}</li>`;
    return acc;
  }, "");
};

const setActiveLink = (targetElement) => {
  // 6. определить какой элемент является активным на текущий момент
  const activeElement = refs.navList.querySelector(".navListItemActive");
  //   7. удалить активный класс с активного элемента
  activeElement.classList.remove("navListItemActive");
  //   8. добавить активный класс на элемент на который произошел клик(targetElement)
  targetElement.classList.add("navListItemActive");
};

export const createHeader = () => {
  // 1. создать разметку списка навигации
  refs.navList.innerHTML = createHeaderMarkup();
  // 2. сделать первый элемент списка активным
  refs.navList.firstElementChild.classList.add("navListItemActive");
  createHomePage();
  // 3. добавить слушатель события ('click') на элементы списка
  refs.navList.addEventListener("click", (e) => {
    //   4. исключить клик на список (клик должен срабатывать только на элементе списка '<li></li>' )
    if (e.target === e.currentTarget) return;
    // 5. при клике на элемент устанавливать активный класс на элементе, при этом убирать активный с ранее выбранного элемента (элемента на котором на текущий момент установлен активный класс ). При этом в функцию передается ссылка на элемент на котором произошло таргетирование (targetElement)
    setActiveLink(e.target);
    if (e.target.dataset.navlink === "/home") createHomePage();
    if (e.target.dataset.navlink === "/about") createAboutPage();
    if (e.target.dataset.navlink === "/signup")
      createAuthPage({
        name: "Sign up",
        path: "/signup",
      });
    if (e.target.dataset.navlink === "/signin")
      createAuthPage({
        name: "Sign in",
        path: "/signin",
      });
  });
};
