
//Author: Dorian Lane
//SDI-Week 2 Assignment
//May 10, 2012
//Project 2



var recruit = "PVT Lane",
	pain = true,
	team = 2,
	daddy = "Drill Sergeant 'Don't You Know No Good' Clark",
	battlebuddy = "PFC Claiborne",
	osut = "Fort Sill",
	squad = 4,
	ghost = recruit + battlebuddy;	

	
	console.log(recruit + battlebuddy + " welcome to " + osut + " , Oklahoma!!! "),
	console.log(" Welcome to the United States Army, I'm " + daddy + " and I'm here to make you strong "),
	console.log(" The number one question is will there be pain...... " + pain),
	console.log(ghost + " ...we will be joining you into a " + team + " man team but i still want you to to remember that you are a still part of a bigger " + squad + " man squad ");


if (pain = true) {
	console.log(" Man, I think I made the wrong choice by signing up!! ")
}
else {console.log(" Looks like the Army has changed from when my father was in, things have gotten easier ")
}
if (team > squad) {
	console.log( " Man" + recruit + " I thought I told you and " + battlebuddy + " to get over there!! ") 
} 
else {console.log(" AYE!!! " + battlebuddy + " you and " + recruit + " go grab more soldiers and meet me at CQ ");
};

//Start Week 2 
//For loop
for (var days = 0;  days < 5; days++) {
	console.log(daddy + " woke us up on day " + days + " at five am to go running six miles singing the same song.")
};
if (days = 5) {
    console.log("The only day he wouldn't run was Sunday, the Holy Day.")
}; 

console.log("After PT, we would all gather around to see who could do the most pushups.");
//maxpushups function
var power = 1;
var max = 1;

var maxpushups = function (m) {
	var maxedout = m * power
	console.log(" Man " + recruit +  " you did " + maxedout + " pushups.")
	return;maxpushups
};

maxpushups(76);

console.log("Suddenly the sergeant major bursts in... ")
var  seesmaj = function () {
	console.log("AT EASE!!!!")
        return;seesmaj
};

seesmaj();



//Boolean
console.log("The next morning, at the PT test...."); 
var lapsran = undefined;
var didyourun = function (l) {
	if (l <= 8) {
		console.log("Good job you have completed the run.")
}
    else {console.log(recruit + "you have failed to completed the 2 mile run.")
}
return;didyourun
};
didyourun();


console.log("I have to try harder next time, this is what I have always wanted.");
console.log("The next week....");

var beatrun = function (didyourun) {
    console.log(recruit + " you did it, you finally conquered the 2 mile run.");
};
beatrun(8);
//combatives tournament
	console.log(recruit + " decided on combatives hoping to find his rise to fam.e");
	console.log("Good job " + recruit + " im impressed, here are your results:");
var welterweight = ["Mike", "Charles", "Jim", "Chad"],
	fighttimes = [ 60, 30, 120, 90];
var entertourney = function () {
	var howin = welterweight[fight],
		results = fighttimes[fight];
		console.log( "You beat " + howin + " in " + results + " seconds!");
}
var welterweight = ["Mike", "Charles", "Jim", "Chad"],
	fighttimes = [ 60, 30, 120, 90];
for (var fight = 0; fight< welterweight.length; fight++) {
	entertourney();
}
console.log("You won!");

//While loop
console.log("after winning the tournament, " + recruit + " decided to try the death march.");
var miles = 15
var endpoint = 0
var journey = function () {
while (miles > endpoint) {
	console.log("We only have " + miles + " miles left to go!")
	 miles--;
};

if (miles === endpoint) {
	console.log("You have finished the road march.")
}
	};
	journey();
console.log("As " + recruit + " smokes a cigarette with " + battlebuddy + " he reflects on his journey from civillain to soldier and how " + daddy + " had taught him to soldier.");



