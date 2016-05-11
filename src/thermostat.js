function Thermostat(){
  this.DEFAULT_TEMP = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP = 25;
  this._isPSMOn = true;
  this._temperature = this.DEFAULT_TEMP;

  this.temperature = function() {
    return this._temperature;
  };

  this.increaseTemp = function() {
    if(this._temperature < this.MAX_TEMP) {
      this._temperature ++;
    }
  };

  this.decreaseTemp = function() {
    if(this._temperature > this.MIN_TEMP) {
      this._temperature --;
    }
  };

  this.isPSMOn = function() {
    return this._isPSMOn;
  };

  this.togglePSM = function() {
    this._isPSMOn = !this._isPSMOn;
    this._setMaxTemp();
  };

  this.reset = function() {
    this._temperature = this.DEFAULT_TEMP;
  };

  this.display = function() {
    if(this._temperature < 18) {
      return 'green';
    } else if(this._temperature > 24) {
      return 'red';
    }
    return 'yellow';
  };

  this._setMaxTemp = function() {
    if(this._isPSMOn) {
      this.MAX_TEMP = 25;
    } else {
      this.MAX_TEMP = 32;
    }
  };
}
