// @ts-nocheck
import { garageVars, winnersVars } from "../controller/btns-and-forms";
/* import { car } from "./../../index"; */
/* import postCar from "./postData"; */

export default function addEventListeners(garageVars) {
  for (let key in garageVars) {
    if (garageVars[key] !== undefined && garageVars[key] !== null) {
      if (key === "winnersButton") {
        garageVars[key].addEventListener("click", function () {
          if (winnersVars["winnersContentBlock"])
            winnersVars["winnersContentBlock"].classList.remove("hidden");
          garageVars["garageContentBlock"].classList.add("hidden");
        });
      }

      if (key === "garageButton") {
        garageVars[key].addEventListener("click", function () {
          winnersVars["winnersContentBlock"].classList.add("hidden");
          garageVars["garageContentBlock"].classList.remove("hidden");
        });
      }

      if (key === "createCarColorInput") {
        garageVars[key].addEventListener("change", function () {
          /* car["createColor"] = e.target.value;
          return car["createColor"]; */
        });
      }

      if (key === "createCarNameInput") {
        garageVars[key].addEventListener("change", function () {
          /* car["createName"] = e.target.value;
          return car["createName"]; */
        });
      }

      if (key === "createCarButton") {
        garageVars[key].addEventListener("click", function () {
          garageVars["createCarNameInput"].value = "";
          garageVars["createCarColorInput"].setAttribute("value", "#000");
          garageVars["garageTable"].innerHTML = "";
          /* postCar(car["createName"], car["createColor"]); */
        });
      }
    }
  }
}
