// HOOKS to the DOM
var currentDayEl = $('#currentDay');
var textAreaEl = $('<textarea>');

// state variables


// constant variables
const workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]

// function to display the current day
function currentDay() {
    var dayToday = moment().format('dddd, MMMM Do');
    currentDayEl.text(dayToday);
}

// function to display if time is in the past, present or future
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
function timeDisplay() {
    var timeToday = moment().format('H');
    // console.log(timeToday)
    
    // console.log(document.getElementsByClassName('saveBtn'))
    // let btnList = document.getElementsByClassName('saveBtn')
    // for (let i = 0; i < btnList.length; i++) {
    //     btnList[i].addEventListener('click', function(event) {
    //         console.log(event.target.previousElementSibling)
    //     })
    // }
  
for (var i = 0; i < workHours.length; i++) {
        // console.log(workHours[i]);
        if (timeToday == workHours[i]) {
            console.log("present");
            // remove past & future class from true?
            // var presentTime = document.querySelector(`${workHours[i]}`);
            var currentTimeBlock = document.getElementById(`${workHours[i]}`)
            console.log(currentTimeBlock)
            currentTimeBlock.classList.remove('past')
            currentTimeBlock.classList.remove('future')
        }
        else if (timeToday < workHours[i]) {
            console.log("future");
            // remove past & present from true?
            currentTimeBlock.classList.remove('past')
            currentTimeBlock.classList.remove('present')
        }
        else {
            console.log("past");
            // console.log(document.getElementById(`${workHours[i]}`).classList.value)
            // let currentTimeBlock = document.getElementById(`${workHours[i]}`)
            // currentTimeBlock.setAttribute("class", `${document.getElementById(`${workHours[i]}`).classList.value+" past"}`)
            // remove present & future from true?
        }
    }
}
    


// function to save event entered in timeblock
// function saveEvent() {
// // click event
// should be saved in local storage, so event persists despite refresing
// }



// setInterval(currentDay, 1000);
// setInterval(timeDisplay, 1000);

// function getFromLocalStorage() {
//     for (let i = 9; i < 18; i++) {
//         document.getElementById(`${i}`).value = localStorage.getItem(`${i}`)
//     }
// }

// getFromLocalStorage()

currentDay()
timeDisplay()

// use for loop to get items from local storage
