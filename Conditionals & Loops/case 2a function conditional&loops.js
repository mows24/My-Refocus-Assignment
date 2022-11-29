// Convert Celsius to kelvin variable name convert to kelvin
// Convert fahrenheit to kelvin
// function 1 using formula K = C + 273.15 for converting celsius to kelvin
// Example Celsius is 95

function convertKelvin(tempCelsius){
    let tempKelvin = (tempCelsius + 273.15);
    return tempKelvin;
}


// function 2 using formula K = (F + 459.67) * 5/9 
// Example fahrenheit is 60

function convertToKelvin(tempFahrenheit){
    let tempKelvin = (tempFahrenheit + 459.67) * 5/9
    return tempKelvin;
}

console.log(convertKelvin(95)) // 368 K
console.log(convertToKelvin(60)) // 288.7 K