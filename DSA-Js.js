
/*
* Object basics:
* - Stores key/value pairs where keys are strings or symbols.
* - Keys stay unique, values can repeat.
* - Order of keys is not guaranteed.
* - Use helpers like Object.keys(obj).length to count keys.
*/
let obj = {
    name : 'monisha',
    age : 24,
    city : 'new york',
}
console.log(obj);

let keysArr = Object.keys(obj); // Retrieve all keys as an array
console.log(keysArr);

console.log(Object.values(obj)); // get all values and return an array

console.log(Object.entries(obj)); // get key value pairs as nested array

/*
* Array basics:
* - Keeps values in order and uses number indexes.
* - Works with any data type and allows duplicates.
* - length tells you how many items you have.
*/

let array = [1, 2, 3, 4, 5];



/*
* Map basics:
* - A Map also stores key/value pairs, but keys can be any type (objects, numbers, functions, etc).
* - Keeps keys in the order you insert them.
* - size gives the number of entries.
* - Common methods: set, get, has, delete, clear, keys, values, entries, forEach.
* - Use when you need flexible keys or frequent lookups.
*/

let map = new Map([
    ['name', 'monisha'],
    ['age', 24],
    ['city', 'new york']
]);

map.set('country', 'Qatar'); // add new key-value pair
map.set('country', 'USA'); // update value for existing key

map.delete('age'); // remove key-value pair by key
console.log(map.has('city')); // check if key exists

if(map.has('city')){
    console.log(map.get('city')); // get value by key
}


console.log(map.size); // get number of key-value pairs

if(map.size <= 0){
    console.log("map has no values");
}

console.log(map);

map.clear(); // remove all key-value pairs
console.log(map);

const funMap = new Map();

funMap.set(838,"matar qadeem"); // using number as key
funMap.set(true, "boolean true"); // using boolean as key

const newObj = {name:"monisha", age:24};
funMap.set(newObj, "object as key"); // using object as key


console.log(funMap);


let userAge = new Map([
    ['alice', 25],
    ['bob', 30],
    ['charlie', 35],    
])

// iterate over map entries
userAge.forEach((value, key) => {
    console.log(`${key} is ${value} years old.`);
})

let usersNames = userAge.keys();    // get all keys
console.log([...usersNames]); // spread makes the iterator easy to read

// Iterate over keys
for (const name of userAge.keys()) {
    console.log(name);
}


let usersAges = userAge.values(); // get all values
console.log([...usersAges]);


// convert an object into a map through Object.entries()

const monisha  = {
    name:"monisha",
    age:28,
    city:"Doha"
}

const tempArray = Object.entries(monisha)
console.log(tempArray)

const monishaMap = new Map(tempArray)

console.log(monishaMap)

// convert a map into a plain object through Object.fromEntries
const monishaObj = Object.fromEntries(monishaMap)
console.log(monishaObj)


// convert a map into an array through Array.from()/ [...]
console.log(Array.from(monishaMap))
console.log([...monishaMap])



/*
* Set basics:
* - Holds unique values only; duplicates are ignored.
* - Order follows insertion order.
* - Helpful when you only care if something exists, not how many times.
* - Common methods: add, has, delete, clear, values, keys, entries, forEach, size.
*/
const set = new Set();

console.log(set)

const fruitSet = new Set(["apple","banana","mango",'guava',"apple"])

console.log(fruitSet)
console.log(fruitSet.values())
console.log(fruitSet.has("banana"))
console.log(fruitSet.size)

// keys() and values() return the same iterator in a Set; entries() returns [value, value] pairs.
console.log(fruitSet.keys())
console.log(fruitSet.entries())


// Delete one value from an array
let firstArray = [0, 4, 6, 4, 8, 9];
firstArray.shift(); // shift removes the first item (0 here)
console.log(firstArray)

let secondArray = new Set(firstArray)
console.log(secondArray)
secondArray.delete(6)
console.log(secondArray)


// Convert an Set to array 
let thirdArray = [...secondArray]
console.log(thirdArray)



// Set Theories
const first = new Set([1,2,3])
const second = new Set([3,4,5])

// Union: values from both sets
const union = new Set([...first, ...second])
console.log(union)

// Intersection: only shared values
const intersect = new Set([...first].filter(e => second.has(e)))
console.log(intersect)

// Difference: values in first that are not in second
const differ = new Set([...first].filter(e => !second.has(e)))
console.log(differ)

// Difference: values in second that are not in first
const differSecond = new Set([...second].filter(e => !first.has(e)))
console.log(differSecond)

// WeakMap
// WeakMap only accepts objects as keys and lets them be cleaned up when no longer referenced.
let x = {name: 'Mr X'}

const y = x
console.log(y)

x = null;

console.log(x)
console.log(y)


let addr = {'country': 'india'}

const wMap = new WeakMap()

wMap.set(addr, true)
console.log(wMap)
addr = null;
console.log(wMap)



// WeakSet keeps weak references to objects so they can be garbage collected when you drop your own reference.
const weakSet = new WeakSet()

let userOne = {name: 'User One'}
let userTwo = {name: 'User Two'}

weakSet.add(userOne)
weakSet.add(userTwo)
console.log(weakSet.has(userOne)) // true while the object reference exists

userOne = null; // removing the reference allows garbage collection later
console.log(weakSet.has(userTwo)) // second object still tracked

