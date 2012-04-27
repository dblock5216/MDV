//Dorian Lane
//April 26th, 2012
//SDI-Assignment 4

//This is my reference lib for the visual frameworks class we have coming up


//Start Volume 1
//Find the number of hours or days difference between two dates//


// the code i came up with

function getNewtime() {
	var currentdate = Date.now();
	var olddate = new Date(1998,3,24,12,45,55,777);
	newtime = currentdate - olddate;
	newtime;newtime
};

// this shows the difference between two different dates
//End Volume 1



//Start Volume 2
//Format a number to use a specific number of decimal places, as for money.


// this is the code i assembled
function cashout () {
	var money = 12;
	var conversion = money.toFixed(2);
	return conversion;
};

cashout()

//this is my function to convert numbers into numbers with decimal point
//End Volume 2

//Start Volume 3
//Is the string a URL?

// this is my code to tell if a string is a url or not 


var again = /http|https/;
var joy = "https.ifiguredthisoutmyself.com"; 
glad = string.match(again);

function checkstring (glad) {
    console.log("it is in the string")
}
else console.log("it is not");

checkstring()
// End Volume 3