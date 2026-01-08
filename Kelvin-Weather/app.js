/*
Kelvin Weather
Deep in his mountainside meteorology lab, the mad scientist Kelvin has mastered weather prediction.
Recently, Kelvin began publishing his weather forecasts on his website.
However, there’s a problem: All of his forecasts describe the temperature in Kelvin.
With our knowledge of JavaScript, let’s convert Kelvin to Celsius, and then to Fahrenheit.
*/


// forecast is 293 Kelvin
const kelvin = 293;

//convert Kelvin to Celsius
 const celsius = kelvin - 273;

 // Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Newton >>> extra practice
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);