window.addEventListener("load", (event) => {
  dailyQuote();
  getProgress();
  changeGreeting();
});

function devValues() {
  // Water
  setCurrentAmount("waterCurrentAmount", 1);
  setMaxAmount("waterMaxAmount", 8);
  setProgress("water", "waterProgress");
  // Calories
  setCurrentAmount("caloriesCurrentAmount", 500);
  setMaxAmount("caloriesMaxAmount", 1500);
  setProgress("calories", "caloriesProgress");
  // Work
  setCurrentAmount("workCurrentAmount", 1);
  setMaxAmount("workMaxAmount", 9);
  setProgress("work", "workProgress");
  // Sleep
  setCurrentAmount("sleepCurrentAmount", 8);
  setMaxAmount("sleepMaxAmount", 9);
  setProgress("sleep", "sleepProgress");
  // Exercise
  setCurrentAmount("exerciseCurrentAmount", 5);
  setMaxAmount("exerciseMaxAmount", 60);
  setProgress("exercise", "exerciseProgress");
  //getProgress();
}

function getProgress() {
  // Water
  document
    .getElementById("water-progress-bar")
    .setAttribute("value", localStorage.getItem("waterProgress"));
  // Food
  document
    .getElementById("calories-progress-bar")
    .setAttribute("value", localStorage.getItem("caloriesProgress"));
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
  let currentAmount = localStorage.getItem(statCurrentAmount);
  let newProgress = Number(currentAmount) + Number(amount);

  localStorage.setItem(statCurrentAmount, newProgress);
  setProgress(statType, statProgressVar);

  // Close the stat info
  toggleStatInfo(statType);
}

function toggleStatInfo(statType) {
  let statInfo = document.getElementById(statType + "-stat-info");
  let overlay = document.getElementById('overlay');

  if (overlay.style.display == "") {
    overlay.style.display = "none";
  }

  if (overlay.style.display === "none") {
    overlay.style.display = "block";
    statInfo.style.display = "block";
  }
  else if (overlay.style.display === "block") {
    overlay.style.display = "none";
    statInfo.style.display = "none";
  }
}

function changeGreeting() {
  let greeting = document.getElementById('greeting');
  let time = new Date();
  time = time.getHours();

  if (time < 12 && time > 5) {
    greeting.innerHTML = "🌞 Good morning";
  }
  else if (time < 17 && time > 12) {
    greeting.innerHTML = "😎 Good afternoon";
  }
  else if (time > 17) {
    greeting.innerHTML = "🌝 Good evening";
  }
}

function closeOverlay() {
  let overlay = document.getElementById('overlay');
  let children = overlay.children;
  let i = 0;

  // Hide all children of the overlay
  for (i = 0; i < children.length; i++) {
    children[i].style.display = "none";
  }

  // Hide the overlay itself
  overlay.style.display = "none";
}