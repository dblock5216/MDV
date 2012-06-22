//Dorian Lane
//June 21st, 2012
//SDI-Assignment 4

//Find the number of hours or days difference between two dates//

var getnewtime = function(cp, od) {
	newtime = cp - od;
	console.log("Time difference: " + String(cp - od) + ".");
	return getnewtime;
        
};

getnewtime("10242011", 09131967);///GO


//Given a string version of a number,
//such as "42", return the value as an actual Number, such as 42.
function conversion(number) {
   doit = eval(number.valueOf())
    console.log(doit)
};

conversion("99")

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

//Find the total value of just the numbers in an array, even if some of the items are not numbers.
function compare(array) {
    var re = /d/;
    bigsean = array.search(re),
    doit = eval(bigsean.valueOf()),
    console.log(doit)
};

compare("[4, f, 7, m, 9]");

//Does a string follow a 123-456-7890 pattern like a phone number?

var testnumber = function(phone) {
    var re = /^[2-9]\d{2}-\d{3}-\d{4}$/;
    var good = phone.match(re);
    return true|false;
};
testnumber("1-800-440-7788")
