function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9 / 5) + 32;
  }
  
  const temperatureCelsius: number = 25; 
  
  const convertedTemperatureFahrenheit: number = celsiusToFahrenheit(temperatureCelsius);
  console.log(`${temperatureCelsius} °C equivale a ${convertedTemperatureFahrenheit} °F`);
  