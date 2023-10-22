let lastHours = 0;
let lastMinutes = 0;

let exerciseCurrentAmount = 0;
let exerciseMaxAmount = 0;

let sleepCurrent = 0;
let sleepMax = 0;

function onLoad() {

  exerciseCurrentAmount = localStorage.getItem("exerciseCurrentAmount") != null ? parseInt(localStorage.getItem("exerciseCurrentAmount")) : 0;
  exerciseMaxAmount = localStorage.getItem("exerciseMaxAmount") != null ? parseInt(localStorage.getItem("exerciseMaxAmount")) : 1;

  exerciseProgress((exerciseCurrentAmount / exerciseMaxAmount) * 100);
  
  sleepCurrent = localStorage.getItem("sleepCurrentAmount") != null ? parseInt(localStorage.getItem("sleepCurrentAmount")) : 0;

  lastHours = Math.round(sleepCurrent / 60);
  lastMinutes = sleepCurrent % 60;

  setSleepInfo();

  lastSleepTotal = (lastHours * 60) + lastMinutes;

  localStorage.setItem("lastSleepHours", lastHours);
  localStorage.setItem("lastSleepMinutes", lastMinutes);
  localStorage.setItem("sleepCurrentAmount", lastSleepTotal);

  sleepMax = localStorage.getItem("sleepMaxAmount") != null ? parseInt(localStorage.getItem("sleepMaxAmount")) : 1;

  setSleepLevel(Math.round((sleepCurrent / sleepMax) * 10_000) / 100);
    
  setExerciseValues();

  localStorage.setItem("exerciseProgress", (exerciseCurrentAmount / exerciseMaxAmount) * 100)
}

function setSleepInfo() {
  let sleepGoalOutput = document.getElementById("sleep-goal");
  let lastSleep = document.getElementById("last-night-sleep");

  let sleepGoal = localStorage.getItem("sleepMaxAmount") != null ? parseInt(localStorage.getItem("sleepMaxAmount")) / 60 : 0;

  sleepGoalOutput.innerHTML = "Sleep Goal: " + sleepGoal + " hours";


  let sleepMessage = "";

  sleepMessage += lastHours != 0 ? lastHours + " Hour(s)" : "";
  sleepMessage += (sleepMessage != "" && lastMinutes != 0) ? ", " : "";
  sleepMessage += lastMinutes != 0 ? lastMinutes + " Minute(s) of sleep." : "";
  sleepMessage = sleepMessage != "" ? sleepMessage : "Get some sleep!";

  lastSleep.innerHTML = sleepMessage;

  localStorage.setItem("lastSleepHours", lastHours);
  localStorage.setItem("lastSleepMinutes", lastMinutes);
}

function setLastSleep() {
  let lastHours = document.getElementById("sleep-hours").value;
  let lastMinutes = document.getElementById("sleep-minutes").value;

  lastHours = parseInt(lastHours);
  lastMinutes = parseInt(lastMinutes);

  let lastSleepTotal = (lastHours * 60) + lastMinutes;

  localStorage.setItem("lastSleepHours", lastHours);
  localStorage.setItem("lastSleepMinutes", lastMinutes);
  localStorage.setItem("sleepCurrentAmount", lastSleepTotal)
}

function setSleepLevel(x) {
  let sleepLevel = 0;
  let sleep = document.getElementById("sleep-amount");
  let sleepInterval = setInterval(function () {
    if (sleepLevel < x) {
      sleepLevel += 0.2;
      sleep.style.width = sleepLevel + "%";
    } else {
      clearInterval(sleepInterval);
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
    let workoutMinutes = parseInt(document.getElementById("exercise-minutes").value);

    let prevWorkoutMinutes = localStorage.getItem("exerciseCurrentAmmount") != null ?
      parseInt(localStorage.getItem("exerciseCurrentAmount")) : 0;
    
    localStorage.setItem("exerciseCurrentAmount", workoutMinutes + prevWorkoutMinutes);
    localStorage.setItem("exerciseProgress", (exerciseCurrentAmount / exerciseMaxAmount) * 100)
}
