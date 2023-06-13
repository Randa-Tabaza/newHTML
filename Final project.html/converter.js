function convert() {

    const conversionChoice = document.querySelector('input[name="conversion"]:checked').value;
  

    const valueToConvert = parseFloat(document.getElementById('valueToConvert').value);
  

    let result;
    if (conversionChoice === 'fahrenheitToCelsius') {
      result = (valueToConvert - 32) * (5 / 9);
      result = result.toFixed(2) + ' °C';
    } else if (conversionChoice === 'kilometersToMiles') {
      result = valueToConvert * 0.6213712;
      result = result.toFixed(2) + ' miles';
    } else if (conversionChoice === 'metersToFeet') {
      result = valueToConvert * 3.28084;
      result = result.toFixed(2) + ' feet';
    }
  

    document.getElementById('result').textContent = `Result: ${result}`;
  }
  