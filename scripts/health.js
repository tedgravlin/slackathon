

function getSleepGoal() {
    let sleepGoal = document.getElementById("sleep-goal")
    let lastSleep = document.getElementById("last-night-sleep")

    let lastHours = localStorage.getItem("lastHours");
    let lastMinutes = localStorage.getItem("lastMinutes");

    let goal = 8

    sleepGoal.innerHTML = "<p>Sleep Goal: " + goal + "</p>"
    console.log(lastHours)
    console.log(lastMinutes)
    if (lastHours != null && lastMinutes != null) {
        lastSleep.innerHTML = "" + lastHours + " Hour(s),  " + lastMinutes + " Minute(s) of sleep."
        if ((lastHours == "" || lastHours == 0) && (lastMinutes == "" || lastMinutes == 0)) {
            lastSleep.innerHTML = "Get some sleep!"
        }
        else if ((lastHours != "" && lastHours != 0) && (lastMinutes == "" || lastMinutes == 0)) {
            lastSleep.innerHTML = "" + lastHours + " Hour(s) of sleep."
        }
        else if ((lastMinutes != "" && lastMinutes != 0) && (lastHours == "" || lastHours == 0)) {
            lastSleep.innerHTML = "" + lastMinutes + " Minute(s) of sleep."
        }
    }
    else {
        "Get some sleep"
    }
}

function setLastSleep() {
    let lastSleep = document.getElementById("last-night-sleep")
    let lastHours = document.getElementById("sleep-hours").value
    let lastMinutes = document.getElementById("sleep-minutes").value

    console.log(lastHours)
    console.log(lastMinutes)

    lastSleep.innerHTML = "<p>" + lastHours + " " + lastMinutes + "</p>"
    localStorage.setItem("lastHours", lastHours)
    localStorage.setItem("lastMinutes", lastMinutes)
}