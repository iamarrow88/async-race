import addAnimation from "./addAnimation";
import setDriveStatus from "./setDriveStatus";
import { garageVars, animationIds } from "./btns-and-forms";

export default async function raceOneCar(id) {
  console.log(
    "🚀 отправляем патч запрос на сервер, чтобы обновить статус машинs - перевести его в started"
  );
  const currentCar = document.querySelector(`[data-carimgid="${id}"]`);
  await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=started`, {
    method: "PATCH",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      addAnimation(currentCar, data.velocity);
      setDriveStatus(currentCar, animationIds[`${id}`]);
    });
}
