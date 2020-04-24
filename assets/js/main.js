
var x = setInterval(function() {
  // Get todays date and time
  var distance = new Date();

  var days = 1;
  var hours = 24 - distance.getHours();
  var minutes = 60 - distance.getMinutes();
  var seconds = 60 - distance.getSeconds();

  if((minutes + '').length == 1){
    minutes = '0' + minutes;
  }
  if((seconds + '').length == 1){
        seconds = '0' + seconds;
  }
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;

}, 1000);