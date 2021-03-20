// Toggle the Display of Alarm Box
function set(){
	var x= document.getElementById("alarm-box");
	if(x.style.display==="none"){
		x.style.display="flex";
	}
	else{
		x.style.display="none";
	}
}


//Update Time on the Main Page
setInterval(showTime,1000);

//Function To show the Time on the page in 12 Hour Format
function showTime(){
	var date= new Date();
	var hour= date.getHours();
	var minutes= date.getMinutes();
	var second= date.getSeconds();
	var other,fulltime;
	if(hour>12){
		hour=24-hour;
		other="PM";
	}
	else{
		other="AM";
	}
	
	if(hour>=0&&hour<=9){
		hour="0"+hour;
	}

	if(minutes>=0&&minutes<=9){
		minutes="0"+minutes;
	}

	if(second>=0&&second<=9){
		second="0"+second;
	}
	fulltime=hour+":"+minutes+":"+second+" "+other;
	var x=document.getElementById("text");
	x.innerHTML=fulltime;
	return fulltime;
}


// Main Function for the Alarm
function alarm(){
	set();
	var d= new Date();
	var actualHour=d.getHours();
	var prefHour=document.getElementById("hour").value;
	var actualMinutes=d.getMinutes();
	var prefMinutes=document.getElementById("minute").value;
	var actualSeconds=d.getSeconds();
	var day=document.getElementById("day").value;
	if(day=="PM"){
		prefHour+=12;
	}
	var actualTime=(prefHour-actualHour)*60*60+(prefMinutes-actualMinutes)*60-actualSeconds;
	var i=2;
	setInterval(()=>{
		if(i==actualTime){
			PlaySound();
			clearInterval(this);
		}
		else{
			i++;
		}
	},1000);
}

//Function To play Sound on the Page
function PlaySound() {
  var sound = document.getElementById("sound1");
  sound.play();
}


//Function to Stop the Sound on the Page.
function stop(){
	window.location.reload();
}