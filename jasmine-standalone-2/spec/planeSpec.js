"user strict";
describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
    airport_spy = jasmine.createSpyObj("airport_spy", ["land", "takeoff"]);
  });

  describe("initialization", function() {
    it('plane not flying by default', function(){
      expect(plane.is_flying()).toEqual(false);
    });
  });

  describe("plane takeoff", function() {
    it("can take off", function() {
      plane.takeoff()
      expect(plane.is_flying()).toEqual(true);
    });

    it("raises an error when plane already flying", function() {
      plane.takeoff()
      expect(function(){ plane.takeoff();}).toThrowError("Can't take off a plane that's flying")
    });
  });

  describe("plane land", function() {
    it("can land", function() {
      plane.takeoff()
      plane.land()
      expect(plane.is_flying()).toEqual(false);
    });

    it("raises an error when plane not flying", function() {
      plane.takeoff()
      plane.land()
      expect(function() {plane.land();}).toThrowError("Can't land a plane that's not flying")
    });

  });

});
