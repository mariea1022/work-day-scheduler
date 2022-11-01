// HOOKS to the DOM
var currentDayEl = $('#currentDay');
var textAreaEl = $('textarea');
var rowEl = $('.row')
var saveBtnEl = $(".saveBtn")

// state variables


// constant variables
const workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
function currentDay() {
    var dayToday = moment().format('dddd, MMMM Do');
    currentDayEl.text(dayToday);
}

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
function timeDisplay() {
    var timeToday = 11
    // moment().format('H');
    // console.log(timeToday)
    
for (var i = 0; i < workHours.length; i++) {
        // console.log(workHours[i]);
        if (timeToday == workHours[i]) {
            // console.log("present");
            // remove past & future class from truthy
            var currentTimeBlock = document.getElementById(`${workHours[i]}`)
            // console.log(currentTimeBlock)
            currentTimeBlock.classList.remove('past')
            currentTimeBlock.classList.remove('future')
        }
        else if (timeToday < workHours[i]) {
            // console.log("future");
            // remove past & present from truthy
            var futureTimeBlock = document.getElementById(`${workHours[i]}`)
            futureTimeBlock.classList.remove('past')
            futureTimeBlock.classList.remove('present')
            
        }
        else {
            // console.log("past");
            // remove present & future from truthy
            var pastTimeBlock = document.getElementById(`${workHours[i]}`)
            pastTimeBlock.classList.remove('present')
            pastTimeBlock.classList.remove('future')
        }
    }
    
    // WHEN I click into a timeblock
    // THEN I can enter an event
    // WHEN I click the save button for that timeblock
    // THEN the text for that event is saved in local storage
    var btnList = document.getElementsByClassName('saveBtn')
    for (let i = 0; i < btnList.length; i++) {
        btnList[i].addEventListener('click', function(event) {
            var savedEntry = event.target.previousElementSibling.value;
            // console.log(savedEntry)
            // saving to local storage
            localStorage.setItem(i, savedEntry)
    })
}
}
    
// WHEN I refresh the page
// THEN the saved events persist

function reload() {
    let textAreas = $("textarea")
    for (let i = 0; i < 9; i++) {
        console.log(localStorage.getItem(i))
        if(localStorage.getItem(i)){
            textAreas[i].value = localStorage.getItem(i)
        }
    }
}

currentDay()
timeDisplay()
reload()
