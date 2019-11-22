var saveButton = $(".btn");
var userInput = [];//whatever the user types in
var currentDay = $("#currentDay");

// var date = $("#date");
// $("#current-day").append(date);

// currentDay.moment().format('MMMM Do YYYY, h:mm:ss a');

startButton.addEventListener("click", function(event){
    localStorage.setItem('input', []);//whatever the use types in
})
