function Plane() {
  this._flying = false;
};

Plane.prototype.is_flying = function() {
  return this._flying;
};

Plane.prototype.takeoff = function() {
  if (!this.is_flying()) {
     this._flying = true;
  } else {
     throw new Error("Can't take off a plane that's flying");
  }
};

Plane.prototype.land = function() {
  if (this.is_flying()) {
    this._flying = false;
  } else {
    throw new Error("Can't land a plane that's not flying");
  }
};
