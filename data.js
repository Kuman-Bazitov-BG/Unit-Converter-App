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
