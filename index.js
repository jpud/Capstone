import { Header, Nav, Main, Footer } from "./components";
import * as state from "./space";
import Navigo from "navigo";
import { capitalize } from "lodash";

import axios from "axios";

import dotenv from "dotenv";
// dotenv.config();

const router = new Navigo("/");

function render(st) {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
  `;

  router.updatePageLinks();

  addEventListeners(st);
}

function addEventListeners(st) {
  // add event listeners to Nav items for navigation
  /**
   * This event listener conflicts with the "data-navigo" attribute in Nav.js component
   */
  // document.querySelectorAll("nav a").forEach((navLink) =>
  //   navLink.addEventListener("click", (event) => {
  //     event.preventDefault();
  //     render(state[event.target.title]);
  //   })
  // );

  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );

  if (st.view === "Order") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const toppings = [];
      // Interate over the toppings input group elements
      for (let input of inputList.toppings) {
        // If the value of the checked attribute is true then add the value to the toppings array
        if (input.checked) {
          toppings.push(input.value);
        }
      }

      const requestData = {
        customer: inputList.customer.value,
        crust: inputList.crust.value,
        cheese: inputList.cheese.value,
        sauce: inputList.sauce.value,
        toppings: toppings
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.PIZZA_PLACE_API_URL}`, requestData)
        .then(response => {
          // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          state.Pizza.pizzas.push(response.data);
          router.navigate("/Pizza");
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
}

//  ADD ROUTER HOOKS HERE ...
router.hooks({
  before: (done, params) => {
    const page =
      params && params.data && params.data.page
        ? capitalize(params.data.page)
        : "Home";

    if (page === "Home") {
      axios
        .get(`https://api.wheretheiss.at/v1/satellites/25544`)
        .then(response => {
          state.Home.satellite = {};
          state.Home.satellite.iss = response.data.name;
          state.Home.satellite.lat = response.data.latitude;
          state.Home.satellite.long = response.data.longitude;
          state.Home.satellite.velo = response.data.velocity;
          state.Home.satellite.vision = response.data.visibility;
          done();
        })
        .catch(err => console.log(err));
    } else {
      done();
    }
  }
});

router
  .on({
    "/": () => render(state.Home),
    ":page": params => {
      let page = capitalize(params.data.page);
      render(state[page]);
    }
  })
  .resolve();
