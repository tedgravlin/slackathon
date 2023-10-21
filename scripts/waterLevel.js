let waterLevel = 0;
function setWaterLevel(x) {
  while (waterLevel < x) {
    waterLevel += 1;
    console.log(waterLevel);
    document.getElementById("water").style.height = waterLevel + "%";
  }
}
