// var userInput = '';//whatever the user types in
var currentDay = $("#currentDay");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");

document.getElementById("saveBtn").addEventListener("click", function(){
    console.log("click");
    var user = {
        Task1: input1.value.trim(),
        Task2: input2.value.trim()
    };
    // localStorage.setItem('input', []);//whatever the use types in
    localStorage.setItem('Task 1:', user);
    localStorage.setItem('Task 2:', user);
    console.log(user);
});

//if current time block is in the past, assign class of .past 
//if current time block is present, assign class of .present
//if current time block is in the future, assign class of .future 