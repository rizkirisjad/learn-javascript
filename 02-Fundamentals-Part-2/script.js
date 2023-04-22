/** @format */

// JavaScript Fundamentals – Part 2

// Note: Please start Part 2 from scratch and comment out all the code from Part 1.

// LECTURE: Functions

// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descIndonesia = describeCountry('Indonesia', 275, 'Jakarta');
const descPortugal = describeCountry('Portugal', 10, 'Lisbon');
const descGermany = describeCountry('Germany', 83, 'Berlin');

console.log(descIndonesia, descPortugal, descGermany);

// LECTURE: Function Declarations vs. Expressions

// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)

const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

const perIndonesia1 = percentageOfWorld1(275);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);
console.log(perIndonesia1, percChina1, percUSA1);

const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
};

const perIndonesia2 = percentageOfWorld2(275);
const percChina2 = percentageOfWorld2(1441);
const percUSA2 = percentageOfWorld2(332);
console.log(perIndonesia2, percChina2, percUSA2);
