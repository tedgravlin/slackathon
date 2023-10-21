window.addEventListener("load", (event) => {
    getProgress();
});

function getProgress() {
    // Water
    document.getElementById('water-progress-bar').setAttribute("value", localStorage.getItem('water'));
    // Food
    document.getElementById('food-progress-bar').setAttribute("value", localStorage.getItem('food'));
    // Work
    document.getElementById('work-progress-bar').setAttribute("value", localStorage.getItem('work'));
    // Sleep
    document.getElementById('sleep-progress-bar').setAttribute("value", localStorage.getItem('sleep'));
    // Exercise
    document.getElementById('exercise-progress-bar').setAttribute("value", localStorage.getItem('exercise'));
}

function setProgress(stat, newProgress) {
    localStorage.setItem(stat, newProgress);
    document.getElementById(stat + '-progress-bar').setAttribute("value", newProgress);
}

function addProgress(stat, amount) {
    let progressBar = document.getElementById(stat + '-progress-bar');
    let currentAmount = localStorage.getItem(stat);
    let newAmount = Number(currentAmount) + amount;
    let max = progressBar.getAttribute("max");

    // If the new amount is larger than the max of the progress bar, return
    if (newAmount > max) {
        return;
    }

    localStorage.setItem(stat, newAmount);
    progressBar.setAttribute("value", newAmount);
}

function toggleStatInfo(statType) {
    let statInfo = document.getElementById(statType + '-stat-info');

    if(statInfo.style.display == '') {
        statInfo.style.display = "none";
    }

    if (statInfo.style.display === 'none') {
        statInfo.style.display = "block";
    }
    else if (statInfo.style.display === 'block') {
        statInfo.style.display = "none";
    }
}