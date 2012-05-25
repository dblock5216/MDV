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

//Start Volume 3
//Is the string a URL?
function checkstring (sitename)//String Argument Assignment 3 {
    var re = /http|https|www|.com/, 
    check = sitename.match(re);
    return true|false;//Boolean Return Assignment 2
};
checkstring("www.google.com");

// End Volume 3

//Start Volume 4
//Does a string follow a 123-456-7890 pattern like a phone number?

var testnumber = function(phone) {
    var re = /^[2-9]\d{2}-\d{3}-\d{4}$/;
    var good = phone.match(re);
    return good;
};
testnumber("1-800-440-7788")

//End Volume 4

//Start Volume 5
//Does a string follow an aaa@bbb.ccc pattern like an email address?

function testsite(email) {
    var mines = /[.](?=com)/
    var format = email.match(mines);
    return format;
};
testsite(".com");

//End Volume 5


//Start Volume 6
//Given a string version of a number,
//such as "42", return the value as an actual Number, such as 42.
function conversion(number) {
   doit = eval(number.valueOf())
    console.log(doit)
};

conversion("99")

//End Volume 6

//Start Volume 8
//Given an array of objects and the name of a key, return the array sorted by the value
//of that key in each of the objects

var cars = []//create blank array
cars[0] = {make:"ford", model:"mustang", seats:"3"}//push(for lack of better words) each object into the array
cars[1] = {make:"chevy", model:"tahoe", seats:"7"}
cars[2] = {make:"chrysler", model:"sebring", seats:"5"}
cars[3] = {make:"dodge", model:"ram", seats:"4"}

function whyisthissohard (a,b)//Object Argument Assignment 3 {	 
	if (a.seats < b.seats) 
		return -1;
	if (a.seats > b.seats)  //Nested Conditional Logic Assignment Project 1
		return 1;
	else
	return 0;
	return whyisthissohard;//Object Return Assignment 3
}

cars.sort(whyisthissohard);

//End Volume 8

//Start Volume 9
function spinthatwheel (array, number)//Array Argument Assignment3 {
  for (var i = array[i]; array[i] > number; array[i]++) {
  	return number < array[i];  //Array Return Assignment 2
    }
};
var one = [2, 3, 6];
var two = [9, 4, 7];
var three = one.concat(two);//Accessor Method Assignment 3
spinthatwheel([12, 2, 15, 58, 9], 1125);
  
  };
  
//End Volume 9

//Start Volume 10
function round2(string) {
mongoose = string.split(",")
for (i = 0; i<mongoose.length; i++) {
	console.log(i+'-'+mongoose[i]+'</>'); 
};
round2("Better not play with me, or you gonna get the axe, the bomb , and the makeup kit ");

//End Volume 10

//Start Volume 11

function compare(array) {
    var re = /d/;
    bigsean = array.search(re),
    doit = eval(bigsean.valueOf()),
    console.log(doit)
};

compare("[4, f, 7, m, 9]");

//End Volume 11

//Start Volume 12
//Fuzzy-match a number to a certain percent

function killfuzzy (number) {	
	var gym =newRegExp(/5\.0/)
	var approach = number.fuzzymatch(gym)
	console.log(approach)
	};
killfuzzy("5")

//End volume 12
//End LIB!!!
//Start Volume 7
//Title-case a string (split into words, then uppercase the first letter of each word)
 
function doit (string) {
        
        var iwasright = string.split(" ");
           
for (var i = ""; i < iwasright; i++) {
     console.log(iwasright)
    
    }
};
doit("walmart really has good juice");


//End Volume 7