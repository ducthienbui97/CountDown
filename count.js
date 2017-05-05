/***
TODO: allow user to set the time need to count to.
***/
function setClock(hour,minute,second){
	var countdown = new Date();
	var current = new Date();
	countdown.setHours(hour);
	countdown.setMinutes(minute);
	countdown.setSeconds(second);
	if(current > countdown) countdown.setDate(countdown.getDate() + 1);
	var difference = (countdown - current) / 1000;
	var clock = $('.the-clock').FlipClock(difference,{
		countdown: true
	});
	$("#hour").val(hour);
	$("#minute").val(minute);
	$("#second").val(second);
}
function save(hour,minute,second){
	chrome.storage.sync.set({"hour":hour,"minute":minute,"second":second},function(r){
		console.log(r);
		setClock(hour,minute,second);
	});
}
function init() {
	chrome.storage.sync.get(["hour","minute","second"], function(r){
		console.log(r);
		setClock(parseInt(r.hour)||0,parseInt(r.minute)||0,parseInt(r.second)||0);
	});
	
}
function change(){
	var hour = $("#hour").val();
  	if(!hour || hour > 23 || hour < 0) hour = 0;
  	var minute = $("#minute").val();
  	if(!minute || minute > 59 || minute < 0) minute = 0;
  	var second = $("#second").val();
  	if(!second || second > 59 || second < 0) second = 0;
  	save(hour,minute,second);
}
$(document).ready(function() {
	init();
	$("#setTime").click(function(){
  		change();
  	});
  	$("#counting-to").keypress(function(e) {
    	if(e.which == 13) {
        	change();
    	}
	});
});