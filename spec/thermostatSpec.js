describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("has an default temperature", function() {
    expect(thermostat.temperature()).toEqual(thermostat.DEFAULT_TEMP);
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

  it('starts in power saving mode', function() {
    expect(thermostat.isPSMOn()).toEqual(true);
  });

});
