let d = new Date();
let startTime = new Date();
let endTime = new Date();
let workLevel = 0;

let timesMessage = "";
let startHour = 0;
let endHour = 0;
let startMinutes = 0;
let endMinutes = 0;
let startMeridiem = 0;
let endMeridiem = 0;
let startWork = 0;
let endWork = 0;

let currTime = "";
let currHour = 0;
let currMeridiem = 0;

let strJSON = '{"tasks":[]}';
let defaultJSON = '{"tasks":[]}';
let objJSON = null;

function onLoad() {

    if (localStorage.getItem("startTime") != null) {
        startTime.setTime(localStorage.getItem("startTime"));
    } else {
        startTime.setHours(23, 59, 59);
    }

    if (localStorage.getItem("endTime") != null) {
        endTime.setTime(localStorage.getItem("endTime"));
    } else {
        endTime.setHours(23, 59, 59);
    }

    if (startTime.getDay() != d.getDay() || endTime.getDay() != d.getDay()) {
        startTime.setHours(23, 59, 59);
        endTime.setHours(23, 59, 59);
    }

    startHour = startTime.getHours() > 12 ? startTime.getHours() - 12 : startTime.getHours();
    startHour = startHour == 0 ? 12 : startHour;
    endHour = endTime.getHours() > 12 ? endTime.getHours() - 12: endTime.getHours();
    endHour = endHour == 0 ? 12 : endHour;
    startMinutes = (startTime.getMinutes() + "").padStart(2, '0');
    endMinutes = (endTime.getMinutes() + "").padStart(2, '0');
    startMeridiem = startTime.getHours() >= 12 ? "pm " : "am ";
    endMeridiem = endTime.getHours() >= 12 ? "pm " : "am ";

    getJSON();

    timeProgress();
}

function timeProgress() {
    
    if (localStorage.getItem("tasksJSON") != null) {
        let taskList = "";
        for (let task in objJSON['tasks']) {
            let checked = objJSON['tasks'][task].status == "complete" ? " checked=true" : "";
            console.log(objJSON['tasks'][task].taskID + ", " + checked);
            taskList += '<input onclick="updateCompletion(' + objJSON['tasks'][task].taskID
                + ')" type="checkbox" id="task' + objJSON['tasks'][task].taskID + '" name=task"'
                + objJSON['tasks'][task].taskID + '"' + checked + '><label for="task"'
                + objJSON['tasks'][task].taskID + '>' + objJSON['tasks'][task].taskName + '</label><br>';

            
        }

        document.getElementById("taskList").innerHTML = taskList;
    }

    let x = getProgress();
    let progress = document.getElementById("workProgress");

    startWork = d.getTime() < startTime.getTime() ? "Work starts at " : "Work started at ";
    endWork = d.getTime() < endTime.getTime() ? "work ends at " : "work ended at ";

    currHour = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
    currMeridiem = d.getHours() > 12 ? "pm" : "am";

    currTime = currHour + ":" + (d.getMinutes() + "").padStart(2, '0')
        + currMeridiem;

    timesMessage = startWork + startHour + ":" + startMinutes + startMeridiem + " and " + endWork + endHour
        + ":" + endMinutes + endMeridiem + ", it is currently " + currTime;

    document.getElementById("timesSet").innerHTML = timesMessage;

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

        // d.setDate(21);

        if (d2.getDay() != d.getDay()) {
            strJSON = defaultJSON;
            localStorage.setItem("tasksJSON", strJSON);
        }

        x = getProgress();
        progress = document.getElementById("workProgress");

        document.getElementById("time").innerHTML = x + "%";
        progress.style.width = x + "%";

        startWork = d2.getTime() < startTime.getTime() ? "Work starts at " : "Work started at ";
        endWork = d2.getTime() < endTime.getTime() ? "work ends at " : "work ended at ";

        currHour = d2.getHours() > 12 ? d2.getHours() - 12 : d2.getHours();
        currMeridiem = d2.getHours() > 12 ? "pm" : "am";

        if (d2.getTime() < endTime.getTime()) {
            currTime = currHour + ":" + (d.getMinutes() + "").padStart(2, '0')
             + currMeridiem;
        }

        timesMessage = startWork + startHour + ":" + startMinutes + startMeridiem + " and " + endWork + endHour
        + ":" + endMinutes + endMeridiem + ", it is currently " + currTime;

        document.getElementById("timesSet").innerHTML = timesMessage;
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

function getJSON() {
    if (localStorage.getItem("tasksJSON") != null) {
        strJSON = localStorage.getItem("tasksJSON");
        objJSON = JSON.parse(strJSON);
    }
}

function addTask() {
    let task = prompt("Please enter the name of the task", "");
  if (task != null) {
    objJSON = JSON.parse(strJSON);
    objJSON['tasks'].push({"taskID":objJSON['tasks'].length, "taskName":task, "status":"incomplete"});
  }

  strJSON = JSON.stringify(objJSON);
  localStorage.setItem("tasksJSON", strJSON);

  timeProgress();
}

function updateCompletion(x) {
    console.log(objJSON['tasks'][x]);

    objJSON['tasks'][x].status = objJSON['tasks'][x].status == "incomplete" ? "complete" : "incomplete";

    strJSON = JSON.stringify(objJSON);
    localStorage.setItem("tasksJSON", strJSON);
}