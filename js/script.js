function setTime() 
{
	var dateTime = new Date();
	var theTime = ""; // variable to update the displayed time
			
	hours = dateTime.getHours();
	var ampm = "AM";
	if (hours > 12) {
		hours -= 12;
		ampm = "PM";
	} else if (hours == 12) {
		ampm = "PM"
	}
	
	// To account for 0:00 AM
	if (hours == 0) {
		theTime += "12:";
	} else {
		theTime += hours + ":";
	}
			
	var mins = dateTime.getMinutes().toString();
	if(mins < 10) {
		theTime += "0" + mins;
	} else {
		theTime += mins;
	}
	theTime += " " + ampm;
				
	daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	var theDate = daysOfTheWeek[dateTime.getDay()] + ', '
			
	monthsOfTheYear = [
		"January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	]
	theDate += monthsOfTheYear[dateTime.getMonth()]

	// day of the month
	theDate += " " + dateTime.getDate();
	switch(dateTime.getDate()) 
	{
		case 1: case 21: case 31:
			theDate += "st";
			break;
		case 2: case 22:
			theDate += "nd";
			break;
		case 3: case 23:
			theDate += "rd";
			break;
		default:
			theDate += "th";
	}
			
    document.getElementById("currentTime").innerHTML = theTime;
	document.getElementById("currentDate").innerHTML = theDate;
}
setTime(); // initial call to setTime
setInterval(setTime, 5000); // setTime every 5 seconds
  
// Change background image based on the time of day
function setBackground() 
{
	var body = document.getElementsByTagName("body")[0];
	var hours = new Date().getHours();

	// Explicit mapping to find the image based on the current hour
	var image_mapping = {
		4: 1, 5: 1,
		6: 2, 7: 2,
		8: 3, 9: 3,
		10: 4, 11: 4,
		12: 5, 13: 5,
		14: 6, 15: 6,
		16: 7, 17: 7,
		18: 8, 19: 8,
		20: 9, 21: 9,
		22: 10, 23: 10,
		0: 11, 1: 11,
		2: 12, 3: 12
	}
	body.style.backgroundImage = "url('images/lake" + image_mapping[hours.toString()] + ".png')"
}

setBackground(); // Initial call to setBackground
setInterval(setBackground, 1800000); // check every 30 minutes	
		
