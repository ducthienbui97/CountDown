/***
TODO: allow user to set the time need to count to.
***/
function init() {
	var countdown = new Date();
	var current = new Date();
	var hour = 0;
	var minute = 0;
	var second = 0;
	countdown.setHours(hour);
	countdown.setMinutes(minute);
	countdown.setSeconds(second);
	if(current > countdown) countdown.setDate(countdown.getDate() + 1);
	var difference = (countdown - current) / 1000;
	var clock = $('.the-clock').FlipClock(difference,{
		countdown: true
	});
}

$(document).ready(function() {
  init();
});