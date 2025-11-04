// Logic Building and critical Thinking

// 5 Steps recipe

// Step 1. Understand and clarify the problem => Know the constraints, time, space, or any other
// Step 2. Break down into sub-steps (Algorithm)
// Step 3. Pseudocode / Flowchart (Optional, simple).
// Pseudocode => NO syntax, code in your paper/IDE in your thoughts in plain english or bangla
// Step 4. Implement in code (Small Function)
// Step 5. Test & Trace (Debug Manually)

//Problem statement: Make tea depending on user expectections

// Input => Water,tea powder, milk, sugar

// Output => depending on user expectections
// 1. Black tea with sugar,
// 2. Milk tea with sugar
// 3. Black tea without sugar
// 4. Milk tea without sugar

// Process =>
// TODO 1. boil the water
// TODO 2. Add tea powder in to boil water
// TODO 3. Add milk with condition
// TODO 4. Add sugar with condition
// TODO 5. Filter the tea powder
// TODO 6. Serve/ return the tea

const makingTeaReacipe = (needMilk = false, needSugar = false) => {
  const steps = [];

  steps.push("boil the water");
  steps.push("add tea powder to the boiling water");

  if (needMilk) {
    steps.push("add milk and let it simmer");
  }

  if (needSugar) {
    steps.push("add sugar and stir until dissolved");
  }

  steps.push("filter the tea powder");

  const beverageType = needMilk ? "Milk tea" : "Black tea";
  const sugarPreference = needSugar ? "with sugar" : "without sugar";

  steps.push("serve/ return the tea");

  return {
    beverage: `${beverageType} ${sugarPreference}`.trim(),
    steps,
  };
};

console.log(makingTeaReacipe());

/*
{
  beverage: 'Black tea without sugar',
  steps: [
    'boil the water',
    'add tea powder to the boiling water',
    'filter the tea powder',
    'serve/ return the tea'
  ]
}
*/

// Input : madam output: madam
// I can not reverse a string
// i can reverse an array
// i can convert a sting to array
// i can convert an array to string

function getPanimdrome(str) {
  if (!str || typeof str != "string") {
    console.log("please provide a valid string");
    return;
  }

  let reversedStr = str.split("").reverse().join("");
  console.log(reversedStr);

  if (str === reversedStr) {
    console.log(`${str} is a panigdrom String`);
  } else {
    console.log(`${str} is not a panigdrom String`);
  }
}

getPanimdrome(8);

// find the largeest number

// input [ 2, 9, 1, 7, 3]
// output : 9

// process
// loop => compare each item to my number (assumption)

let assumption = 0;

let input = [2, 9, 1, 7, 3];

let output = Math.max(...input);

console.log(output);

input.forEach((n) => {
  if (n > assumption) {
    assumption = n;
  }
});

console.log(assumption);

let string = "hello world";

function countVowels(str) {
  if (!str) {
    return console.log("Provide a valid string");
  }

  let vowel = ["a", "e", "i", "o", "u"];

  let arr = str.split("");
  let count = 0;

  arr.forEach((c) => {
    if (vowel.includes(c)) {
      count++;
    }
  });

  return count;
}
console.log(countVowels(string));
