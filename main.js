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
