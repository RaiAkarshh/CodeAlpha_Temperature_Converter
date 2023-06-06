function convert(conversionType) {
    var temperatureInput = document.getElementById('temperature').value;
    var resultElement = document.getElementById('result');
  
    var temperature;
    var result;
    var fromUnit;
    var toUnit;
  
    switch (conversionType) {
      case 'k2c':
        temperature = parseFloat(temperatureInput);
        result = temperature - 273.15;
        fromUnit = 'K';
        toUnit = '°C';
        break;
      case 'c2k':
        temperature = parseFloat(temperatureInput);
        result = temperature + 273.15;
        fromUnit = '°C';
        toUnit = 'K';
        break;
      case 'c2f':
        temperature = parseFloat(temperatureInput);
        result = (temperature * 9/5) + 32;
        fromUnit = '°C';
        toUnit = '°F';
        break;
      case 'f2c':
        temperature = parseFloat(temperatureInput);
        result = (temperature - 32) * 5/9;
        fromUnit = '°F';
        toUnit = '°C';
        break;
      default:
        result = 'Invalid conversion type';
    }
  
    if (isNaN(result)) {
      resultElement.innerHTML = 'Invalid input';
    } else {
      resultElement.innerHTML = temperatureInput + ' ' + fromUnit + ' = ' + result.toFixed(2) + ' ' + toUnit;
    }
  }
  
  