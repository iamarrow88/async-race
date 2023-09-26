import createElem from "./createEl";
import renderCarsList from "./renderCarsList";
import generateCars from "./../controller/generateCars";
import { garageVars } from "./../controller/btns-and-forms";

export default function renderGaragePage(body) {
  console.log("🚀 запускает отрисовка всей страницы гаража");
  const editBlockWrapper = createElem(
    "div",
    "edit-block edit-block__wrapper",
    "",
    body
  );
  garageVars["createCarLine"] = createElem(
    "div",
    "edit-block__block block__create-car create-car",
    "",
    editBlockWrapper
  );
  garageVars["createCarNameInput"] = createElem(
    "input",
    "create-car create-car__name name",
    "",
    garageVars["createCarLine"],
    ["id", "createName"],
    ["type", "text"],
    ["name", "create-car-name"]
  );
  garageVars["createCarColorInput"] = createElem(
    "input",
    "create-car create-car__color",
    "",
    garageVars["createCarLine"],
    ["id", "createColor"],
    ["type", "color"],
    ["name", "create-car-color"]
  );
  garageVars["createCarButton"] = createElem(
    "button",
    "create-car create-car__btn btn",
    "Create",
    garageVars["createCarLine"],
    ["id", "createSubmit"],
    ["type", "submit"],
    ["name", "create-car-btn"]
  );

  garageVars["updateCarLine"] = createElem(
    "div",
    "edit-block__block block__update-car update-car",
    "",
    editBlockWrapper
  );
  garageVars["updateCarNameInput"] = createElem(
    "input",
    "update-car update-car__name name",
    "",
    garageVars["updateCarLine"],
    ["id", "updateName"],
    ["type", "text"],
    ["name", "update-car-name"]
  );
  garageVars["updateCarColorInput"] = createElem(
    "input",
    "update-car update-car__color",
    "",
    garageVars["updateCarLine"],
    ["id", "updateColor"],
    ["type", "color"],
    ["name", "update-car-color"]
  );
  garageVars["updateCarButton"] = createElem(
    "button",
    "update-car update-car__btn btn",
    "Update",
    garageVars["updateCarLine"],
    ["id", "updateSubmit"],
    ["type", "submit"],
    ["name", "update-car-btn"]
  );

  garageVars["allCarsControlsWrapper"] = createElem(
    "div",
    "edit-block__race-btns race-btns",
    "",
    editBlockWrapper
  );
  garageVars["raceButton"] = createElem(
    "button",
    "race-btns btn",
    "Race",
    garageVars["allCarsControlsWrapper"],
    ["id", "raceStart"],
    ["type", "submit"]
  );
  garageVars["resetButton"] = createElem(
    "button",
    "race-btns btn",
    "Reset",
    garageVars["allCarsControlsWrapper"],
    ["id", "raceStop"],
    ["type", "submit"]
  );
  garageVars["generateCarsButton"] = createElem(
    "button",
    "race-btns btn",
    "Ganarate Cars",
    garageVars["allCarsControlsWrapper"],
    ["id", "generateCars"],
    ["type", "submit"]
  );

  garageVars["garagePageBody"] = createElem("div", "garage", "", body);
  garageVars["garageHeader"] = createElem(
    "h1",
    "garage__header",
    "Garage",
    garageVars["garagePageBody"]
  );
  garageVars["garagePageNumber"] = createElem(
    "div",
    "garage__page-number",
    "Page #",
    garageVars["garagePageBody"]
  );
  garageVars["garageTable"] = createElem(
    "div",
    "garage__table table",
    "",
    garageVars["garagePageBody"]
  );
  renderCarsList(
    garageVars["garageHeader"],
    garageVars["garageTable"],
    1,
    7,
    document.querySelector(".garage__page-number")
  );
  if (garageVars["generateCarsButton"])
    garageVars["generateCarsButton"].addEventListener("click", generateCars);
}
