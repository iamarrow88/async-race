import renderWinsList from "./renderWinsList";
import { winnersVars } from "./../controller/btns-and-forms";
import getWinnersNumber from "./getWinnersNumber";

export default function renderWinnersPage(body) {
  console.log("🚀 отрисовка страницы с победителями");
  winnersVars["winnersContentBlock"] = document.querySelector(
    ".winnersContentBlock "
  );
  winnersVars["winnersContentBlock"].insertAdjacentHTML(
    "beforeend",
    `
	<h1 class="title" data-number = "1">Winners</h1>
	<h2 class="subtitle">Page #${winnersVars["winnersCurrentPage"]}</h2>
	
	<table class="winners__list">
		<thead>
			<tr class="list__subheader subheader">
				<th class="subheader__item">Number</th>
				<th class="subheader__item">Car</th>
				<th class="subheader__item">Name</th>
				<th class="subheader__item">Wins</th>
				<th class="subheader__item">Best Time (sec)</th>
			</tr>
		</thead>
	</table>
	`
  );
  winnersVars["winnersTitle"] = document.querySelector(".title");
  winnersVars["winnersBlock"] = document.querySelector(".winners__list");
  /*   winnersVars["winnersTable"] = document.querySelector(".winners__table"); */

  renderWinsList(
    winnersVars["winnersTitle"],
    winnersVars["winnersTable"],
    winnersVars["winnersCurrentPage"]
  );
  getWinnersNumber(winnersVars["winnersTitle"], 10);
  document.querySelector(".winnersContentBlock ").insertAdjacentHTML(
    "beforeend",
    `
		<div class="winnersPagination">
			<div class="pagination__btn btn prev-btn">Prev</div>
			<div class="pagination__btn btn next-btn">Next</div>
		</div>
	`
  );
}
