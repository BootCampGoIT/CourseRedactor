import { refs } from "../refs/index.js";

const createAuthForm = (name) => {
  return `
    <form name="authForm">
        <label>
            Email
            <input type="email" name="email" required />
        </label>
        <label>
            Password
            <input type="password" name="password" required/>
        </label>
        <button type="submit">${name}</button>
    </form>`;
};

export const createAuthPage = (currentPage) => {
  refs.main.innerHTML = createAuthForm(currentPage.name);
  const user = {
    email: "",
    password: "",
  };
  const authForm = document.forms.authForm;

  authForm.addEventListener(
    "input",
    (e) => (user[e.target.name] = e.target.value)
  );
  authForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(user);
  });
};
