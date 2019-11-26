var currentDay = $("#currentDay");

// var hours = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5];
// for(var i = 0; i < hours.length; i++){
    
// };

var firsthour = $("#firsthour").val(m.function("h"));
// (firsthour).textContent = "8:00AM";

var secondhour = $("#secondhour");
(secondhour).textContent = "9:00AM";

var thirdhour = $("#thirdhour");
(thirdhour).textContent = "10:00AM ";

var fourthhour = $("#fourthhour");
(fourthhour).textContent = "11:00AM ";

var fifthhour = $("#fifthhour");
(fifthhour).textContent = "12:00AM ";

var sixthhour = $("#sixthhour");
(sixthhour).textContent = "1:00PM";

var seventhhour = $("#seventhhour");
(seventhhour).textContent = "2:00PM";

var eigthhour = $("#eigthhour");
(eigthhour).textContent = "3:00PM";

var ninthhour = $("#ninthhour");
(ninthhour).textContent = "4:00PM";

var tenthhour = $("#tenthhour");
(tenthhour).textContent = "5:00PM";

//if var currentDay is less than or equal to the time specificed in the div, 
//set attribute to ___

//set current time value to ""

// var currentTime = "";
// //if number in variable is less than the number in the value, set attribute to ___
// if(currentTime < 1){
//     currentHour1.attributes()
// }
//else if number in varaible is equal to the number in the value, set attribute to___

//else if number in variable is more than number in value, set attribute to___

//8 am
$("#saveBtn1").on("click", function(e){
    e.preventDefault();
    console.log($("#myText1").val());
    localStorage.setItem('Task 1:', $("#myText1").val());
});

local1 = localStorage.getItem('Task 1:');
$("#myText1").val(local1);

//9am
$("#saveBtn2").on("click", function(e){
    e.preventDefault();
    console.log($("#myText2").val());
    localStorage.setItem('Task 2:', $("#myText2").val());
});

local2 = localStorage.getItem('Task 2:');
console.log(local2);
$("#myText2").val(local2);

//10am
$("#saveBtn3").on("click", function(e){
    e.preventDefault();
    console.log($("#myText3").val());
    localStorage.setItem('Task 3:', $("#myText3").val());
});

local3 = localStorage.getItem('Task 3:');
$("#myText3").val(local3);

//11am
$("#saveBtn4").on("click", function(e){
    e.preventDefault();
    console.log($("#myText4").val());
    localStorage.setItem('Task 4:', $("#myText4").val());
});

local4 = window.localStorage.getItem('Task 4:');
console.log(local4);
$("#myText4").val(local4);

//12pm
$("#saveBtn5").on("click", function(e){
    e.preventDefault();
    console.log($("#myText5").val());
    localStorage.setItem('Task 5:', $("#myText5").val());
});

local5 = window.localStorage.getItem('Task 5:');
console.log(local5);
$("#myText5").val(local5);

//1pm
$("#saveBtn6").on("click", function(e){
    e.preventDefault();
    console.log($("#myText6").val());
    localStorage.setItem('Task 6:', $("#myText6").val());
});

local6 = window.localStorage.getItem('Task 6:');
console.log(local6);
$("#myText6").val(local6);

//2pm
$("#saveBtn7").on("click", function(e){
    e.preventDefault();
    console.log($("#myText7").val());
    localStorage.setItem('Task 7:', $("#myText7").val());
});

local7 = window.localStorage.getItem('Task 7:');
console.log(local7);
$("#myText7").val(local7);

//3pm
$("#saveBtn8").on("click", function(e){
    e.preventDefault();
    console.log($("#myText8").val());
    localStorage.setItem('Task 8:', $("#myText8").val());
});

local8 = window.localStorage.getItem('Task 8:');
console.log(local8);
$("#myText8").val(local8);

//4pm
$("#saveBtn9").on("click", function(e){
    e.preventDefault();
    console.log($("#myText9").val());
    localStorage.setItem('Task 9:', $("#myText9").val());
});

local9 = window.localStorage.getItem('Task 9:');
console.log(local9);
$("#myText9").val(local9);

//5pm
$("#saveBtn10").on("click", function(e){
    e.preventDefault();
    console.log($("#myText10").val());
    localStorage.setItem('Task 10:', $("#myText10").val());
});

local10 = window.localStorage.getItem('Task 10:');
console.log(local10);
$("#myText10").val(local10);

//if current time block is in the past, assign class of .past 
//if current time block is present, assign class of .present
//if current time block is in the future, assign class of .future 