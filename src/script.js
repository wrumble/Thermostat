var thermostat = new Thermostat();

$(document).ready(function(){

  temperature();
  PSMStatus();
  displayColor();

  $('#temp-up').click(function(){
    thermostat.increaseTemp();
    temperature();
    displayColor();
  });

  $('#temp-down').click(function(){
    thermostat.decreaseTemp();
    temperature();
    displayColor();
  });

  $('#temp-reset').click(function(){
    thermostat.reset();
    temperature();
  });

  $('#psm-toggle').click(function(){
    thermostat.togglePSM();
    PSMStatus();
  });

$('#current-city').change(function() {
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',uk&appid=d026d4e8f9ffccb0def19c789052122c&units=metric', function(data) {
    $('#temperature').text(data.main.temp);
  });
});

});


var temperature = function(){
  $('h2').text(thermostat.temperature());
};

var PSMStatus = function(){
  $('p').text(function(){
    if(thermostat.isPSMOn()){
      return "PSM mode is ON";
    }
    return "PSM mode is OFF";
  });
};

var displayColor = function(){
  $('body').css("background-color", thermostat.display());
};
