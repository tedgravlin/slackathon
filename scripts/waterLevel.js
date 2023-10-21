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
  }, 0.01);
}
