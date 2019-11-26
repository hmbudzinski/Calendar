var currentDay = $("#currentDay");

//hours
// var hours = ["8", "9", "10", "11", "12", "1", "2", "3", "4", "5"];

// for(var i = 0; i < hours.length; i++){
//     $("#firsthour").val(hours[0]);
// };

var firsthour = $("#firsthour");
var secondhour = $("#secondhour");
var thirdhour = $("#thirdhour");
var fourthhour = $("#fourthhour");
var fifthhour = $("#fifthhour");
var sixthhour = $("#sixthhour");
var seventhhour = $("#seventhhour");
var eigthhour = $("#eigthhour");
var ninthhour = $("#ninthhour");
var tenthhour = $("#tenthhour");

//if var currentDay is less than or equal to the time specificed in the div, 
//set attribute to ___

var m = moment();
var currentTime = (m.format('hA'));
console.log(m.format('hA'));

//for top of scheduler
$("#currentDay").append(m.format('LLL'));

//for each time block
firsthour.append(m.format('8A'));
secondhour.append(m.format('9A'));
thirdhour.append(m.format('10A'));
fourthhour.append(m.format('11A'));
fifthhour.append(m.format('12A'));
sixthhour.append(m.format('1P'));
seventhhour.append(m.format('2P'));
eigthhour.append(m.format('3P'));
ninthhour.append(m.format('4P'));
tenthhour.append(m.format('5P'));

if ((m.format('8A')) < currentTime){
    $("#block1").addClass("past");
} else if ((m.format('8A')) === currentTime){
    $("#block1").addClass("present");
} else {
    $("#block1").addClass("future");
};

if ((m.format('9A')) < currentTime){
    $("#block2").addClass("past");
} else if ((m.format('9A')) === currentTime){
    $("#block2").addClass("present");
} else {
    $("#block2").addClass("future");
};

if ((m.format('10A')) < currentTime){
    $("#block3").addClass("past");
} else if ((m.format('10A')) === currentTime){
    $("#block3").addClass("present");
} else{
    $("#block3").addClass("future");
};

if ((m.format('11A')) < currentTime){
    $("#block4").addClass("past");
} else if ((m.format('11A')) === currentTime){
    $("#block4").addClass("present");
} else {
    $("#block4").addClass("future");
};

if ((m.format('12A')) < currentTime){
    $("#block5").addClass("past");
} else if ((m.format('12A')) === currentTime){
    $("#block5").addClass("present");
} else {
    $("#block5").addClass("future");
};

if ((m.format('1P')) < currentTime){
    $("#block6").addClass("past");
} else if ((m.format('1P')) === currentTime){
    $("#block6").addClass("present");
} else {
    $("#block6").addClass("future");
};

//code for storing user input
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