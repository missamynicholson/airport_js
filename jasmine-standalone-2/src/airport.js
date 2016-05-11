function Airport(weather){
  this._planes_at_airport = [];
  this.CAPACITY = 30;
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
};

Airport.prototype.the_capacity = function() {
  return this.CAPACITY;
};

Airport.prototype.land = function(plane) {
  if (this._weather.isStormy()) {
    throw new Error ("Stormy weather")
  } else if (this.full()) {
    throw new Error ("Airport full")
  } else {
    plane.land();
    return this._planes_at_airport.push(plane);
  }
};

Airport.prototype.planes = function(){
  return this._planes_at_airport;
};

Airport.prototype.takeoff = function(plane) {
  if (this._weather.isStormy()) {
    throw new Error ("Stormy weather")
  } else if (this.empty()) {
    throw new Error ("No plane")
  } else {
    plane.takeoff()
   return this._planes_at_airport.pop(plane);
  }
};

Airport.prototype.full = function() {
  return this.planes().length >= this.CAPACITY
}

Airport.prototype.empty = function() {
  return this.planes().length < 1
}
