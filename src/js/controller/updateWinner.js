import { winnersVars } from "./btns-and-forms";
import renderWinsList from "./../view/renderWinsList";

export default async function updateWinner(winsNumber, times, id) {
  console.log(
    "🚀 обновляем имя и цвет машины отправкой патч запроса на сервер"
  );
  await fetch(`http://127.0.0.1:3000/winners/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ wins: `${winsNumber}`, time: `${times}` }),
  }).then((response) => {
    console.log(winnersVars);
    /* renderWinsList(winnersHeader, winnersBlock, page); */
  });
}
