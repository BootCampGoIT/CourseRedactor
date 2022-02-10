import { refs } from "../refs/index.js";

const cars = [
  {
    id: 1,
    name: "Fiat",
    price: 123,
  },
  {
    id: 2,
    name: "Toyota",
    price: 234,
  },
  {
    id: 3,
    name: "BMV",
    price: 345,
  },
  {
    id: 4,
    name: "VW",
    price: 456,
  },
  {
    id: 5,
    name: "Peugeot",
    price: 567,
  },
  {
    id: 6,
    name: "Jaguar",
    price: 678,
  },
];

const createMarkup = (cars) => {
  const carList = document.querySelector(".carList");
  carList.innerHTML = cars
    .map(
      (car) => `
  <li class="carListItem">
    <p>Name:${car.name}</p>
    <p>Price:${car.price}</p>
   </li>`
    )
    .join("");
};

const getFilteredList = (e) => {
  const filter = e.target.value;
  console.log(filter);

  const list = cars.filter(
    (car) =>
      car.name.toLowerCase().includes(filter.toLowerCase()) ||
      car.price <= Number(filter)
  );
  createMarkup(list);
};

export const createHomePage = () => {
  refs.main.innerHTML = `
  <div class='homepage'>
    <h2>Home page</h2> 
    <label>Filter: 
    <input type="text" class="carFilter"/>
    </label>
    <ul class="carList"></ul>
  </div>`;
  createMarkup(cars);
  const carFilter = document.querySelector(".carFilter");
  carFilter.addEventListener("input", _.throttle(getFilteredList, 300));
};
