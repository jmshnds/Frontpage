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
	var hours = new Date().getHours();
	var body = document.getElementsByTagName("body")[0];
	switch(hours) 
	{
		case 4: case 5:
			body.style.backgroundImage = "url('images/lake1.png')";
			break;
		case 6: case 7:
			body.style.backgroundImage = "url('images/lake2.png')";
			break;
		case 8: case 9:
			body.style.backgroundImage = "url('images/lake3.png')";
			break;
		case 10: case 11:
			body.style.backgroundImage = "url('images/lake4.png')";
			break;
		case 12: case 13:
			body.style.backgroundImage = "url('images/lake5.png')";
			break;
		case 14: case 15:
			body.style.backgroundImage = "url('images/lake6.png')";
			break;
		case 16: case 17:
			body.style.backgroundImage = "url('images/lake7.png')";
			break;
		case 18: case 19:
			body.style.backgroundImage = "url('images/lake8.png')";
			break;
		case 20: case 21:
			body.style.backgroundImage = "url('images/lake9.png')";
			break;
		case 22: case 23:
			body.style.backgroundImage = "url('images/lake10.png')";
			break;
		case 0: case 1:
			body.style.backgroundImage = "url('images/lake11.png')";
			break;
		case 2: case 3:
			body.style.backgroundImage = "url('images/lake12.png')";
			break;
		default:
			body.style.backgroundImage = "url('images/lake1.png')";
	}
}

setBackground(); // Initial call to setBackground
setInterval(setBackground, 1800000); // check every 30 minutes	
		
