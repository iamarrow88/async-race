import getWinnersNumber from "./../view/getWinnersNumber";
import { winnersVars } from "./../controller/btns-and-forms";
import renderWinsList from "./../view/renderWinsList";

export default async function postCar(carId, carWins, time) {
  console.log("🚀 постим победителя на сервер (пост запрос)");
  console.log("🚀 Id победителя ", carId);
  await fetch("http://127.0.0.1:3000/winners", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: carId,
      wins: carWins,
      time: time,
    }),
  }).then((response) => {
    console.log(
      "post wполучили ответ от сервера после того, как запостили победителяinner "
    );
    renderWinsList(
      winnersVars["winnersTitle"],
      winnersVars["winnersTable"],
      winnersVars["winnersCurrentPage"]
    );
    getWinnersNumber(winnersVars["winnersTitle"], 10);
  });
}
