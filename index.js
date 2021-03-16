function set(){
	var x= document.getElementById("alarm-box");
	if(x.style.display==="none"){
		x.style.display="flex";
	}
	else{
		x.style.display="none";
	}
}

setInterval(showTime,1000);

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
	fulltime=hour+":"+minutes+":"+second+" "+other;
	var x=document.getElementById("text");
	x.innerHTML=fulltime;
	return fulltime;
}

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
	var actualTime=(prefHour-actualHour)*60*60+(prefMinutes-actualMinutes)*60+(60-actualSeconds);
	var i=0;
	console.log(actualTime);
	while(i<actualTime){
		if(i==actualTime){
			PlaySound();
		}
		setInterval(increment(i),1000);
	}
}

function increment(i){
	showTime();
	i++;
}


function PlaySound() {
  var sound = document.getElementById("sound1");
  sound.play();
}

function stop(){
	var sound=document.getElementById("sound1");
	sound.pause();
}