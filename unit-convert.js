// Unit conversion data
const conversionData = {
    length: {
        meter: 1,
        kilometer: 0.001,
        centimeter: 100,
        millimeter: 1000,
        mile: 0.000621371,
        yard: 1.09361,
        foot: 3.28084,
        inch: 39.3701
    },
    weight: {
        kilogram: 1,
        gram: 1000,
        milligram: 1000000,
        ton: 0.001,
        pound: 2.20462,
        ounce: 35.274
    },
    temperature: {
        celsius: 'base',
        fahrenheit: 'special',
        kelvin: 'special'
    },
    volume: {
        liter: 1,
        milliliter: 1000,
        cubic_meter: 0.001,
        gallon: 0.264172,
        quart: 1.05669,
        pint: 2.11338,
        cup: 4.22675,
        fluid_ounce: 33.814
    },
    currency: {
        USD: 1,
        EUR: 0.92,
        GBP: 0.79
    }
};

// Unit options for each conversion type
const unitOptions = {
    length: [
        { value: 'meter', label: 'Meter (m)' },
        { value: 'kilometer', label: 'Kilometer (km)' },
        { value: 'centimeter', label: 'Centimeter (cm)' },
        { value: 'millimeter', label: 'Millimeter (mm)' },
        { value: 'mile', label: 'Mile (mi)' },
        { value: 'yard', label: 'Yard (yd)' },
        { value: 'foot', label: 'Foot (ft)' },
        { value: 'inch', label: 'Inch (in)' }
    ],
    weight: [
        { value: 'kilogram', label: 'Kilogram (kg)' },
        { value: 'gram', label: 'Gram (g)' },
        { value: 'milligram', label: 'Milligram (mg)' },
        { value: 'ton', label: 'Metric Ton (t)' },
        { value: 'pound', label: 'Pound (lb)' },
        { value: 'ounce', label: 'Ounce (oz)' }
    ],
    temperature: [
        { value: 'celsius', label: 'Celsius (°C)' },
        { value: 'fahrenheit', label: 'Fahrenheit (°F)' },
        { value: 'kelvin', label: 'Kelvin (K)' }
    ],
    volume: [
        { value: 'liter', label: 'Liter (L)' },
        { value: 'milliliter', label: 'Milliliter (mL)' },
        { value: 'cubic_meter', label: 'Cubic Meter (m³)' },
        { value: 'gallon', label: 'Gallon (gal)' },
        { value: 'quart', label: 'Quart (qt)' },
        { value: 'pint', label: 'Pint (pt)' },
        { value: 'cup', label: 'Cup' },
        { value: 'fluid_ounce', label: 'Fluid Ounce (fl oz)' }
    ],
    currency: [
        { value: 'USD', label: 'US Dollar (USD)' },
        { value: 'EUR', label: 'Euro (EUR)' },
        { value: 'GBP', label: 'British Pound (GBP)' }
    ]
};

// DOM Elements
const conversionType = document.getElementById('conversion-type');
const inputValue = document.getElementById('input-value');
const fromUnit = document.getElementById('from-unit');
const toUnit = document.getElementById('to-unit');
const convertBtn = document.getElementById('convert-btn');
const resultValue = document.getElementById('result-value');

// Update unit dropdowns based on conversion type
function updateUnitOptions() {
    const type = conversionType.value;
    const options = unitOptions[type];
    
    // Clear existing options
    fromUnit.innerHTML = '';
    toUnit.innerHTML = '';
    
    // Add new options
    options.forEach(option => {
        const fromOption = new Option(option.label, option.value);
        const toOption = new Option(option.label, option.value);
        fromUnit.add(fromOption);
        toUnit.add(toOption);
    });
    
    // Set default "to" unit to second option
    if (toUnit.options.length > 1) {
        toUnit.selectedIndex = 1;
    }
}

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

// Event Listeners
conversionType.addEventListener('change', updateUnitOptions);
convertBtn.addEventListener('click', performConversion);
inputValue.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performConversion();
    }
});

// Initialize
updateUnitOptions();
