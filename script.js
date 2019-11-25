// var userInput = '';//whatever the user types in
var currentDay = $("#currentDay");
var text1 = document.getElementById("myText1");
var text2 = document.getElementById("myText2");

//8 am
$("#saveBtn1").on("click", function(e){
    e.preventDefault();
    console.log("click");
    console.log($("#myText1").val());
    localStorage.setItem('Task 1:', $("#myText1").val());
});

var local1 = window.localStorage.getItem('Task 1:');
console.log(local1);
text1.append(local1);

//9am
$("#saveBtn2").on("click", function(e){
    e.preventDefault();
    console.log("click2");
    console.log($("#myText2").val());
    localStorage.setItem('Task 2:', $("#myText2").val());
});

var local2 = window.localStorage.getItem('Task 2:');
console.log(local2);
text2.append(local2);

//if current time block is in the past, assign class of .past 
//if current time block is present, assign class of .present
//if current time block is in the future, assign class of .future 