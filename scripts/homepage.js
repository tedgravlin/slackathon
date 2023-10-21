window.addEventListener("load", (event) => {
  getProgress();
  setProgress("water", 77);
  setProgress("food", 50);
  setProgress("work", 20);
  setProgress("sleep", 90);
  setProgress("exercise", 50);
});

function getProgress() {
  // Water
  document
    .getElementById("water-progress-bar")
    .setAttribute("value", localStorage.getItem("water"));
  // Food
  document
    .getElementById("food-progress-bar")
    .setAttribute("value", localStorage.getItem("food"));
  // Work
  document
    .getElementById("work-progress-bar")
    .setAttribute("value", localStorage.getItem("work"));
  // Sleep
  document
    .getElementById("sleep-progress-bar")
    .setAttribute("value", localStorage.getItem("sleep"));
  // Exercise
  document
    .getElementById("exercise-progress-bar")
    .setAttribute("value", localStorage.getItem("exercise"));
}

function setProgress(stat, newProgress) {
  localStorage.setItem(stat, newProgress);
  document
    .getElementById(stat + "-progress-bar")
    .setAttribute("value", newProgress);
}
