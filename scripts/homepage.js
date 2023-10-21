window.addEventListener("load", (event) => {
  // Water
  //   setCurrentAmount("waterCurrentAmount", 1);
  //   setMaxAmount("waterMaxAmount", 8);
  //   setProgress("water", "waterProgress");
  //   // Food
  //   setCurrentAmount("foodCurrentAmount", 500);
  //   setMaxAmount("foodMaxAmount", 1500);
  //   setProgress("food", "foodProgress");
  dailyQuote();
  getProgress();
});

function devValues() {
  // Water
  setCurrentAmount("waterCurrentAmount", 1);
  setMaxAmount("waterMaxAmount", 8);
  setProgress("water", "waterProgress");
  // Food
  setCurrentAmount("foodCurrentAmount", 500);
  setMaxAmount("foodMaxAmount", 1500);
  setProgress("food", "foodProgress");
  getProgress();
  // Work
  setCurrentAmount("workCurrentAmount", 500);
  setMaxAmount("workMaxAmount", 1500);
  setProgress("work", "workProgress");
  getProgress();
  // Sleep
  setCurrentAmount("sleepCurrentAmount", 500);
  setMaxAmount("sleepMaxAmount", 1500);
  setProgress("sleep", "sleepProgress");
  getProgress();
  // Exercise
  setCurrentAmount("exerciseCurrentAmount", 500);
  setMaxAmount("exerciseMaxAmount", 1500);
  setProgress("exercise", "exerciseProgress");
  getProgress();
}

function getProgress() {
  // Water
  document
    .getElementById("water-progress-bar")
    .setAttribute("value", localStorage.getItem("waterProgress"));
  // Food
  document
    .getElementById("food-progress-bar")
    .setAttribute("value", localStorage.getItem("foodProgress"));
  // Work
  document
    .getElementById("work-progress-bar")
    .setAttribute("value", localStorage.getItem("workProgress"));
  // Sleep
  document
    .getElementById("sleep-progress-bar")
    .setAttribute("value", localStorage.getItem("sleepProgress"));
  // Exercise
  document
    .getElementById("exercise-progress-bar")
    .setAttribute("value", localStorage.getItem("exerciseProgress"));
}

function setProgress(statType, statProgressVar) {
  let currentAmount = localStorage.getItem(statType + "CurrentAmount");
  let maxAmount = localStorage.getItem(statType + "MaxAmount");
  let progress = (currentAmount / maxAmount) * 100;
  localStorage.setItem(statProgressVar, progress);
  document
    .getElementById(statType + "-progress-bar")
    .setAttribute("value", progress);
}

function setCurrentAmount(statCurrentAmountVar, newAmount) {
  localStorage.setItem(statCurrentAmountVar, newAmount);
}

function setMaxAmount(statMaxAmountVar, newAmount) {
  localStorage.setItem(statMaxAmountVar, newAmount);
}

function addProgress(statType, statCurrentAmount, statProgressVar) {
  let amount = document.getElementById(statType + "-input").value;
  let progressBar = document.getElementById(statType + "-progress-bar");
  let currentAmount = localStorage.getItem(statCurrentAmount);
  let newProgress = Number(currentAmount) + Number(amount);

  localStorage.setItem(statCurrentAmount, newProgress);
  setProgress(statType, statProgressVar);

  // Close the stat info
  toggleStatInfo(statType);
}

function toggleStatInfo(statType) {
  let statInfo = document.getElementById(statType + "-stat-info");

  if (statInfo.style.display == "") {
    statInfo.style.display = "none";
  }

  if (statInfo.style.display === "none") {
    statInfo.style.display = "block";
  } else if (statInfo.style.display === "block") {
    statInfo.style.display = "none";
  }
}
