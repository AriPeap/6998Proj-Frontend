const data = require("./src/assets/platforms.json");
const index = ["130", "69"];
index.forEach((num) => {
  console.log(+num);
});
console.log(data.find((d) => d.id === 130));
data.map((d) => {
  console.log(d.id);
});
function getInfo(arr, json) {
  let data = require("./src/assets/platforms.json");
  let res = [];
  for (let ar in arr) {
    let find = data.find((d) => d.id === ar);
    res.push(find);
  }
  return res;
}
