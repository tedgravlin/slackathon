function onLoad() {
  exerciseProgress(
    (localStorage.getItem("exerciseCurrentAmount") /
      localStorage.getItem("exerciseMaxAmount")) *
      100
  );

  let lastHours = parseInt(localStorage.getItem("lastSleepHours"));
  let lastMinutes = parseInt(localStorage.getItem("lastSleepMinutes"));
  let lastSleepTotal = lastHours * 60 + lastMinutes;


  console.log(localStorage.getItem("sleepMaxAmount"));
  console.log(lastSleepTotal);
  setSleepInfo();
  lastHours = parseInt(localStorage.getItem("lastSleepHours"));
  lastMinutes = parseInt(localStorage.getItem("lastSleepMinutes"));
  lastSleepTotal = lastHours * 60 + lastMinutes;
  setSleepLevel(
    (lastSleepTotal / localStorage.getItem("sleepMaxAmount")) * 100
  );
}

function setSleepInfo() {
  let sleepGoalOutput = document.getElementById("sleep-goal");
  let lastSleep = document.getElementById("last-night-sleep");

  let lastHours = localStorage.getItem("lastSleepHours");
  let lastMinutes = localStorage.getItem("lastSleepMinutes");

  let sleepGoal = localStorage.getItem("sleepMaxAmount") / 60;

  sleepGoalOutput.innerHTML = "<p>Sleep Goal: " + sleepGoal + " hours</p>";

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
