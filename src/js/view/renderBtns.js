import createElem from "./createEl";
import { garageVars } from "./../controller/btns-and-forms";

export default function renderBtns(body) {
  console.log("🚀 функция по отрисовке кнопок гараж и победители запущена");
  createElem(
    "div",
    "garage-btns__wrapper",
    [
      (garageVars["garageButton"] = createElem(
        "button",
        "btn garage-btn",
        "Garage"
      )),
      (garageVars["winnersButton"] = createElem(
        "button",
        "btn winers-btn",
        "Winners"
      )),
    ],
    body
  );
}
