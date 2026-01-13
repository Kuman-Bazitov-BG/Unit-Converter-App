// Convert temperature
function convertTemperature(value, from, to) {
    let celsius;
    
    // Convert to Celsius first
    if (from === 'celsius') {
        celsius = value;
    } else if (from === 'fahrenheit') {
        celsius = (value - 32) * 5/9;
    } else if (from === 'kelvin') {
        celsius = value - 273.15;
    }
    
    // Convert from Celsius to target unit
    if (to === 'celsius') {
        return celsius;
    } else if (to === 'fahrenheit') {
        return (celsius * 9/5) + 32;
    } else if (to === 'kelvin') {
        return celsius + 273.15;
    }
}

// Perform conversion
function performConversion() {
    const value = parseFloat(inputValue.value);
    const type = conversionType.value;
    const from = fromUnit.value;
    const to = toUnit.value;
    
    // Validate input
    if (isNaN(value)) {
        resultValue.textContent = 'Please enter a valid number';
        resultValue.style.color = '#e74c3c';
        return;
    }
    
    let result;
    
    // Handle temperature separately
    if (type === 'temperature') {
        result = convertTemperature(value, from, to);
    } else {
        // Standard conversion using base units
        const data = conversionData[type];
        const valueInBase = value / data[from];
        result = valueInBase * data[to];
    }
    
    // Display result
    resultValue.style.color = '#27ae60';
    resultValue.textContent = `${value} ${fromUnit.options[fromUnit.selectedIndex].text} = ${result.toFixed(6)} ${toUnit.options[toUnit.selectedIndex].text}`;
}
