

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
        lastSleep.innerHTML = "<p>" + lastHours + " Hour(s),  " + lastMinutes + " Minute(s) of sleep.</p>"
        if ((lastHours == "" || lastHours == 0) && (lastMinutes == "" || lastMinutes == 0)) {
            lastSleep.innerHTML = "<p>Get some sleep!</p>"
        }
        else if ((lastHours != "" && lastHours != 0) && (lastMinutes == "" || lastMinutes == 0)) {
            lastSleep.innerHTML = "<p>" + lastHours + " Hour(s) of sleep.</p>"
        }
        else if ((lastMinutes != "" && lastMinutes != 0) && (lastHours == "" || lastHours == 0)) {
            lastSleep.innerHTML = "<p>" + lastMinutes + " Minute(s) of sleep.</p>"
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