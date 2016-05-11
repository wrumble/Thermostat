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
    };
  });

    it('can decrease the temperature', function() {
    for(i = 1; i < 5; i++) {
      thermostat.decreaseTemp();
      expect(thermostat.temperature()).toEqual(thermostat.DEFAULT_TEMP - i);
    };
  });

});
