// Some
// Some ruturn boolean

const numbers = [1, 3, 4, 6, 8];

// Check even numbers

const hasEvenNumber = numbers.some((n) => n % 2 == 0);
console.log(hasEvenNumber);

// Check user role with some
const userRole = ["user", "editor"];
const featureRole = ["admin", "manager"];

const canAccess = userRole.some((role) => featureRole.includes(role));

console.log(canAccess);

// Array.from()

const arr = Array.from({ length: 5 });

console.log(arr); // fill the array with undefined

// To Fill with defined null, 0, "" or whatever you want
arr.fill(null);

console.log(arr);

// directly fill with index
const indexArr = Array.from({ length: 6 }, (_, i) => i);
console.log(indexArr);

let basicNumber = [2, 4, 6, 8];

// Calculate squre of the numbers
const squreNumber = Array.from(basicNumber, (value) => value * value);
console.log(squreNumber);

// Create Pagination

const pagination = (start, end, step) => {
  return Array.from(
    { length: Math.ceil((end - start) / step) },
    (_, i) => start + i * step
  );
};

console.log(pagination(1, 11, 2));

console.log(basicNumber);
// Map always return an array
// map take a a callback function with parameter of value, index, original array
const mapSqure = basicNumber.map((value) => value * value);
console.log(mapSqure);

let forEachNum = [];
// Foreach does not return anything
// Foreach take a callback function with parameter of value, index, original array
basicNumber.forEach(function (value, index, arr) {
  forEachNum.push(value * value);
});



