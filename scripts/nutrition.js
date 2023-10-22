let waterLevel = 0;

window.addEventListener("load", (event) => {
  setFoodStat('calories');
  setFoodStat('protein');
  setFoodStat('carbs');
  setFoodStat('sugar');
  setFoodStat('sodium');
});

function setWaterLevel(x) {
  let water = document.getElementById("water");

  let waterInterval = setInterval(function () {
    if (waterLevel < x) {
      waterLevel += 0.2;
      water.style.height = waterLevel + "%";
    } else {
      clearInterval(waterInterval);
    }
  }, 0.1);

  let waterAmount = localStorage.getItem("waterCurrentAmount") != null
    ? parseInt(localStorage.getItem("waterCurrentAmount")) : 0;
  let waterProgress = localStorage.getItem("waterProgress") != null ? waterAmount : 0;

  document.getElementById("waterProgress").innerHTML = waterProgress;

  let waterMax = localStorage.getItem("waterMaxAmount") != null
    ? parseInt(localStorage.getItem("waterMaxAmount")) : 0;

  document.getElementById("waterMax").innerHTML = waterMax;

}

function setFoodStat(statType) {
  let progressBar = document.getElementById(statType + '-progress');

  let progType = localStorage.getItem(statType + "Progress") != null
    ? parseInt(localStorage.getItem(statType + "Progress")) : 0;

  progressBar.setAttribute("value", progType);
}
