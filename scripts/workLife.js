let d = new Date();
let startTime = new Date();
let endTime = new Date();
let workLevel = 0;

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

        let timesMessage = "";
        let startHour = startTime.getHours() > 12 ? startTime.getHours() - 12 : startTime.getHours();
        let endHour = endTime.getHours() > 12 ? endTime.getHours() - 12: endTime.getHours();
        let startMinutes = (startTime.getMinutes() + "").padStart(2, '0');
        let endMinutes = (endTime.getMinutes() + "").padStart(2, '0');
        let startMeridiem = startTime.getHours() > 12 ? "pm " : "am ";
        let endMeridiem = endTime.getHours() > 12 ? "pm " : "am ";
        let startWork = d2.getTime() < startTime.getTime() ? "Work starts at " : "Work started at ";
        let endWork = d2.getTime() < endTime.getTime() ? "work ends at " : "work ended at ";

        timesMessage = startWork + startHour + ":" + startMinutes + startMeridiem + " and " + endWork + endHour
            + ":" + endMinutes + endMeridiem;

        document.getElementById("timesSet").innerHTML = timesMessage;

        let currHour = d2.getHours() > 12 ? d2.getHours() - 12 : d2.getHours();
        let currMeridiem = d2.getHours() > 12 ? "pm" : "am";

        if (d2.getTime() < endTime.getTime()) {
            document.getElementById("timeCurrent").innerHTML = currHour + ":" + d2.getMinutes() + currMeridiem;
        } else {
            document.getElementById("timeCurrent").innerHTML = "";
        }
    }
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

function getProgress() {
    if (d.getTime() < startTime.getTime()) {
        return 0;
    } else if (d.getTime() > endTime.getTime()) {
        return 100;
    } else {
        return Math.round((d.getTime() - startTime.getTime()) / (endTime.getTime() - startTime.getTime())*10000) / 100;
    }
}