let lastHours = 0;
let lastMinutes = 0;

let exerciseCurrentAmount = localStorage.getItem("exerciseCurrentAmount")
let exerciseMaxAmount = localStorage.getItem("exerciseMaxAmount")

function onLoad() {
  exerciseProgress(
    (localStorage.getItem("exerciseCurrentAmount") /
      localStorage.getItem("exerciseMaxAmount")) *
      100
  );
  
  let sleepCurrent = parseInt(localStorage.getItem("sleepCurrentAmount"));

  lastHours = Math.round(sleepCurrent / 60);
  lastMinutes = sleepCurrent % 60;



  setSleepInfo();
  lastSleepTotal = lastHours * 60 + lastMinutes;

  localStorage.setItem("lastSleepHours", lastHours);
  localStorage.setItem("lastSleepMinutes", lastMinutes);
  localStorage.setItem("sleepCurrentAmount", lastHours * 60 + lastMinutes);

  console.log(lastHours + ", " + lastMinutes + " : " + lastSleepTotal);
  setSleepLevel(
    Math.round((sleepCurrent / localStorage.getItem("sleepMaxAmount")) * 10000) / 100
  );
    
  setExerciseValues();
  localStorage.setItem("exerciseProgress", (exerciseCurrentAmount / exerciseMaxAmount) * 100)

}

function setSleepInfo() {
  let sleepGoalOutput = document.getElementById("sleep-goal");
  let lastSleep = document.getElementById("last-night-sleep");

  //let lastHours = localStorage.getItem("lastSleepHours");
  //let lastMinutes = localStorage.getItem("lastSleepMinutes");

  let sleepGoal = localStorage.getItem("sleepMaxAmount") / 60;

  sleepGoalOutput.innerHTML = "Sleep Goal: " + sleepGoal + " hours";

  if (lastHours != null && lastMinutes != null) {
    lastSleep.innerHTML =
      "" + lastHours + " Hour(s),  " + lastMinutes + " Minute(s) of sleep.";
    if (lastHours === "") {
      localStorage.setItem("lastSleepHours", 0);
    }
    if (lastMinutes === "") {
      localStorage.setItem("lastSleepMinutes", 0);
    }
    console.log(lastHours);
    console.log(lastMinutes);
    if (
      (lastHours == "" || lastHours == 0) &&
      (lastMinutes == "" || lastMinutes == 0)
    ) {
      lastSleep.innerHTML = "Get some sleep!";
    } else if (
      lastHours != "" &&
      lastHours != 0 &&
      (lastMinutes == "" || lastMinutes == 0)
    ) {
      lastSleep.innerHTML = "" + lastHours + " Hour(s) of sleep.";
    } else if (
      lastMinutes != "" &&
      lastMinutes != 0 &&
      (lastHours == "" || lastHours == 0)
    ) {
      lastSleep.innerHTML = "" + lastMinutes + " Minute(s) of sleep.";
    }
  } else {
    ("Get some sleep");
  }
}

function setLastSleep() {
  let lastSleep = document.getElementById("last-night-sleep");
  let lastHours = document.getElementById("sleep-hours").value;
  let lastMinutes = document.getElementById("sleep-minutes").value;

  lastHours = parseInt(lastHours);
  lastMinutes = parseInt(lastMinutes);

  let lastSleepTotal = lastHours * 60 + lastMinutes;

  console.log(lastHours);
  console.log(lastMinutes);

  lastSleep.innerHTML = "<p>" + lastHours + " " + lastMinutes + "</p>";
  localStorage.setItem("lastSleepHours", lastHours);
  localStorage.setItem("lastSleepMinutes", lastMinutes);
  localStorage.setItem("sleepCurrentAmount", lastSleepTotal)
}

function setSleepLevel(x) {
  let sleepLevel = 0;
  let water = document.getElementById("water");
  let waterInterval = setInterval(function () {
    if (sleepLevel < x) {
      sleepLevel += 0.2;
      water.style.width = sleepLevel + "%";
    } else {
      clearInterval(waterInterval);
    }
  }, 0.1);
}

function setExerciseValues() {
    document.getElementById("last-exercise").innerHTML = exerciseCurrentAmount + " minutes"
    document.getElementById("exercise-goal").innerHTML = "Exercise Goal: " + exerciseMaxAmount + " minutes"
}

function exerciseProgress(x) {
  let exerciseLevel = 0;
  let runner = document.getElementById("runner");
  let man = document.getElementById("man");
  let exerciseInterval = setInterval(function () {
    if (exerciseLevel < x) {
      exerciseLevel += 0.2;
      runner.style.width = exerciseLevel + "%";
    } else {
      clearInterval(exerciseInterval);
    }
  }, 0.1);
}

function addExercise() {
    let workoutMinutes = Number(document.getElementById("exercise-minutes").value);

    let prevWorkoutMinutes = Number(localStorage.getItem("exerciseCurrentAmount"));
    console.log(prevWorkoutMinutes)
    
    localStorage.setItem("exerciseCurrentAmount", workoutMinutes + prevWorkoutMinutes);
    localStorage.setItem("exerciseProgress", (exerciseCurrentAmount / exerciseMaxAmount) * 100)
}
