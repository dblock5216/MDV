//Dorian Lane
//May 24th, 2012
//SDI-Assignment 4

//This is my reference lib for the visual frameworks class we have coming up


//Start Volume 1
//Find the number of hours or days difference between two dates//
	
var wastetime = function() {
	console.log("Time has elapsed")
};
var getnewtime = function() {
	var currentdate = new Date(); 
	var olddate = new Date(); 
	newtime = currentdate - olddate;
	console.log("Time difference: " + String(currentdate - olddate) + ".");
	return getnewtime;
};
wastetime();
getnewtime();///GO

//End Volume 1



//Start Volume 2
//Format a number to use a specific number of decimal places, as for money.

function assembleNumber(num, places) {
	var finishedproduct = Math.round(num*Math.pow(10,places))/Math.pow(10,places);
	return finishedproduct;//Number Return Assignment 2
}
assembleNumber(20, 2);

//this is my function to convert numbers into numbers with decimal point
//End Volume 2
