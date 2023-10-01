function setTime() 
{
	var dateTime = new Date();
	var theTime = ""; // variable to update the displayed time
			
	hours = dateTime.getHours();
	var ampm = "AM";
	if(hours > 12) 
	{
		hours -= 12;
		ampm = "PM";
	}
	if (hours == 0) 
	{
		// To account for 0:00 AM
		theTime += "12:";
	}
	else 
	{
		theTime += hours + ":";
	}
			
	var mins = dateTime.getMinutes();
	if(mins < 10) 
	{
		theTime += "0" + mins;
	}
	else 
	{
		theTime += mins;
	}

	theTime += " " + ampm;
				
	var theDate = "";
	// day of the week
	switch(dateTime.getDay()) 
	{
		case 0: theDate += "Sunday";
			break;
		case 1: theDate += "Monday";
			break;
		case 2: theDate += "Tueday";
			break;
		case 3: theDate += "Wednesday";
			break;
		case 4: theDate += "Thursday";
			break;
		case 5: theDate += "Friday";
			break;
		case 6: theDate += "Saturday";
			break;
		default: theDate += "Invalid Day";
	}
	theDate += ", ";
			
	// month
	switch(dateTime.getMonth()) 
	{
		case 0: theDate += "January";
			break;
		case 1: theDate += "February";
			break;
		case 2: theDate += "March";
			break;
		case 3: theDate += "April";
			break;
		case 4: theDate += "May";
			break;
		case 5: theDate += "June";
			break;
		case 6: theDate += "July";
			break;
		case 7: theDate += "August";
			break;
		case 8: theDate += "September";
			break;
		case 9: theDate += "October";
			break;
		case 10: theDate += "November";
			break;
		case 11: theDate += "December";
			break;
		default: theDate += "Invalid Month";
	}
			
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
		
