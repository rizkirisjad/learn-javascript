/** @format */

// Lecture: Values and Variables
let country = 'Indonesia';
let continent = 'Asia';
let population = 281358622;
console.log(country);
console.log(continent);
console.log(population);

// LECTURE: Data Types
const isIsland = true;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//LECTURE: let, const and var
language = 'Bahasa Indonesia';

//LECTURE: Basic Operators
let halfCountry = population / 2;
population++;
console.log(halfCountry, population);

let finlandPopulation = 6000000;
console.log(population > finlandPopulation);
let avgPopulation = 33000000;
console.log(population < avgPopulation);
const description =
  country +
  ' is in ' +
  continent +
  ', and its' +
  ' 281,35 million people speak ' +
  language;
console.log(description);

// LECTURE: Strings and Template Literals
const newDescription = `${country} is in ${continent}, and its 281,35 million people speak ${language}`;
console.log(newDescription);

// LECTURE: Taking Decisions: if / else Statements
if (population > 33000000) {
  console.log(`population of ${country} is above average`);
} else {
  `population of ${country} is 22 million below average`;
}

// LECTURE: Type Conversion and Coercion
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);
