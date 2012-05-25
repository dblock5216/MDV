//Dorian Lane
//April 26th, 2012
//SDI-Assignment 4

//This is my reference lib for the visual frameworks class we have coming up


//Start Volume 1
//Find the number of hours or days difference between two dates//


// the code i came up with
	
var wastetime = function() {
	console.log("Time has elapsed")
};
var getnewtime = function() {
	var currentdate = new Date(); // this code as-is will get the current date
	var olddate = new Date(); // this is one of the formats to manualy set a date
	newtime = currentdate - olddate;
	console.log("Time difference: " + String(currentdate - olddate) + ".");
	return;getnewtime
};
wastetime();
getnewtime();///GO
	
	


// this shows the difference between two different dates
//End Volume 1



//Start Volume 2
//Format a number to use a specific number of decimal places, as for money.


// this is the code i assembled
function assembleNumber(num, places) {
	var finishedproduct = Math.round(num*Math.pow(10,places))/Math.pow(10,places);
	return finishedproduct;
}
assembleNumber(20, 2);

//this is my function to convert numbers into numbers with decimal point
//End Volume 2

//Start Volume 3
//Is the string a URL?

// this is my code to tell if a string is a url or not 

function checkstring (sitename) {
    var regex = /http|https|www|.com/, 
    check = sitename.match(regex);
    return;check;
if (!finish) {
    console.log("It is validated!")
    }
};
checkstring("www.google.com")


// End Volume 3

//Start Volume 4
//Does a string follow a 123-456-7890 pattern like a phone number?

// this is my code to run a string against a certain parameter to tell if it is a phone number

var testnumber = function(phone) {
    var regex = /^[2-9]\d{2}-\d{3}-\d{4}$/;
    var good = phone.search(regex);
    return;good
};
testnumber("apples")




// confirm statement (!) in line 9 after googling
//End Volume 4

//Start Volume 5
//Does a string follow an aaa@bbb.ccc pattern like an email address?

function testsite(email) {
    var mines = /^w\/[.](?=com)/
    var format = email.search(mines);
    return;true;
if (email = true) {
    console.log("Would you ike to check your email?")

};
testsite("www.johnny6@mike.com");
};


//End Volume 5


//Start Volume 6
//Given a string version of a number,
//such as "42", return the value as an actual Number, such as 42.

//this is my code to turn the value of my string into an actual number
function conversion(number) {
   doit = eval(number.valueOf())
    console.log(doit)
};

conversion("99")


//End Volume 6

//Start Volume 7
//Title-case a string (split into words, then uppercase the first letter of each word)


// incomplete code i am trying to split a string and capitalize 


function doit (string) {
        
        var iwasright = string.split(" ");
           
for (var i = ""; i < iwasright; i++) {
     console.log(iwasright)
    
    }
};
doit("walmart really has good juice");
///Need to do CAPS



// at this time my return is undefined

//End Volume 7


//Start Volume 8
//Given an array of objects and the name of a key, return the array sorted by the value
//of that key in each of the objects
//why was this so hard for me lol

var cars = []//create blank array
cars[0] = {make:"ford", model:"mustang", seats:"3"}//push(for lack of better words) each object into the array
cars[1] = {make:"chevy", model:"tahoe", seats:"7"}
cars[2] = {make:"chrysler", model:"sebring", seats:"5"}
cars[3] = {make:"dodge", model:"ram", seats:"4"}

// this the function i assembled after 2 hours of research
function whyisthissohard (a,b) {//using the a, b scheme i bring this into my function	 
	if (a.seats < b.seats) // by assigning the seats key to the a, b scheme i can now tell it to compare my "seats" and 
	//return them in order from smallest to largest...cool 
		return -1;
	if (a.seats > b.seats)
		return 1;
	return 0;
}

cars.sort(whyisthissohard);

//End Volume 8

//Start Volume 9
//passing a number through an array comparing it to the numbers in the array according to a specific argument

// i created two instances to implement this function 
//because i was torn on the right way

//Function 1
	
function diditwork () {
	var gravedigger = [];
	gravedigger.push("4","7","12","2")//pushed numbers into array
    return Math.floor(gravedigger)//telling it to round down
}
	passed = gravedigger.some(diditwork);//using .some syntax i am comparing the numbers in the array to the parameters of my function
	
//Function 2
var myarray = [3, 2, 5, 8, 9];
var magicnumber = number;
function spinthatwheel (array, number) {
  for (var i = magicnumber; i > array; i++) {
  	return magicnumber > array[i];

  
  array.forEach(spinthatwheel(number) {
  	console.log("");
  };
  


return myarray > magicnumber; 
};
spinthatwheel(9);
//End Volume 9

//Start Volume 10
//return a string with the first separator changed to the second

// this is my incomplete code for returning a string  with seperator changes



function round2(string) {
mongoose = string.split(",")
for (i = 0; i<mongoose.length; i++) {
	console.log(i+'-'+mongoose[i]+'</>'); 
};
round2("Better not play with me, or you gonna get the axe, the bomb , and the makeup kit ");

//End Volume 10

//Start Volume 11
//Find the total value of just the numbers in an array


// this is my code for this function

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

//this is my attempt at coding a function for this method


var goldennumber = 6
var gym =newRegExp(/5\.0/)//created expression to look for any integer = to 5

function killfuzzy () {	
goldennumber.fuzzymatch(gym)
//i could go no further, even with google

// this was by far the hardest method to try and implement
//End volume 12
//End LIB!!!