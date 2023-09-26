import renderCarsList from "./../view/renderCarsList";

export default async function postCar(carName, carColor) {
  console.log(
    "🚀 отправляем пост запрос на сервер (постим созданное авто на сервер)"
  );
  await fetch("http://127.0.0.1:3000/garage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: `${carName}`, color: `${carColor}` }),
  }).then((response) => {
    console.log(response.status);
    renderCarsList(
      document.querySelector(".garage__header"),
      document.querySelector(".table"),
      1,
      7,
      document.querySelector(".garage__page-number")
    );
  });
}
