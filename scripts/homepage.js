let d = new Date();
let startTime = new Date();
let endTime = new Date();

window.addEventListener("load", (event) => {
  dailyQuote();
  getProgress();
  changeGreeting();
  onWorkLoad();

  setInterval(update, 1000);
});

function onWorkLoad() {
  let workProgress = document.getElementById("work-progress-bar");

  let startWorkTime = localStorage.getItem("startTime") != null ? localStorage.getItem("startTime") : "";
  let endWorkTime = localStorage.getItem("endTime") != null ? localStorage.getItem("endTime") : "";

  startTime.setTime(startWorkTime);
  endTime.setTime(endWorkTime);

  if (startWorkTime != "" && endWorkTime != "") {
    workProgress.value =  Math.round((d.getTime() - startTime.getTime())
      / (endTime.getTime() - startTime.getTime())*10000) / 100;
  } else {
    workProgress.value = 0;
  }

  let strJSON = localStorage.getItem("tasksJSON") != null ? localStorage.getItem("tasksJSON") : "";

  if (localStorage.getItem("tasksJSON") != null) {
    let objJSON = JSON.parse(strJSON);
    let count = 0;

    for (let task in objJSON["tasks"]) {
      count += objJSON["tasks"][task].status == "complete" ? 1 : 0;
    }

    let divisor = objJSON["tasks"].length != 0 ? objJSON["tasks"].length : 1;
    count = objJSON["tasks"].length != 0 ? count : 1;

    let taskBar = document.getElementById("task-progress-bar");
    taskBar.value = Math.round((count / divisor) * 10000) / 100;
  } else {
    let taskBar = document.getElementById("task-progress-bar");
    taskBar.value = 100;
  }
}

function update() {

  let workProgress = document.getElementById("work-progress-bar");

  d = new Date();

  let startWorkTime = localStorage.getItem("startTime") != null ? localStorage.getItem("startTime") : "";
  let endWorkTime = localStorage.getItem("endTime") != null ? localStorage.getItem("endTime") : "";

  if (startWorkTime != "" && endWorkTime != "") {
    workProgress.value =  Math.round((d.getTime() - startTime.getTime())
      / (endTime.getTime() - startTime.getTime())*10000) / 100;
  } else {
    workProgress.value = 0;
  }
}

function devValues() {
  // Water
  setCurrentAmount("waterCurrentAmount", 1);
  setMaxAmount("waterMaxAmount", 8);
  setProgress("water", "waterProgress");
  // Calories
  setCurrentAmount("caloriesCurrentAmount", 500);
  setMaxAmount("caloriesMaxAmount", 1500);
  setProgress("calories", "caloriesProgress");
  // Protein
  setCurrentAmount("proteinCurrentAmount", 10);
  setMaxAmount("proteinMaxAmount", 50);
  setProgress("protein", "proteinProgress");
  // Carbs
  setCurrentAmount("carbsCurrentAmount", 75);
  setMaxAmount("carbsMaxAmount", 200);
  setProgress("carbs", "carbsProgress");
  // Sugar
  setCurrentAmount("sugarCurrentAmount", 35);
  setMaxAmount("sugarMaxAmount", 60);
  setProgress("sugar", "sugarProgress");
  // Work
  setCurrentAmount("workCurrentAmount", 1);
  setMaxAmount("workMaxAmount", 9);
  setProgress("work", "workProgress");
  // Sleep
  setCurrentAmount("sleepCurrentAmount", 360);
  setMaxAmount("sleepMaxAmount", 480);
  setProgress("sleep", "sleepProgress");
  // Exercise
  setCurrentAmount("exerciseCurrentAmount", 5);
  setMaxAmount("exerciseMaxAmount", 60);
  setProgress("exercise", "exerciseProgress");
  getProgress();
}

function getProgress() {
  // Water
  document
    .getElementById("water-progress-bar")
    .setAttribute("value", localStorage.getItem("waterProgress"));
  // Calories
  document
    .getElementById("calories-progress-bar")
    .setAttribute("value", localStorage.getItem("caloriesProgress"));
  // Protein
  document
    .getElementById("protein-progress-bar")
    .setAttribute("value", localStorage.getItem("proteinProgress"));
  // Carbs
  document
    .getElementById("carbs-progress-bar")
    .setAttribute("value", localStorage.getItem("carbsProgress"));
  // Sugar
  document
    .getElementById("sugar-progress-bar")
    .setAttribute("value", localStorage.getItem("sugarProgress"));
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

  if (time < 12 && time >= 5) {
    greeting.innerHTML = "🌞 Good morning";
  }
  else if (time < 17 && time > 12) {
    greeting.innerHTML = "😎 Good afternoon";
  }
  else if (time > 17 || time <= 4) {
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