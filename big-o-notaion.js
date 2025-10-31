// 
/*
* ## Big O Notation — simple notes (non-CS friendly)
* Big O Notation is a way to describe the performance or complexity of an algorithm. It specifically describes the * worst-case scenario and helps to understand how the algorithm behaves as the input size grows.
* Big O tells us how the *work grows* when input gets bigger.
* It’s not exact time in seconds — just the growth trend (worst case).
*/

let a = [1, 2, 3, 4, 5, 14, 16, 18, 20];
let b = [6, 7, 8, 9, 10];

let ab = {
  name: "example",
  age: 25,
  city: "New York",
  friends: ["Alice", "Bob", "Charlie"],
  isActive: true,
};

/* 
* 1) O(1) — Constant time
* Takes the same time no matter how big the input is.
* Example: get an array item by index, or a value from an object by key.
*/
console.log(a[3]);     // O(1)
console.log(ab.name);  // O(1)

/*
* 1.1) O(1) with fixed iterations
* Even with a tiny fixed loop (like 5 times), it’s still O(1) because
* the loop count does NOT depend on the input size.
*/
let d = [1, 2, 3, 4, 15, 500, 5000, 8000, 9000, 10000];
for (let i = 0; i < 5; i++) {
  console.log(d[i]);  // still O(1)
}

/*
* Common operations that are usually O(1):
* - array[index]
* - array.push(value), array.pop()                // dynamic arrays: amortized O(1)
* - array.length, (array.length === 0)
* - obj[key], obj[key] = value, delete obj[key]   // typical O(1)
* - (key in obj)
* - Map/Set: map.get/set, set.has/add/delete      // average O(1)
*
* Important: Object.keys(obj).length is **O(n)** (not O(1)),
* because it must build the whole keys array. (See the O(n) list below.)
*/


/*
* 2) O(n) — Linear time
* Work grows directly with the number of items.
* If items double, work roughly doubles.
*/
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);   // O(n)
}

/* 
* 2.1) O(n + m) — Two separate inputs
* Two loops over two different arrays: cost adds up.
* If both grow, we say O(n + m). If one is fixed small, it collapses to O(n).
*/
function exampleFunction(n, q) {
  for (let i = 0; i < n.length; i++) {
    console.log(n[i]);
  }  
  for (let j = 0; j < q.length; j++) {
    console.log(q[j]);
  }
}
exampleFunction(a, b); // O(n + m)

/* 
* 2.2) O(n + k) where k is a tiny fixed number of extra steps
* In practice we just call this O(n), because constants don’t matter in Big O.
*/
function exampleFunction2(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // O(n)
  }
  // fixed small work → treated as constant
  let sum = 0;
  sum += 10;
  sum *= 2;
  console.log("Fixed operations result:", sum);
}   
exampleFunction2(a);

/*
* 2.3) O(n) — Looping object properties
* Use Object.keys(obj) to loop your own keys (not the prototype chain).
*/
for (let key of Object.keys(ab)) {
  console.log(`${key}: ${ab[key]}`); // O(number of keys)
}   

/* 
* Common O(n) operations:
* - array.includes(x), array.find(fn), array.indexOf(x)          // scan
* - array.map / filter / reduce / forEach / slice / spread       // touch each item once
* - array.shift / array.unshift                                  // reindex many items
* - Object.keys / Object.values / Object.entries (and .length)   // build arrays of size n
* - Merging arrays: arr1.concat(arr2) or [...arr1, ...arr2]      // O(n + m)
*/


/* 
* 3) O(n^2) and O(n·m) — Nested loops
* If the inner loop and outer loop both depend on the **same** size n → O(n^2).
* If they depend on **different** sizes (n and m) → O(n·m).
*/

// Different sizes → O(n·m), not strictly n^2
for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < b.length; j++) {
    console.log('*');
  }
}

// Same size (both use a.length) → O(n^2)
for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a.length; j++) {
    // just an example
  }
}

/*
* Quick recap:
* - O(1): constant steps — index/key access, push/pop
* - O(n): touches each item once — scans, map/filter/reduce, Object.keys(...)
* - O(n^2): nested loops over the same growing input
* - O(n·m): nested loops over two different input sizes
*
* Tip: Big O = growth trend, not exact milliseconds.
*/
