// alert(`hello`);

const cl = console.log;

// if(hr >= 12){
	// hr = hr - 12;
// };

// if(hr < 10){
	// hr = "0" + hr;
// };

// if(min < 10){
	// min = "0" + min;
// };

// if(sec < 10){
	// sec = "0" + sec;
// };

// ternary operator >>  variable = (condition) ? expressionTrue : expressionFalse;

// hr = (hr < 10) ? ("0" + hr) : (hr);
// hr = (hr < 12) ? (hr) : (hr - 12);
// min = (min < 10) ? ("0" + min) : (min);
// sec = (sec < 10) ? ("0" + sec) : (sec);
// session = (hr < 12) ? ("am") : ("pm");

function dClock(){
	
	let digiClock = document.getElementById("digiClock");
	
	let date = new Date();//Object of current date

	let hr = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	let session = `am`;

	session = (session < 12) ? (`am`) : (`pm`);
	
	hr = (hr < 12) ? (hr) : (hr - 12);
	
	hr = setZero(hr);
	min = setZero(min);
	sec = setZero(sec);

	let result = `${hr} : ${min} : ${sec} ${session}`;
	digiClock.innerHTML = result;
	
	setTimeout(dClock, 1000);//setTimeout(function, milliseconds);
};

dClock();

function setZero(num){
	return (num < 10) ? ("0" + num) : (num);
};


function digitalClock(){
	
	let digital_Clock = document.getElementById("digital_clock");

	let date = new Date();

	let hr = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	let ms = date.getMilliseconds();
	let session = "am";

	hr = setZero(hr);
	min = setZero(min);
	sec = setZero(sec);

	if(ms < 10){
		ms = "000" + ms;
	}else if(ms >= 10 && ms < 100){
		ms = "00" + ms;
	}else if(ms >= 100 && ms < 1000){
		ms = "0" + ms;
	}else{
		ms = ms;
	};

	session = (session < 12) ? (`am`) : (`pm`);

	let result = `${hr} : ${min} : ${sec} : ${ms} ${session}`;

	digital_Clock.innerHTML = result;
	
	setTimeout(digitalClock, 100);//if we set 1ms then the watch rotate very fastly and we unable to see the watch time very accurately, because of that reasons we set time to 100ms.
};

digitalClock();



function d_clock(){
	
	let digi_Clock = document.getElementById("digi_Clock");
	
	let date = new Date();

	let hr = date.getHours();
	let min = date.getMinutes();
	let session = `am`;

	session = (hr < 12) ? (`am`) : (`pm`);
	hr = (hr < 12) ? (hr) : (hr - 12);

	hr = setZero(hr);
	min = setZero(min);

	let result = `${hr} : ${min} ${session}`;
	
	digi_Clock.innerHTML = result;
	
	setTimeout(d_clock,60000);
};

d_clock();




