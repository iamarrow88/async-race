import getData from "../app/getData";
import { baseURL, path } from "./../app/templates";
import { garageVars } from "./../controller/btns-and-forms";
import renderCarsList from "./renderCarsList";

export default function getWinnersNumber(winnersTitle, carsPerPage) {
  console.log(
    "считаем, сколько победителей и добавляем число в заголовок, а также формируем поведение кнопок пагинации"
  );
  getData(baseURL, path.winners).then((result) => {
    console.log(
      "🚀 отправляем гет запрос на сервер для получения списка машин в гараже",
      result
    );
    winnersTitle.innerHTML = `Garage(${result.length})`;
    winnersTitle.dataset.number = `${result.length}`;

    const howManyPages = Math.ceil(result.length / carsPerPage);
    /* garageHeader.dataset["pages"] = howManyPages; */
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    garageVars["garageCurrentPage"] = garageVars["garagePageNumber"].innerHTML
      .match(/#(\d+)/g)[0]
      .slice(1);

    function setInactiveStyleBtn(prevBtn, nextBtn, howManyPages) {
      if (garageVars["garageCurrentPage"] <= 1) {
        prevBtn.classList.add("btn-inactive");
      } else if (garageVars["garageCurrentPage"] >= howManyPages) {
        nextBtn.classList.add("btn-inactive");
      } else {
        nextBtn.classList.remove("btn-inactive");
        prevBtn.classList.remove("btn-inactive");
      }
    }
    setInactiveStyleBtn(prevBtn, nextBtn, howManyPages);
    prevBtn?.addEventListener("click", function () {
      if (garageVars["garageCurrentPage"] > 1) {
        garageVars["garageCurrentPage"]--;
        garageVars[
          "garagePageNumber"
        ].innerHTML = `Page#${garageVars["garageCurrentPage"]}`;
        setInactiveStyleBtn(prevBtn, nextBtn, howManyPages);
        renderCarsList(
          garageVars["garageHeader"],
          garageVars["garageTable"],
          garageVars["garageCurrentPage"],
          7,
          document.querySelector(".garage__page-number")
        );
      }
    });
    nextBtn?.addEventListener("click", function () {
      if (garageVars["garageCurrentPage"] < howManyPages) {
        garageVars["garageCurrentPage"]++;
        garageVars[
          "garagePageNumber"
        ].innerHTML = `Page#${garageVars["garageCurrentPage"]}`;
        setInactiveStyleBtn(prevBtn, nextBtn, howManyPages);
        renderCarsList(
          garageVars["garageHeader"],
          garageVars["garageTable"],
          garageVars["garageCurrentPage"],
          7,
          document.querySelector(".garage__page-number")
        );
      }
    });
  });
}
