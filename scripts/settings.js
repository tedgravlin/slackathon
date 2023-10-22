let waterGoal = localStorage.getItem("waterMaxAmount")
let sleepGoal = localStorage.getItem("sleepGoal")
let exerciseGoal = localStorage.getItem("exerciseGoal")
let calorieGoal = localStorage.getItem("calorieGoal")
let dayStart = localStorage.getItem("startTime")
let dayEnd = localStorage.getItem("endTime")

let startTime = new Date();
let endTime = new Date();

function setMax(statType) {
    let max = document.getElementById(statType + "-max-input").value;
    localStorage.setItem(statType + "MaxAmount", max);
    setProgress(statType, statType + "Progress");
}

function setProgress(statType, statProgressVar) {
    let currentAmount = localStorage.getItem(statType + "CurrentAmount");
    let maxAmount = localStorage.getItem(statType + "MaxAmount");
    let progress = (currentAmount / maxAmount) * 100;
    localStorage.setItem(statProgressVar, progress);
}

function onLoad() {
    if (localStorage.getItem("startTime") != null) {
        startTime.setTime(localStorage.getItem("startTime"));
    } else {
        startTime.setHours(9, 0, 0);
    }

    if (localStorage.getItem("endTime") != null) {
        endTime.setTime(localStorage.getItem("endTime"));
    } else {
        endTime.setHours(17, 0, 0);
    }

    document.getElementById("startTime").value = (startTime.getHours() + "").padStart(2, '0')
        + ":" + (startTime.getMinutes() + "").padStart(2, '0');
    document.getElementById("endTime").value = (endTime.getHours() + "").padStart(2, '0')
        + ":" + (endTime.getMinutes() + "").padStart(2, '0');
}


function validateForm() {
    if (document.forms["timeForm"]["startTime"].value != "") {
        let start = document.forms["timeForm"]["startTime"].value;

        let startT = (start + "").split(":");

        startTime.setHours(Number(startT[0]));
        startTime.setMinutes(Number(startT[1]));

        localStorage.setItem("startTime", startTime.getTime());
    }

    if (document.forms["timeForm"]["endTime"].value != "") {
        let end = document.forms["timeForm"]["endTime"].value;

        let endT = (end + "").split(":");

        endTime.setHours(Number(endT[0]));
        endTime.setMinutes(Number(endT[1]));

        localStorage.setItem("endTime", endTime.getTime());
    }
}
