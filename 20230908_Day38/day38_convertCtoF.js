// Convert Celcus to Fahrenheit

// From Celsius to Fahrenheit you do (tempC * (9/5) +32)

let tempC = 30;
let tempF = 86;
function convertCtoF(celsius) {
    let tempF = (celsius * (9/5) + 32);
    return tempF;
}


function convertFtoC(fahrenheit) {
let tempF = ((fahrenheit - 32) / (9/5));
return tempF;
}



console.log(convertCtoF(tempC));
console.log(convertFtoC(tempF));
