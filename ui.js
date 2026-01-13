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
