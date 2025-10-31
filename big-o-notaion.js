/*
Big-O Notation — beginner-friendly cheat file

Think of Big-O as “how fast does the work grow when inputs grow?”
We ignore machine speed and small constants and focus on the trend.
*/

///////////////////////////////
// Sample data we’ll use
///////////////////////////////
const a = [1, 2, 3, 4, 5, 14, 16, 18, 20];
const b = [6, 7, 8, 9, 10];

const person = {
name: "example",
age: 25,
city: "New York",
friends: ["Alice", "Bob", "Charlie"],
isActive: true,
};

/////////////////////////////////////////////
// 1) O(1) — Constant time (doesn’t scale)
//  
/////////////////////////////////////////////
/*
“No matter how big the input gets, the cost stays the same.”
Examples: direct index access, a single map lookup, a few fixed math ops.
*/

// Direct index access: array[i] — O(1)
console.log("O(1) array index:", a[3]); // always one step

// Direct property access: obj.key — O(1)
console.log("O(1) object property:", person.name);

// Fixed-iteration loop is still O(1) if the bound is a constant (not tied to input size).

    const d = [1, 2, 3, 4, 15, 500, 5000, 8000, 9000, 10000];

    for (let i = 0; i < 5; i++) {
         // “5” is a constant, not related to d.length
        console.log("O(1) fixed loop item:", d[i]);
    }

/*
* Common “usually O(1)” ops:
* 1. array[index]
* 2. array.push(value), 
* 3. array.pop() // dynamic arrays: amortized O(1)
* 4. obj[key], obj[key] = value, key in obj
* 5. map.get(key), map.set(key), set.has(value) // average O(1)
* 6. Object.keys(obj).length is O(n) because it builds a list of keys.
*
*/

/////////////////////////////////////////////
// 2) O(n) — Linear time (scales 1-for-1)
/////////////////////////////////////////////
/*
“If input doubles, work roughly doubles.”
Typical when you look at every element once.
*/

// Loop all elements — O(n)
// Typically iterate each element once
for (let i = 0; i < a.length; i++) {
console.log("O(n) loop:", a[i]);
}

/*
Two separate inputs, two separate loops:
Cost = n + m

If n grows and m grows independently, say O(n + m).

If one is constant, it collapses to O(n).
*/
function printTwoArrays(nArr, mArr) {
    for (let i = 0; i < nArr.length; i++){
        console.log("nArr:", nArr[i]);
    } 
    for (let j = 0; j < mArr.length; j++){
         console.log("mArr:", mArr[j]);
    }
}
printTwoArrays(a, b); // O(n + m)

/*
* Input plus a few fixed operations:
* "O(n + k)” where k is a tiny fixed count → we just say O(n).
*/

function printAndDoAFewThings(arr) {
    for (let i = 0; i < arr.length; i++){
         console.log("arr:", arr[i]);
    }
    // these are a tiny constant amount of work → absorbed into O(n)
        let sum = 0;
        sum += 10;
        sum *= 2;
        console.log("Fixed tiny ops result:", sum);
}
printAndDoAFewThings(a);

/*
* Iterating object properties — O(n in number of keys).
* Prefer Object.keys for own properties (avoids prototype chain).
*/

for (const key of Object.keys(person)) {
    console.log(`O(n) object key: ${key} -> ${person[key]}`);
}

/*
* Common O(n) operations:

* 1. scan until found =>  array.includes(x), array.indexOf(x), array.find(fn)  

* 2. touch each element once => array.map / filter / reduce / forEach / slice / spread 

* 3. reindex many items → O(n) => array.shift / array.unshift 

* 4. build arrays of size n => Object.keys / Object.values / Object.entries 

* 5. Merging arrays => arr1.concat(arr2) or [...arr1, ...arr2] → O(n + m)
*/

//////////////////////////////////////////////////////////////
// 3) O(n^2) (quadratic) and O(n·m) (two different sizes)
//////////////////////////////////////////////////////////////
/*
* “Nested loops” land.

* If both loops run ~n times, total ≈ n * n → O(n^2).

* If the inner loop runs m times and the outer runs n times → O(n·m).
*/

// Product time, not strictly n^2 because arrays have different sizes
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            console.log("O(n·m) pair:", a[i], b[j]);
            // This runs a.length * b.length times → O(n·m)
            if (j === 0) console.log("O(n·m) tick for i:", i);
        }
    }

// True O(n^2) example: both loops depend on the same array/size.

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            // This runs a.length^2 times
            if (i === j) console.log("O(n^2) diagonal at:", i);
        }
    }

/*
* TL;DR:

* O(1): constant work — index/key access, push/pop (amortized)

* O(n): touch each item once — scans, map/filter/reduce, keys/values

* O(n^2): nested work over the same growing input

* O(n·m): nested work over two different input sizes

* ## Remember: Big-O is about growth, not exact milliseconds.
*/