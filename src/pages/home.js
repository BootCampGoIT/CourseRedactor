import { refs } from "../refs/index.js";

export const createHomePage = () => {
  refs.main.innerHTML = "<h2>Home page</h2>";
};

// const createHeaderForThisPage = () => {
//     return "<h2>Home page</h2>";
//   };
//   const createProductMarkup = () => {
//     return `<ul className='productList'>
//         <li className='productListItem'>Product1</li>
//         <li className='productListItem'>Product1</li>
//         <li className='productListItem'>Product1</li>
//         <li className='productListItem'>Product1</li>
//       </ul>`;
//   };

//   refs.main.innerHTML = createHeaderForThisPage();
//   setTimeout(
//     () => refs.main.insertAdjacentHTML("beforeend", createProductMarkup()),
//     3000
//   );
