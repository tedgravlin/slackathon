let d = new Date();
let startTime = new Date();
let endTime = new Date();
let workLevel = 0;

function onLoad() {
    if (localStorage.getItem("startTime") != null) {
        startTime.setTime(localStorage.getItem("startTime"));
    } else {
        startTime.setHours(12, 0, 0);
    }

    if (localStorage.getItem("endTime") != null) {
        endTime.setTime(localStorage.getItem("endTime"));
    } else {
        startTime.setHours(12, 0, 0);
    }

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

    setInterval(update, 1000);

    function update() {
        let d2 = new Date();
        d.setTime(d2.getTime());

        x = getProgress();
        progress = document.getElementById("workProgress");

        document.getElementById("time").innerHTML = x + "%";
        progress.style.width = x + "%";
    }
}

function validateForm() {
    if (document.forms["timeForm"]["startTime"].value != "" && document.forms["timeForm"]["endTime"].value != "") {
        let start = document.forms["timeForm"]["startTime"].value;
        let end = document.forms["timeForm"]["endTime"].value;

        let startT = (start + "").split(":");
        let endT = (end + "").split(":");

        startTime.setHours(Number(startT[0]));
        startTime.setMinutes(Number(startT[1]));

        endTime.setHours(Number(endT[0]));
        endTime.setMinutes(Number(endT[1]));

        localStorage.setItem("startTime", startTime.getTime());
        localStorage.setItem("endTime", endTime.getTime());
    }
}

function getProgress() {
    if (d.getTime() < startTime.getTime()) {
        return 0;
    } else if (d.getTime() > endTime.getTime()) {
        return 100;
    } else {
        return Math.round((d.getTime() - startTime.getTime()) / (endTime.getTime() - startTime.getTime())*10000) / 100;
    }
}