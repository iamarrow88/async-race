import { animationIds } from "./../controller/btns-and-forms";

export default async function setDriveStatus(carId, animationId) {
  console.log(
    "🚀 отправляем патч запрос на сервер, чтобы проверить, какой придет ответ - 500 (чтобы остановить машину) или другой"
  );
  const currentCar = carId.dataset["carimgid"];

  await fetch(`http://127.0.0.1:3000/engine?id=${currentCar}&status=drive`, {
    method: "PATCH",
  })
    .catch((err) => {
      console.log(
        `Car has been stopped suddenly. It's engine was broken down. throw ${err}`
      );
    })
    .then((res) => {
      console.log(res.status);
      if (res.status === 500) {
        window.cancelAnimationFrame(animationIds[`${currentCar}`]);
        console.log(
          "Car has been stopped suddenly. It's engine was broken down.serv 500"
        );
      }
    });
}
