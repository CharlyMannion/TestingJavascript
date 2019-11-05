describe("Cooking Ingredients Converter", function() {

  describe("Temperatures", function() {
    it("Fahrenheit to Celsius", function() {
      var result = convertFahrenheitToCelsius(100);
      expect(result).toEqual('37.8');
    });

    it("Celsius to Fahrenheit", function() {
      var result = convertCelsiusToFrahrenheit(37.8);
      expect(result).toEqual('100');
    })
  });

  describe("Weights", function() {
    it("Pounds to Kilos", function(){
      var result = convertPoundsToKilos(100);
      expect(result).toEqual(45.36);
    })
  });

  describe("Volume", function() {
    it("Litre to Gallons", function() {
      var result = convertLitreToGallons(10);
      expect(result).toEqual('22');
    })
  })
});
