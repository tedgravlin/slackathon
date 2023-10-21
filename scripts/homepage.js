window.addEventListener("load", (event) => {
    // Water
    setCurrentAmount('waterCurrentAmount', 1);
    setMaxAmount('waterMaxAmount', 8)
    setProgress('water', 'waterProgress');
    // Food
    setCurrentAmount('foodCurrentAmount', 500);
    setMaxAmount('foodMaxAmount', 1500)
    setProgress('food', 'foodProgress');
    getProgress();
});

function getProgress() {
    // Water
    document.getElementById('water-progress-bar').setAttribute("value", localStorage.getItem('waterProgress'));
    // Food
    document.getElementById('food-progress-bar').setAttribute("value", localStorage.getItem('foodProgress'));
    // Work
    document.getElementById('work-progress-bar').setAttribute("value", localStorage.getItem('workProgress'));
    // Sleep
    document.getElementById('sleep-progress-bar').setAttribute("value", localStorage.getItem('sleepProgress'));
    // Exercise
    document.getElementById('exercise-progress-bar').setAttribute("value", localStorage.getItem('exerciseProgress'));
}

function setProgress(statType, statProgressVar) {
    let currentAmount = localStorage.getItem(statType + 'CurrentAmount');
    let maxAmount = localStorage.getItem(statType + 'MaxAmount');
    let progress = (currentAmount / maxAmount) * 100;
    localStorage.setItem(statProgressVar, progress);
    document.getElementById(statType + '-progress-bar').setAttribute("value", progress);
}

function setCurrentAmount(statCurrentAmountVar, newAmount) {
    localStorage.setItem(statCurrentAmountVar, newAmount);
}

function setMaxAmount(statMaxAmountVar, newAmount) {
    localStorage.setItem(statMaxAmountVar, newAmount);
}

function addProgress(statType, statCurrentAmount, statProgressAmount, amount) {
    let progressBar = document.getElementById(statType + '-progress-bar');
    let currentAmount = localStorage.getItem(statCurrentAmount);
    let newProgress = Number(currentAmount) + amount;
    let max = progressBar.getAttribute("max");

    // If the new amount is larger than the max of the progress bar, return
    if (newProgress > max) {
        return;
    }

    localStorage.setItem(statCurrentAmount, newProgress);
    setProgress(statType, statProgressAmount);
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