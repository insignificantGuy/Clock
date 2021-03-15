function set(){
	var x= document.getElementById("alarm-box");
	if(x.style.display==="none"){
		x.style.display="flex";
	}
	else{
		x.style.display="none";
	}
}

var fulltime;

setInterval(showTime,1000);

function showTime(){
	var date= new Date();
	var hour= date.getHours();
	var minutes= date.getMinutes();
	var second= date.getSeconds();
	var other;
	if(hour>12){
		hour=24-hour;
		other="PM";
	}
	else{
		other="AM";
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
	var hour=document.getElementById("hour").value;
	hour=
	console.log(hour);
}