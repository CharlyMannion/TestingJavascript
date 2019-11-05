describe("Cooking Ingredients Converter", function() {

  describe("Temperatures", function() {
    it("Fahrenheit to Celsius", function() {
      var result = convertFahrenheitToCelsius(100);

      expect(result).toEqual('37.8');
    });

    it("Celsius to Fahrenheit", function() {
      var result = convertCelsiusToFrahrenheit(37.8);
      expect(result).toEqual(100);
    })
  });
});
