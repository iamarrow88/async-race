class Requests {
  constructor(root) {
		this.root = root;
    this.garageAllCars = `${root}/garage`;
    this.winnersAllCars = `${root}/winners`;
    this.status = `${root}/engine`;
    this.headers = "'Content-Type': 'application/json'";
  }
  async getData(path) {
    console.log("🚀 получили какие-то дннаые с сервера (get запрос)");
    const data = await fetch(path).then((res) => res.json());
    return data;
  }
  
}
