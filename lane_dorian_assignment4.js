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

//Start Volume 4
//Does a string follow a 123-456-7890 pattern like a phone number?

// this is my code to run a string against a certain parameter to tell if it is a phone number


var quit = "123-456-7889"
var quiz = /\(?\d{3}\)?([-\/\.])\d{3}\1\d{4}/;    

function testnumber (good) {
	var good = quit.search(quiz);
if (!good)
    console.log("your number is a valid number");
else 
	console.log("your number is invalid")    
}
testnumber(quit)


// i used the confirm statement (!) in line 9 after googling
//End Volume 4

//Start Volume 5
//Does a string follow an aaa@bbb.ccc pattern like an email address?

// this will be my code to test website names against
//parameters, right now i am getting back undefined



function testsite (set, mines) {
    var set = "gravy.com"
    var mines = /[.](?=com)/
    var good = set.search(mines);
if (!good)
    console.log("welcome to world wide web");
else 
	console.log("your too old")    
}
testsite()

//End Volume 5

