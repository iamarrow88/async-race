export default function getRandomCarName(arr) {
  console.log("🚀 создаем массив случайных авто");
  const length = arr.length;
  function randomizer(length) {
    return Math.floor(Math.random() * length);
  }
  let carName =
    arr[`${randomizer(length)}`].Make +
    " " +
    arr[`${randomizer(length)}`].Model;
  return carName;
}
