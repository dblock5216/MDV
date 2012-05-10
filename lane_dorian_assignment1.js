
//Project 2 Scalable Data Infrastructures//
//Dorian Lane April 18, 2012//
//SDI- Week 3

var recruit = "PVT Lane",
	pain = true,
	team = 2,
	daddy = "Drill Sergeant 'Don't You Know No Good' Clark",
	battlebuddy = "PFC Claiborne",
	osut = "Fort Sill",
	squad = 4,
	ghost = recruit + battlebuddy;
	
console.log( recruit + battlebuddy + " welcome to " + osut + " , Oklahoma!!! "),
console.log( " Welcome to the United States Army, I'm " + daddy + " and I'm here to make you strong "),
console.log( " The number one question is will there be pain...... " + pain),
console.log( ghost + " ...we will be joining you into a " + team + " man team but i still want you to to remember that you are a still part of a bigger " + squad + " man squad ");


if (pain = true)
	console.log( " Man, I think I made the wrong choice by signing up!! ")
else (pain = false)
	console.log(" Looks like the Army has changed from when my father was in, things have gotten easier ");
	
if (team > squad)
	console.log( " Man" + recruit + " I thought I told you and " + battlebuddy + " to get over there!! ") 
else
	awol = squad - team,
	console.log(" AYE!!! " + battlebuddy + " you and " + recruit + " go grab " + awol + " more soldiers and meet me at CQ ");