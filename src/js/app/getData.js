export default async function  (baseUrl, path) {
  console.log("🚀 получили какие-то дннаые с сервера (get запрос)");
  const data = await fetch(baseUrl + path).then((res) => res.json());
  return data;
}
