function Thermostat(){
  this.DEFAULT_TEMP = 20;
  this.MIN_TEMP = 10;
  this._temperature = this.DEFAULT_TEMP;

  this.temperature = function() {
    return this._temperature;
  };

  this.increaseTemp = function() {
    this._temperature ++;
  };

  this.decreaseTemp = function() {
    if(this._temperature > this.MIN_TEMP) {
      this._temperature --;
    }
  };

  this.isPSMOn = function() {
    return true;
  };
}
