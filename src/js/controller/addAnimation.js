import { garageVars, animationIds, ride, carsWins } from "./btns-and-forms";
import countWins from "./countWins";
import postCar from "./../app/postWinner";
import checkWinners from "./../app/checkWinners";

export default function addAnimation(car, velocity) {
  console.log(
    "🚀 функция добавлкния анимации - расчет дистанции и засекаем время"
  );
  const displayWidth = document.documentElement.clientWidth;
  const distance = displayWidth * 0.8;
  const startTime = new Date().getTime();
  const startposition = 86;
  const currentCar = +car.dataset["carimgid"];

  for (var key in ride) {
    delete ride[key];
  }

  function race() {
    console.log("🚀 запускаем функцию с перемещением авто");
    let time = 0;
    const currentTime = new Date().getTime();
    const diff =
      startposition + ((currentTime - startTime) / 1000) * velocity * 2;
    car.style.transform = `translateX(${diff}px`;
    if (diff < distance) {
      animationIds[`${currentCar}`] = window.requestAnimationFrame(race);
    } else {
      const endTime = new Date().getTime();
      const delta = (endTime - startTime) / 1000;
      if (Object.keys(ride).length <= 0) {
        garageVars["body"].insertAdjacentHTML(
          "beforeend",
          `
        <div class="alert">The winner's time is ${delta} sec</div>
        `
        );
        setTimeout(() => {
          document.querySelector(".alert").classList.add("slowHide");
          setTimeout(() => {
            document.querySelector(".alert").remove();
          }, 1500);
        }, 1500);
        ride[`${currentCar}`] = delta;
        const carss = countWins(ride, carsWins);
        console.log(
          "🚀 получили объект с количеством побед каждой машины",
          carss
        );
        checkWinners(currentCar, delta);
      } /*  else {
        ride[`${currentCar}`] = delta;
      } */
    }
    return animationIds;
  }
  race();
  return animationIds;
}
