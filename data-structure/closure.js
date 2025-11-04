// 🧩 Closure & Higher-Order Function Example
// ------------------------------------------
//
// Imagine you walk into a bank 🏦
// The bank manager gives you your own *secret deposit box* (count),
// and a special *key* (inner function) to add money into that box.
//
// The manager leaves, but your key still works.
// That’s what Closure does in JavaScript!

const createCounter = () => {
  let count = 0; // 🏦 This is your secret box — hidden inside the bank (function scope).

  // The manager gives you a key (function) to access your own box.
  return (amount) => {
    count += amount; // 🔑 Use the key to add money into your secret box.
    return count; // 💰 Shows how much is inside the box right now.
  };
};

// You ask the bank manager for your personal key.
const counter = createCounter();

console.log(counter(10)); // Output: 10  → You added 10 into your box.
console.log(counter(10)); // Output: 20  → You added 10 more; total now 20.

/*
       ┌─────────────────────────────────────────────┐
       │           🏦 Bank Manager Function           │
       │---------------------------------------------│
       │  count = 0                              │
       │  return addMoney(amount) {                  │
       │      count += amount                    │
       │      console.log(count)                 │
       │  }                                          │
       └─────────────────────────────────────────────┘
                         │
                         ▼
           You get a key (function counter)
                         │
                         ▼
       ┌─────────────────────────────────────────────┐
       │            🔐 Your Secret Box               │
       │---------------------------------------------│
       │  Each time you call counter(amount):      │
       │  → It adds money to the same secretBox      │
       │  → Keeps its old value safe (memory stays)  │
       └─────────────────────────────────────────────┘

*/
