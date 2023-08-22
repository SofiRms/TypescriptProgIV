function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
var temperatureCelsius = 25; // Cambia la temperatura en grados Celsius aquí
var convertedTemperatureFahrenheit = celsiusToFahrenheit(temperatureCelsius);
console.log("".concat(temperatureCelsius, " \u00B0C equivale a ").concat(convertedTemperatureFahrenheit, " \u00B0F"));
