const d = new Date();
const startTime = new Date();
const endTime = new Date();

function timeProgress() {

    startTime.setHours(12, 0, 0);
    endTime.setHours(20, 0, 0);

    document.getElementById("time").innerHTML = getProgress();
}

function getProgress() {
    return (d.getTime() - startTime.getTime()) / (endTime.getTime() - startTime.getTime());
}