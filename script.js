// HOOKS to the DOM
var currentDayEl = $('#currentDay');
var textAreaEl = $('<textarea>');
var rowEl = $('.row')
var saveBtnEl = $(".saveBtn")

// state variables


// constant variables
const workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]

// function to display the current day
function currentDay() {
    var dayToday = moment().format('dddd, MMMM Do');
    currentDayEl.text(dayToday);
}

function reload() {
    for (let i = 0; i < 9; i++) {
        console.log(localStorage.getItem(i))
        
        

    }
}



// function to display if time is in the past, present or future
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
function timeDisplay() {
    var timeToday = moment().format('H');
    // console.log(timeToday)
    
var btnList = document.getElementsByClassName('saveBtn')
    for (let i = 0; i < btnList.length; i++) {
        btnList[i].addEventListener('click', function(event) {
            var savedEntry = event.target.previousElementSibling.value;
            // console.log(savedEntry)
            // saving to local storage
            localStorage.setItem(i, savedEntry)
    })
}
  
for (var i = 0; i < workHours.length; i++) {
        // console.log(workHours[i]);
        if (timeToday == workHours[i]) {
            // console.log("present");
            // remove past & future class from truthy
            // var presentTime = document.querySelector(`${workHours[i]}`);
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
            // console.log(document.getElementById(`${workHours[i]}`).classList.value)
            // let currentTimeBlock = document.getElementById(`${workHours[i]}`)
            // currentTimeBlock.setAttribute("class", `${document.getElementById(`${workHours[i]}`).classList.value+" past"}`)
            // remove present & future from truthy
            var pastTimeBlock = document.getElementById(`${workHours[i]}`)
            pastTimeBlock.classList.remove('present')
            pastTimeBlock.classList.remove('future')
        }
    }
}
    
// function to save event entered in timeblock
// should be saved in local storage, so event persists despite refresing


currentDay()
timeDisplay()
reload()


// use for loop to get items from local storage?
// function getFromLocalStorage() {
//     for (let i = 9; i < 18; i++) {
//         document.getElementById(`${i}`).value = localStorage.getItem(`${i}`)
//     }
// }

// getFromLocalStorage()