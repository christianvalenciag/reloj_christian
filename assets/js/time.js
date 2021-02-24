window.onload = function() {
    setInterval(getTime, 1000);
	paint();
};

function getTime(){
	const secondHand = document.querySelector('.secHand');
	const minuteHand = document.querySelector('.minHand');
	const hourHand = document.querySelector('.hourHand');
	const gradient = document.querySelector('.clock_color');
	const gradient2 = document.querySelector('.clock_color2');

	const now = new Date();
   
	/** SECONDS */
  	const seconds = now.getSeconds();

  	const secondsDegrees = ((seconds / 60) * 360) + 90;
  
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	if (secondsDegrees === 90) {
		secondHand.style.transition = 'none';
	} else if (secondsDegrees >= 91) {
		secondHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)'
	}

   	/** MINUTES */
  	const minutes = now.getMinutes();

	const minutesDegrees = ((minutes / 60) * 360) + 90;
  	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    

	/** HOURS */
  	let hours = now.getHours();

  	const hoursDegrees = ((hours / 12) * 360) + (minutes / 60 * 30) + 90;
  	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	gradient.style.transform = `rotate(${hoursDegrees + 180}deg)`;
	gradient2.style.transform = `rotate(${hoursDegrees + 180}deg)`;

	let hours02    = now.getHours();
	let minutes02  = now.getMinutes();
	  
	let dateString = ( hours02 < 10 ? '0' : '' ) + hours02 + ' : ' + ( minutes02 < 10 ? '0' : '' ) + minutes02;
  
	let clock = document.querySelector('.clock_container .clock_num');
	clock.innerHTML = dateString; 

	
	let colorG = paint(hours);
	let gradElem = document.querySelector("#gradient");
	gradElem.className = "";
	gradElem.classList.add('clock_color', colorG);
	
};

function paint(hours){

	let colorGradient = "null";

    if (hours >= 5 && hours < 7){
		colorGradient = 'gradient_sunrise';
	} else if (hours >= 7 && hours < 18){
		colorGradient = 'gradient_day';
	} else if (hours >= 18 && hours < 19){
		colorGradient = 'gradient_sunset';
	} else if (hours >= 19 || hours < 5){
		colorGradient = 'gradient_night';
	};

	return colorGradient;	
};
