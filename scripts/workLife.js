const d = new Date();
const startTime = new Date();
const endTime = new Date();
let workLevel = 0;

function onLoad() {
    startTime.setHours(12, 0, 0);
    endTime.setHours(20, 0, 0);

    timeProgress();
}

function timeProgress() {

    let x = getProgress();
    let progress = document.getElementById("workProgress");

    document.getElementById("time").innerHTML = x + "%";

    let workInterval = setInterval(function () {
        if (workLevel < x) {
          workLevel += 0.2;
          progress.style.width = workLevel + "%";
        } else {
          clearInterval(workLevel);
        }
    }, 0.01);
}

function validateForm() {
    let start = document.forms["timeForm"]["startTime"];
    let end = document.forms["timeForm"]["endTime"];

    console.log(start + ", " + end);
}

function getProgress() {
    return Math.round((d.getTime() - startTime.getTime()) / (endTime.getTime() - startTime.getTime())*10000) / 100;
}