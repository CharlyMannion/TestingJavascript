/** Unit Converter **/


$(document).ready(function() {
  // all custom jQuery will go here

  $(document).ready(function() {
    $("#trigger").click(function() {
      $("#demo").html("Hello, World!");
    });
  });

});


function convertFahrenheitToCelsius(fahrenheit) {
  var calcCelsius = (fahrenheit - 32)/1.8
  return calcCelsius.toFixed(1);
}

function convertCelsiusToFrahrenheit(celsius) {
  var calcFahrenheit = celsius * 1.8 + 32;
  return calcFahrenheit.toFixed();
}

function convertPoundsToKilos(pound) {
  kilo = pound * 0.4536;
  return kilo;
}

function convertLitreToGallons(litres) {
  gallons = litres * 0.22;
  return gallons;
}

function convertMilesToKM(miles) {
  kiloms = miles * 1.609;
  return kiloms;
}