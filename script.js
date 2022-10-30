// HOOKS to the DOM
var currentDayEl = document.querySelector('#currentDay');
var textAreaEl = document.querySelectorAll('textarea')

// state variables

// constant variables
const workHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

// function to display the current day
function currentDay() {
    var dayToday = moment().format('dddd, MMMM Do');
    currentDayEl.textContent = dayToday
}

// function to display if time is in the past, present or future
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
function timeDisplay() {
    var timeToday = moment().local().format('HH');;
    console.log(timeToday);
  
    for (var i = 0; i < workHours.length; i++) {
        // console.log(workHours[i]);
        if (timeToday === workHours[i]) {
            console.log("present");
        }
        else if (timeToday < workHours[i]) {
            console.log("future");
        }
        else {
            console.log("past");
        }
        
    }
    
}

// function to save event entered in timeblock
// should be saved in local storage, so event persists despite refresing


setInterval(currentDay, 1000);
setInterval(timeDisplay, 1000);

