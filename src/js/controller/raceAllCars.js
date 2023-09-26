import raceOneCar from "./raceOneCar";

export default function raceAllCars() {
  console.log("🚀 запускаем двигатель всех машин");
  const cars = document.querySelectorAll(".line__img");
  const ids = {};
  cars.forEach((car) => {
    const carId = car.dataset["carimgid"];
    raceOneCar(carId);
  });
}
