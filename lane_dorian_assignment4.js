//Dorian Lane
//April 26th, 2012
//SDI-Assignment 4

//This is my reference lib for the visual frameworks class we have coming up


//Start Volume 1
//Find the number of hours or days difference between two dates//


// the code i came up with

function getNewtime() {
	var currentdate = Date.now(); // this code as-is will get the current date
	var olddate = new Date(1998,3,24,12,45,55,777); // this is one of the formats to manualy set a date
	newtime = currentdate - olddate;
	newtime;newtime
};

// this shows the difference between two different dates
//End Volume 1



//Start Volume 2
//Format a number to use a specific number of decimal places, as for money.


// this is the code i assembled
function cashout () {
	var money = 12; // change this to whatever amount fits
	var conversion = money.toFixed(2); // the number in parentheses is going to dictate the number of decimal place
	return conversion;
};

cashout()

//this is my function to convert numbers into numbers with decimal point
//End Volume 2

//Start Volume 3
//Is the string a URL?

// this is my code to tell if a string is a url or not 

function checkstring (glad) {
    var again = /http|https/; //here i set the pattern to match the string against
    var joy = "https.ifiguredthisoutmyself.com"; 
glad = joy.match(again);// here i tell the computer to match the string against my pattern
    console.log("it is in the string")
};
checkstring()
// End Volume 3

//Start Volume 4
//Does a string follow a 123-456-7890 pattern like a phone number?

// this is my code to run a string against a certain parameter to tell if it is a phone number

function testnumber (good) {
	var quit = "123-456-7889"
	var quiz = /\(?\d{3}\)?([-\/\.])\d{3}\1\d{4}/;/ this pattern looks for 3 digits, a hyphen,
// 3 more digits another hyphen, and finally 4 more digits, in that order

	var good = quit.search(quiz); // i am telling computer to match the string up against the pattern 
if (!good)// confirm statement (!) in line 9 after googling( thank you lynda.com)
    console.log("your number is a valid number");
else 
	console.log("your number is invalid")    
}
testnumber(quit)


// confirm statement (!) in line 9 after googling
//End Volume 4

//Start Volume 5
//Does a string follow an aaa@bbb.ccc pattern like an email address?

// this will be my code to test website names against
//parameters, right now i am getting back undefined



function testsite (set, mines) {
    var set = "gravy.com"
    var mines = /[.](?=com)///setting the pattern to look for .com at the end of the string
    var good = set.search(mines);// matching string against pattern
if (!good)
    console.log("welcome to world wide web");
else 
	console.log("your too old")    
}
testsite()

//End Volume 5


//Start Volume 6
//Given a string version of a number,
//such as "42", return the value as an actual Number, such as 42.

//this is my code to turn the value of my string into an actual number

var value = "4567891234"
console.log(eval(value.valueOf()));// evaluates the value of the string and since a string is always gonna 
//returned as a number it comes back as a number


//End Volume 6

//Start Volume 7
//Title-case a string (split into words, then uppercase the first letter of each word)


// incomplete code i am trying to split a string and capitalize 


function onecaponeword (great) 
{
var great = "Man this is challenging"
	return 
great.split(" ") +// i am splitting the string at every instance of whitespace
great.charAt(0).toUpperCase(1) //starting at the first character i want to capitalize each element of the string
}
onecaponeword();

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
var magicnumber = 7;
function spinthatwheel (a) {
	return a.myarray > magicnumber //using a variable key scheme i compare the array to the predetermined number
};

spinthatwheel()
//End Volume 9

//Start Volume 10
//return a string with the first separator changed to the second

// this is my incomplete code for returning a string  with seperator changes

var hard = "a,b,c";
mongoose = hard.split(",")// i split the string at each comma creating an array of the remainder
for (i = 0; i<mongoose.length; i++) {// for loop cycling through the array splitting and seperating the string
	console.log(i+'-'+mongoose[i]+'</>'); //console logs the new array with each element complimented by the previous separator
};

//End Volume 10

//Start Volume 11
//Find the total value of just the numbers in an array


// this is my code for this function

function whycantwegotothestore(mew) {
	  var mew = [];
    mew.push( 1, "a", 2, 4, "t")
var playthe = mew.toString();  //combines string  
    return playthe; //returns created string above 
};

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