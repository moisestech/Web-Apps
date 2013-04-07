//var dtElement = document.getElementById("date");

/*time = setInterval(currentTime, 1000);

function currentTime() {
	Date();
}*/

function updateClock() {
	
	// current Date
	var now = new Date();
	var months = ["January", "February", "March", "April",
	 			  "May", "June", "July", "August", "September", 
	 			  "October", "November", "December"];

	var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

	date = [now.getDate(),
			months[now.getMonth()],
			now.getFullYear()].join(" ");

	//set the content of the element with the ID time to the 
	// formatted string
	document.getElementById("time").innerHTML = [date, time].join(" / ");

	//call this funciton again in 1000ms
	setTimeout(updateClock, 1000);
}

//initial call
updateClock();