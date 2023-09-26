import postCar from "./postWinner";

export default async function checkWinners(id, time) {
  console.log("🚀 проверяем список победителей на сервере ");
  const resArray = [];
  let times = 1;
  await fetch("http://127.0.0.1:3000/winners")
    .then((response) => {
      const res = response.json();
      console.log("🚀 вот список победителей с сервера ", res);

      return res;
    })
    .then((data) => {
      console.log("🚀 список победителей в формает json ", data);
      for (let i = 0; i < data.length; i++) {
        resArray.push(data[i]["id"]);
      }
      console.log("🚀 список id победителей в массиве ", resArray);
      if (resArray.includes(id)) {
        async function getData(id) {
          await fetch(`http://127.0.0.1:3000/winners/${id}`)
            .then((res) => res.json())
            .then((data) => {
              times += data["wins"];
            });
        }
      }
      return times;
    })
    .then((times) => {
      postCar(id, times, time);
    });
}
