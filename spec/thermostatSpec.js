describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("has an default temperature", function() {
    expect(thermostat.temperature()).toEqual(thermostat.DEFAULT_TEMP);
  });

});
