/** Unit Converter **/

function convertFahrenheitToCelsius(fahrenheit) {
  var calcCelsius = (fahrenheit - 32)/1.8
  return calcCelsius.toFixed(1);
}

function convertCelsiusToFrahrenheit(celsius) {
  // return 100;
  var calcFahrenheit = celsius * 1.8 + 32;
  return calcFahrenheit.toFixed();
}

// function convertPoundsToKilos(pounds) {
//   return 45.36;
// }

