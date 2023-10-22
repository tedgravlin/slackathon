window.addEventListener("load", (event) => {
  // Calories
  setFoodStat('calories');
  // Protein
  setFoodStat('protein');
  // Carbs
  setFoodStat('carbs');
  // Sugar
  setFoodStat('sugar');
  // Sodium
  setFoodStat('sodium');
});
let waterLevel = 0;

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

  var waterProgress = localStorage.getItem("waterProgress");
  var waterAmount = localStorage.getItem("waterCurrentAmount");

  // Check if the value is not null or undefined
  if (waterProgress != null) {
    // Set the innerHTML of the "test" element to the retrieved value
    document.getElementById("waterProgress").innerHTML = waterAmount;
  }
  var waterMax = localStorage.getItem("waterMaxAmount");
  if (waterMax != null) {
    document.getElementById("waterMax").innerHTML = waterMax;
  }
}

function setFoodStat(statType) {
  let progressBar = document.getElementById(statType + '-progress');

  progressBar.setAttribute("value", localStorage.getItem(statType + "Progress"));
}
