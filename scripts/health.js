function onLoad() {
  localStorage.setItem("sleepGoal", 8 * 60);
  let lastHours = parseInt(localStorage.getItem("lastSleepHours"));
  let lastMinutes = parseInt(localStorage.getItem("lastSleepMinutes"));
  let lastSleepTotal = lastHours * 60 + lastMinutes;
  console.log(localStorage.getItem("sleepGoal"));
  console.log(lastSleepTotal);
  getsleepGoal();
  lastHours = parseInt(localStorage.getItem("lastSleepHours"));
  lastMinutes = parseInt(localStorage.getItem("lastSleepMinutes"));
  lastSleepTotal = lastHours * 60 + lastMinutes;
  setSleepLevel((lastSleepTotal / localStorage.getItem("sleepGoal")) * 100);
}

function getsleepGoal() {
  let sleepGoalOutput = document.getElementById("sleep-goal");
  let lastSleep = document.getElementById("last-night-sleep");

  let lastHours = localStorage.getItem("lastSleepHours");
  let lastMinutes = localStorage.getItem("lastSleepMinutes");

  let sleepGoal = localStorage.getItem("sleepMaxAmount");

  sleepGoalOutput.innerHTML = "<p>Sleep Goal: " + sleepGoal + "</p>";

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

  console.log(lastHours);
  console.log(lastMinutes);

  lastSleep.innerHTML = "<p>" + lastHours + " " + lastMinutes + "</p>";
  localStorage.setItem("lastSleepHours", lastHours);
  localStorage.setItem("lastSleepMinutes", lastMinutes);
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
