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
