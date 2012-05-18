//Dorian Lane
//May 17th, 2012
//SDI-Week 3 Project 3



var noob = "PVT Jorge Manada",
	tired = true,
	days = 3,
	home = "Reception Company",
	georgia = "Capo",
	where = "Fort Lewis",
	car  = "Chevy Trailblazer",
	team = noob + georgia;
	
 
	
	console.log(georgia +  " thought it would be a good idea to drive to " + where + "."),                                                                                                                                                                                                                                                                  
	console.log("Lets just in the " + car + " says " + georgia + " or you will be here for the next nine weeks "),
	console.log("Haha, funny guy"),
	console.log(team + "  ..made the	 " + days + " day trip to " + where + ", what road warriors! ");


if (tired = true) {
	console.log(" Man, what a long journey!! ")
}
else {console.log(" Looks like the Army has changed from when my father was in")
}
var daysallowed = 4
if (days > daysallowed) {
	console.log( " Wonderful, we both have made it with enough time remaining, so we both get bonuses.") 
} 
else {console.log("What took you us so long?");
};

var speed = 1;
var lap = 1;

console.log("The next morning at pt...");
var runlaps = function (m) {
	var maxedout = m * speed
	console.log(" Wow " + noob +  " you ran " + maxedout + " laps.")
	return;runlaps
};

runlaps(7);


console.log("It's hard being the new guys in the unit... ")
var  hotseat = function () {
	console.log(noob + " and" + georgia + " are in the spotlight");
    return;hotseat
};
hotseat();

console.log("We need 2 soldiers to do 8 hour guard duty on Sergeant Major..." + noob + " I'm sending you."); 


var didyouguard = function(t) {
	if (t > 8) {
		console.log("Good job you have completed the watch.")
};
 
return;didyouguard;
didyouguard(9);
};
