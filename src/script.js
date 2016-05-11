var thermostat = new Thermostat;

$(document).ready(function() {
  $('#temp-up').click(function(){
    thermostat.increaseTemp();
  });
});

$(document).ready(function() {
  $('#temp-down').click(function(){
    thermostat.decreaseTemp();
  });
});