import { createHeader } from "./header/header.js";

createHeader();

const rangeInput = document.querySelector('[name="rangeInput"]');
rangeInput.labels = ["0", "500", "1000"];

rangeInput.min = 0;
rangeInput.max = 1000;
rangeInput.addEventListener("change", (e) => console.log(e.target.value));

// // document.addEventListener(
// //   "scroll",
// //   _.throttle(() => {
// //     console.log("Scroll handler call every 300ms");
// //   }, 3000)
// // );

// const fn = () => {
//   console.log("Scroll handler call after 300ms pause");
// };

// document.addEventListener("scroll", _.debounce(fn, 1000));
