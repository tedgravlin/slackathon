let waterGoal = localStorage.getItem("waterMaxAmount")
let sleepGoal = localStorage.getItem("sleepGoal")
let exerciseGoal = localStorage.getItem("exerciseGoal")
let calorieGoal = localStorage.getItem("calorieGoal")
let dayStart = localStorage.getItem("startTime")
let dayEnd = localStorage.getItem("endTime")

let startTime = new Date();
let endTime = new Date();

// Ted Function to set the max value for statType
function setMax(statType) {
    let max = document.getElementById(statType + "-max-input").value;
    if (statType == "sleep") {
        max = max * 60
    }
    localStorage.setItem(statType + "MaxAmount", max);
    setProgress(statType, statType + "Progress");
}
// Ted function to update the progress with the  max value
function setProgress(statType, statProgressVar) {
    let currentAmount = localStorage.getItem(statType + "CurrentAmount");
    let maxAmount = localStorage.getItem(statType + "MaxAmount");
    let progress = (currentAmount / maxAmount) * 100;
    localStorage.setItem(statProgressVar, progress);
}

// Adrian Function to set Time stuff
// Also setting placeholders to current max for said category
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


    document.getElementById("water-max-input").setAttribute("placeholder", localStorage.getItem("waterMaxAmount") + " cups");
    document.getElementById("calories-max-input").setAttribute("placeholder", localStorage.getItem("caloriesMaxAmount") + " calories");
    document.getElementById("carbs-max-input").setAttribute("placeholder", localStorage.getItem("carbsMaxAmount") + " carbs");
    document.getElementById("sugar-max-input").setAttribute("placeholder", localStorage.getItem("sugarMaxAmount") + " sugars");
    document.getElementById("sodium-max-input").setAttribute("placeholder", localStorage.getItem("sodiumMaxAmount") + " msgs");
    document.getElementById("sleep-max-input").setAttribute("placeholder", (localStorage.getItem("sleepMaxAmount") / 60) + " hours");
    document.getElementById("exercise-max-input").setAttribute("placeholder", localStorage.getItem("exerciseMaxAmount") + " minutes");
}

// Adrian Function to deal with the time stuff
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
