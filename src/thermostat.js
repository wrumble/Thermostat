function Thermostat(){
  this.DEFAULT_TEMP = 20;
  this._temperature = this.DEFAULT_TEMP;

  this.temperature = function() {
    return this._temperature;
  };
}
