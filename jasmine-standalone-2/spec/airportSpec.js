"use strict";

describe("Airport", function() {
  var airport;
  var plane_spy;
  var weather_spy;

   beforeEach(function() {
     weather_spy = jasmine.createSpyObj("weather_spy", ["isStormy"]);
     airport = new Airport(weather_spy);
     plane_spy = jasmine.createSpyObj("plane_spy", ["land", "takeoff"]);
     weather_spy.isStormy.and.returnValue(false);
   });

   describe("initialization", function() {
     it("has default capacity", function() {
       expect(airport.the_capacity()).toEqual(30);
     });
  });

   describe("#instruct_landing", function() {
     it('has no planes by default', function(){
       expect(airport.planes()).toEqual([]);
     });

     it ("instructs plane to land", function() {
       airport.land(plane_spy);
       expect(plane_spy.land).toHaveBeenCalled();
     });

     it ("has the plane after land", function() {
       airport.land(plane_spy);
       expect(airport.planes()).toContain(plane_spy);
     });
   });

   describe("#takeoff", function() {
     beforeEach(function() {
        airport.land(plane_spy);
     });

     it("has no planes after takeoff", function()  {
       airport.takeoff(plane_spy)
       expect(airport.planes()).not.toContain(plane_spy);
     });

     it("instructs the plane to takeoff", function() {
       airport.takeoff(plane_spy)
       expect(plane_spy.takeoff).toHaveBeenCalled();
     });
   });

   describe("stormy conditions", function(){
     it("raises error when plane takes off in stormy condition", function() {
       weather_spy.isStormy.and.returnValue(true);
       expect(function() {airport.land(plane_spy)}).toThrowError("Stormy weather")
     });

     it("raises error when plane takes off in stormy condition", function() {
       weather_spy.isStormy.and.returnValue(true);
       expect(function() {airport.takeoff(plane_spy)}).toThrowError("Stormy weather")
     });
   });

   describe("inconsistent states", function() {
      it("raises an error when capacity is full and plane tries to land", function() {
        Array.apply(null, Array(airport.CAPACITY)).map(function(){airport.land(plane_spy)})
        expect(function() {airport.land(plane_spy)}).toThrowError("Airport full");
      });

     it("raises an error when no plane to take off", function () {
       expect(function() {airport.takeoff(plane_spy)}).toThrowError("No plane");
     });
   });

});
