import getData from "../app/getData";
import { baseURL, path } from "../app/templates";
import createElem from "./createEl";
import { winnersVars } from "./../controller/btns-and-forms";

export default function renderWinsList(winnersHeader, winnersBlock, page) {
  console.log("отрисовка списка победителей");
  let winnersIds = [];
  getData(`${baseURL}${path.winners}?_page=${page}&_limit=10`)
    .then((result) => {
      console.log("это список", result);
      if (winnersVars["winnersTable"]) {
        winnersVars["winnersTable"].innerHTML = "";
      } else {
        winnersVars["winnersTable"] = createElem(
          "tbody",
          "winners__table",
          "",
          winnersVars["winnersBlock"]
        );
      }
      result.forEach((elem, ind) => {
        winnersIds.push(elem.id);
        winnersVars["winnersTable"].insertAdjacentHTML(
          "beforeend",
          `
				<tr class="list__data data">
					<td class="data__number">${ind + 1}</th>
					<td class="data__img"></th>
					<td class="data__name"></th>
					<td class="data__wins">${elem.wins}</th>
					<td class="data__time">${elem.time}</th>
				</tr>
		`
        );
      });
      winnersHeader.innerHTML += `(${result.length})`;
      return winnersIds;
    })
    .then((winnersIds) => {
      const names = document.querySelectorAll(".data__name");
      const colors = document.querySelectorAll(".data__img");
      getData(baseURL, path.garage).then((cars) => {
        cars.forEach((car, index) => {
          if (names[index]) names[index].innerHTML = `${car.name}`;
          if (colors[index])
            colors[index].setAttribute(
              "style",
              `background-color:${car.color}`
            );
        });
      });
    });
}
