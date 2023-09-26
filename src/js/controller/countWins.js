export default function countWins(rideTimes, cars) {
  console.log("🚀 считаем количество побед каждого авто");
  const carId = Object.keys(rideTimes);
  carId.reduce((acc, car) => {
    if (acc[car]) {
      acc[car] += 1;
    } else {
      acc[car] = 1;
    }
    return acc;
  }, cars);

  return cars;
}
