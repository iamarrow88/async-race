import { animationIds } from "./../controller/btns-and-forms";

export default function resetCars() {
  console.log("🚀 остановка анимации машины с статусом 500");
  const cars = document.querySelectorAll(".line__img");
  cars.forEach((car) => {
    const currentCar = car.dataset["carimgid"];
    window.cancelAnimationFrame(animationIds[`${currentCar}`]);
    car.style.transform = ``;
  });
}
