function Weather() {

};

Weather.prototype.isStormy = function() {
  return (this._find_random() > 2)
}


Weather.prototype._find_random = function() {
  return Math.random(3)
}
