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
