/*
Dog Years
Dogs mature at a faster rate than human beings.
We often say a dog’s age can be calculated in dog years
to account for their growth compared to a human of the same age.
In some ways, we could say that time moves quickly for dogs — 8 years in a human’s life
equates to 45 years in a dog’s life.

How old would you be if you were a dog?


The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years
*/

let myAge = 21;
let earlyYears = 2; // early dog years base

earlyYears *= 10.5; // 2 years * 10.5 = 21 dog years

let laterYears = myAge - 2; // remaining human years after first two

laterYears *= 4; // each of the remaining years accounts for 4 dog years

console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears; // total dog years
console.log(myAgeInDogYears);

let myName = 'Nat';
console.log(myName.toLowerCase());

console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);