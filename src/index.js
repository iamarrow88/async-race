import renderGaragePage from "./js/view/renderGaragePage";
import { garageVars, winnersVars } from "./js/controller/btns-and-forms";
// @ts-ignore
import styles from "./styles/styles.scss";
import createElem from "./js/view/createEl";
import renderBtns from "./js/view/renderBtns";
import renderWinnersPage from "./js/view/renderWinnersPage";
import postCar from "./js/app/postData";
import rgbToHex from "./js/app/rgbToHex";
import updateCar from "./js/controller/updateCar";
import removeCar from "./js/view/removeCar";
import raceOneCar from "./js/controller/raceOneCar";
import raceAllCars from "./js/controller/raceAllCars";
import resetCars from "./js/view/resetCars";
import { animationIds } from "./js/controller/btns-and-forms";

const car = {
  createName: null,
  createColor: null,
  updateName: null,
  updateColor: null,
  updateId: null,
};

garageVars["body"] = document.querySelector(".body");
renderBtns(garageVars["body"]);

garageVars["garageContentBlock"] = createElem(
  "div",
  "garageContentBlock",
  "",
  garageVars["body"]
);
renderGaragePage(garageVars["garageContentBlock"]);

winnersVars["winnersContentBlock"] = createElem(
  "div",
  "winnersContentBlock hidden",
  "",
  garageVars["body"]
);
renderWinnersPage(winnersVars["winnersContentBlock"]);

garageVars["winnersButton"].addEventListener("click", function () {
  winnersVars["winnersContentBlock"].classList.remove("hidden");
  garageVars["garageContentBlock"].classList.add("hidden");
});

garageVars["garageButton"].addEventListener("click", function () {
  winnersVars["winnersContentBlock"].classList.add("hidden");
  garageVars["garageContentBlock"].classList.remove("hidden");
});

/* garageVars["createCarColorInput"] =
  document.querySelector(".create-car__color"); */

garageVars["createCarColorInput"].addEventListener("change", function (e) {
  car["createColor"] = e.target.value;
  return car["createColor"];
});

/* garageVars["createCarNameInput"] = document.querySelector(".create-car__name"); */

garageVars["createCarNameInput"].addEventListener("change", function (e) {
  car["createName"] = e.target.value;
  return car["createName"];
});
/* garageVars["garageTable"] = document.querySelector(".table"); */
/* garageVars["createCarButton"] = document.querySelector(".create-car__btn"); */
garageVars["createCarButton"].addEventListener("click", function () {
  garageVars["createCarNameInput"].value = "";
  garageVars["createCarColorInput"].setAttribute("value", "#000");
  garageVars["garageTable"].innerHTML = "";
  postCar(car["createName"], car["createColor"]);
});

/* garageVars["updateCarButton"] = document.querySelector(".update-car__btn"); */
/* garageVars["updateCarColorInput"] =
  document.querySelector(".update-car__color"); */
/* garageVars["updateCarNameInput"] = document.querySelector(".update-car__name"); */

garageVars["updateCarButton"].addEventListener("click", function (e) {
  car["updateColor"] = garageVars["updateCarColorInput"].value;
  car["updateName"] = garageVars["updateCarNameInput"].value;
  car["updateId"] = e.target.dataset["carid"];
  updateCar(car["updateName"], car["updateColor"], car["updateId"]);
});

garageVars["garageTable"].addEventListener("click", function (e) {
  if (e.target.matches(".line__select")) {
    car["updateName"] = e.target.closest(".line__btns").childNodes[5].innerHTML;
    car["updateId"] = e.target.dataset["carid"];
    const color =
      e.target.closest(".line").childNodes[3].childNodes[7].style
        .backgroundColor;
    car["updateColor"] = rgbToHex(color);
    garageVars["updateCarNameInput"].value = car["updateName"];
    garageVars["updateCarColorInput"].setAttribute(
      "value",
      `${car["updateColor"]}`
    );
    garageVars["updateCarButton"].dataset.carid = `${car["updateId"]}`;
  }
  if (e.target.matches(".line__remove")) {
    removeCar(e.target.dataset["carid"]);
  }
});

garageVars["body"].addEventListener("click", function (e) {
  if (e.target.matches(".controls__start")) {
    raceOneCar(e.target.dataset.carid);
  }
});

garageVars["body"].addEventListener("click", function (e) {
  if (e.target.matches("#raceStart")) {
    raceAllCars();
  }
});

garageVars["body"].addEventListener("click", function (e) {
  if (e.target.matches(".controls__stop")) {
    const id = e.target.dataset["caridstop"];
    window.cancelAnimationFrame(animationIds[`${id}`]);
  }
});

garageVars["body"].addEventListener("click", function (e) {
  if (e.target.matches("#raceStop")) {
    resetCars();
    /* window.cancelAnimationFrame(garageVars["ID"]); */
  }
});
