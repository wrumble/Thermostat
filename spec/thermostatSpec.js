describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has an default temperature', function() {
    expect(thermostat.temperature()).toEqual(thermostat.DEFAULT_TEMP);
  });

  it('starts in power saving mode', function() {
    expect(thermostat.isPSMOn()).toEqual(true);
  });

  it('can increase the temperature', function() {
    for(i = 1; i < 5; i++) {
      thermostat.increaseTemp();
      expect(thermostat.temperature()).toEqual(thermostat.DEFAULT_TEMP + i);
    }
  });

  it('can decrease the temperature', function() {
    for(i = 1; i < 5; i++) {
      thermostat.decreaseTemp();
      expect(thermostat.temperature()).toEqual(thermostat.DEFAULT_TEMP - i);
    }
  });

  it('has a minimum temperature', function() {
    thermostat._temperature = thermostat.MIN_TEMP;
    thermostat.decreaseTemp();
    expect(thermostat.temperature()).toEqual(thermostat.MIN_TEMP);
  });


  it('has a max temperature', function() {
    thermostat._temperature = thermostat.MAX_TEMP;
    thermostat.increaseTemp();
    expect(thermostat.temperature()).toEqual(thermostat.MAX_TEMP);
  });

  it('has a max temperature of 25 when PSM is on', function() {
    expect(thermostat.MAX_TEMP).toEqual(25);
  });

  it('has a max temperature of 32 when PSM is off', function() {
    thermostat.togglePSM();
    expect(thermostat.MAX_TEMP).toEqual(32);
  });

  it('can reset the temperature to 20', function() {
    thermostat.reset();
    expect(thermostat.temperature()).toEqual(thermostat.DEFAULT_TEMP);
  });

  it('changes display colour to green if temperature is less than 18', function() {
    thermostat._temperature = 17;
    expect(thermostat.display()).toEqual('green');
  });

  it('changes display colour to yellow if temperature is between 18 and 25', function() {
    expect(thermostat.display()).toEqual('yellow');
  });

  it('changes display colour to red if temperature is 25 and above', function() {
    thermostat._temperature = thermostat.MAX_TEMP;
    expect(thermostat.display()).toEqual('red');
  });

});
