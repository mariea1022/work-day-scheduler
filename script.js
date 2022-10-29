// HOOKS to the DOM
var currentDayEl = document.querySelector('#currentDay');

// state variables

// constant variables

// handle displaying the current day
function currentDay() {
    var dayToday = moment().format('dddd, MMMM Do');
    currentDayEl.textContent = dayToday
}

setInterval(currentDay, 1000);

