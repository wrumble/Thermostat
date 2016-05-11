function Thermostat(){
  this._isPSMOn = true;
  this._temperature = Thermostat.prototype.DEFAULT_TEMP;
}
  Thermostat.prototype.DEFAULT_TEMP = 20;
  Thermostat.prototype.MIN_TEMP = 10;
  Thermostat.prototype.MAX_TEMP = 25;

  Thermostat.prototype.temperature = function() {
    return this._temperature;
  };

  Thermostat.prototype.increaseTemp = function() {
    if(this._temperature < this.MAX_TEMP) {
      this._temperature ++;
    }
  };

  Thermostat.prototype.decreaseTemp = function() {
    if(this._temperature > this.MIN_TEMP) {
      this._temperature --;
    }
  };

  Thermostat.prototype.isPSMOn = function() {
    return this._isPSMOn;
  };

  Thermostat.prototype.togglePSM = function() {
    this._isPSMOn = !this._isPSMOn;
    this._setMaxTemp();
  };

  Thermostat.prototype.reset = function() {
    this._temperature = this.DEFAULT_TEMP;
  };

  Thermostat.prototype.display = function() {
    if(this._temperature < 18) {
      return 'green';
    } else if(this._temperature > 24) {
      return 'red';
    }
    return 'yellow';
  };

  Thermostat.prototype._setMaxTemp = function() {
    if(this._isPSMOn) {
      this.MAX_TEMP = 25;
    } else {
      this.MAX_TEMP = 32;
    }
  };