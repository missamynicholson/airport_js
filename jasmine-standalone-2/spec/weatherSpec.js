describe("Weather", function() {
  var weather;

  beforeEach(function () {
    weather = new Weather();
  });

  describe("isStormy", function() {
    it("returns true when random number is 3", function() {
      spyOn(Math, "random").and.returnValue(3);
      expect(weather.isStormy()).toEqual(true);
    });
  });

  describe("is not Stormy", function() {
    it("returns false when random number is less than 3", function() {
      spyOn(Math, "random").and.returnValue(2);
      expect(weather.isStormy()).toEqual(false);
    });
  });

});
