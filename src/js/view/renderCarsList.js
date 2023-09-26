import getData from "../app/getData";
import { baseURL, path } from "../app/templates";
import getCarsNumber from "./../view/getCarsNumber";
import { garageVars } from "./../controller/btns-and-forms";
import generateCars from "./../controller/generateCars";
import addAnimation from "./../controller/addAnimation";

export default function renderCarsList(
  garageHeader,
  garageTable,
  page,
  limit,
  garagePageNumber
) {
  console.log("🚀 отрисовывается CarsList на странице гаража");
  getData(`${baseURL}${path.garage}?_page=${page}&_limit=${limit}`).then(
    (result) => {
      garageTable.innerHTML = "";
      if (garagePageNumber) garagePageNumber.innerHTML = `Page#${page}`;
      result.forEach((elem) =>
        garageTable.insertAdjacentHTML(
          "beforeend",
          `
		<div class="table__line line">
		<div class="line__btns">
			<button class="line__btn line__select" data-carId = ${elem.id}>Select</button>
			<button class="line__btn line__remove" data-carId = ${elem.id}>Remove</button>
			<h3 class="line__name">${elem.name}</h3>
		</div>
		<div class="line__track track">
			<div class="line__controls controls">
				<button class="controls__btn controls__start" data-carId = ${elem.id}>Start!</button>
				<button class="controls__btn controls__stop" data-carIdStop = ${elem.id}>Stop!</button>
			</div>
			<div class="line__dashed-line"></div>
			<div class="line__finish">
				<img src="../src/assets/flag.png" alt="finish flag" class="finish__pic">
			</div>
			<div class="line__img img" data-carImgId = ${elem.id} style="background-color: ${elem.color}">
			</div>
		</div>
	</div>
	`
        )
      );

      if (!document.querySelector(".pagination")) {
        garageTable.insertAdjacentHTML(
          "afterend",
          `
					<div class="pagination">
						<div class="pagination__btn btn prev-btn">Prev</div>
						<div class="pagination__btn btn next-btn">Next</div>
					</div>
					`
        );
        getCarsNumber(garageHeader, limit, path.garage);
      }
      const raceCar = document.querySelector(".line__img");
      raceCar.addEventListener("click", function () {
        addAnimation(document.querySelector(".line__dashed-line"), raceCar);
      });
    }
  );
  if (garageVars["generateCarsButton"])
    garageVars["generateCarsButton"].addEventListener("click", generateCars);
}
