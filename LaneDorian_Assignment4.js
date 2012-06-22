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
