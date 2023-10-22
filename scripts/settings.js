let waterGoal = 0, sleepGoal = 0, exerciseGoal = 0, calorieGoal = 0;

let startTime = new Date(), endTime = new Date();

function onLoad() {

    waterGoal = localStorage.getItem("waterMaxAmount") != null ? parseInt(localStorage.getItem("waterMaxAmount")) : 0;
    sleepGoal = localStorage.getItem("sleepGoal") != null ? parseInt(localStorage.getItem("waterMaxAmount")) : 0;
    exerciseGoal = localStorage.getItem("exerciseGoal") != null ? parseInt(localStorage.getItem("waterMaxAmount")) : 0;
    calorieGoal = localStorage.getItem("calorieGoal") != null ? parseInt(localStorage.getItem("waterMaxAmount")) : 0;

    localStorage.getItem("startTime") != null ? startTime.setTime(localStorage.getItem("startTime"))
        : startTime.setHours(23, 59, 59);
    localStorage.getItem("endTime") != null ? endTime.setTime(localStorage.getItem("endTime"))
        : endTime.setHours(23, 59, 59);

    document.getElementById("startTime").value = (startTime.getHours() + "").padStart(2, '0')
        + ":" + (startTime.getMinutes() + "").padStart(2, '0');
    document.getElementById("endTime").value = (endTime.getHours() + "").padStart(2, '0')
        + ":" + (endTime.getMinutes() + "").padStart(2, '0');

    let waterMax = localStorage.getItem("waterMaxAmount") != null
        ? parseInt(localStorage.getItem("waterMaxAmount")) : 0;
    let calMax = localStorage.getItem("caloriesMaxAmount") != null
        ? parseInt(localStorage.getItem("caloriesMaxAmount")) : 0;
    let carbMax = localStorage.getItem("carbsMaxAmount") != null
        ? parseInt(localStorage.getItem("carbsMaxAmount")) : 0;
    let sugMax = localStorage.getItem("sugarMaxAmount") != null
        ? parseInt(localStorage.getItem("sugarMaxAmount")) : 0;
    let sodMax = localStorage.getItem("sodiumMaxAmount") != null
        ? parseInt(localStorage.getItem("sodiumMaxAmount")) : 0;
    let sleepMax = localStorage.getItem("sleepMaxAmount") != null
        ? parseInt(localStorage.getItem("sleepMaxAmount")) : 0;
    let exMax = localStorage.getItem("exerciseMaxAmount") != null
        ? parseInt(localStorage.getItem("exerciseMaxAmount")) : 0;


    document.getElementById("water-max-input").setAttribute("placeholder", waterMax + " cups");
    document.getElementById("calories-max-input").setAttribute("placeholder", calMax + " calories");
    document.getElementById("carbs-max-input").setAttribute("placeholder", carbMax + " carbs");
    document.getElementById("sugar-max-input").setAttribute("placeholder", sugMax + " sugars");
    document.getElementById("sodium-max-input").setAttribute("placeholder", sodMax + " msgs");
    document.getElementById("sleep-max-input").setAttribute("placeholder", (sleepMax / 60) + " hours");
    document.getElementById("exercise-max-input").setAttribute("placeholder", exMax + " minutes");
}

function setMax(statType) {
    let max = document.getElementById(statType + "-max-input").value;

    max *= statType == "sleep" ? 60 : 1;

    localStorage.setItem(statType + "MaxAmount", max);
    setProgress(statType, statType + "Progress");
}

function setProgress(statType, statProgressVar) {
    let currentAmount = localStorage.getItem(statType + "CurrentAmount") != null
        ? parseInt(localStorage.getItem(statType + "CurrentAmount")) : 0;
    let maxAmount = localStorage.getItem(statType + "MaxAmount") != null
        ? parseInt(localStorage.getItem(statType + "MaxAmount")) : 1;
    let progress = (currentAmount / maxAmount) * 100;
    localStorage.setItem(statProgressVar, progress);
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
