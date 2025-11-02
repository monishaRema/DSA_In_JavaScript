let numbers = [ 200, 10, 100, 50, 9, 8, 4, 56]
let fruits = ['apple', "Cherry", 'tomato', 'banana']


/*
* Sort Bacis: 
* Sort always change the original array does not return a new array
* If no explicit function is not given it convert the numbers to string and check the first digit of the 
* Number then according to that it sort the array
*/
console.log(numbers.sort())

// To sort Assending order need to give a explicit callback function
console.log(numbers.sort((a,b)=> a - b))

// To sort Dessending order need to give a explicit callback function
console.log(numbers.sort((a,b)=> b - a))

// In case of sorting string it sort Uppercase first then lowercase then char

console.log(fruits.sort())

// To sort the string in order use localCompare
console.log(fruits.sort((a,b) => a.localeCompare(b)))

/*
* Sort with custom comparator:
* Arrays of objects need explicit comparator that grabs the property you want to sort on.
* Sorting is still in-place so use spread or slice for non-destructive sorted copies.
*/
let players = [
    { name: 'Messi', goals: 91 },
    { name: 'Ronaldo', goals: 63 },
    { name: 'Neymar', goals: 42 },
    { name: 'Suarez', goals: 36 },
]

console.log(players.sort((a, b) => a.goals - b.goals))

/*
* Sort immutably by cloning:
* Using spread ensures the original array stays intact while we work with the sorted result.
* Helpful when we want both original and sorted data available side by side.
*/
let cityTemps = [37, 24, 42, 19, 30]
let sortedCityTemps = [...cityTemps].sort((a, b) => a - b)

console.log(cityTemps)
console.log(sortedCityTemps)

/*
* Sort by derived data:
* Comparator can derive metrics like string length, then fallback to localeCompare for equal lengths.
* Combining numeric difference and localeCompare keeps sort stable and predictable.
*/
let programmingLanguages = ['JavaScript', 'Go', 'Rust', 'TypeScript', 'C']

console.log(programmingLanguages.sort((a, b) => {
    let lengthDifference = a.length - b.length
    if (lengthDifference !== 0) return lengthDifference
    return a.localeCompare(b)
}))

/*
* Sort with locale options:
* localeCompare accepts options to control case, accent, and punctuation sensitivity on demand.
* Helpful when user-facing strings should be treated equally regardless of case or accents.
*/
let cafeVariants = ['café', 'Cafe', 'CAFÉ', 'cafe']

console.log(cafeVariants.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base', ignorePunctuation: true })))

/*
* Sort using Intl.Collator:
* Collator precompiles the locale rules so repeated sorts reuse the optimized comparator.
* Using numeric: true keeps "10" after "2" just like humans expect in natural sort order.
*/
let files = ['file1', 'file20', 'file3', 'file10']
let collator = new Intl.Collator('en', { sensitivity: 'base', numeric: true })

console.log(files.sort(collator.compare))

/*
* Sort stability reminder:
* Modern JS (ES2019+) guarantees stable sort so original relative order stays intact for equal keys.
* Understanding this avoids writing extra logic when sorting by multiple fields sequentially.
*/
let stablePlayers = [
    { name: 'Alex', score: 90, level: 'A' },
    { name: 'Sam', score: 90, level: 'B' },
    { name: 'Lee', score: 88, level: 'A' },
]

console.log(stablePlayers.sort((a, b) => b.score - a.score))

/*
* Decorate-Sort-Undecorate (Schwartzian transform):
* Precompute sortable keys once, sort the decorated array, then map back for fewer expensive recalculations.
* Great when key extraction is heavy like parsing dates or computing string metrics.
*/
let events = [
    { name: 'Hackathon', date: '2024-03-12' },
    { name: 'Conference', date: '2023-11-01' },
    { name: 'Workshop', date: '2024-01-20' },
]

let sortedEvents = events
    .map(event => ({ event, timestamp: new Date(event.date).getTime() }))
    .sort((a, b) => a.timestamp - b.timestamp)
    .map(wrapper => wrapper.event)

console.log(sortedEvents)

/*
* Typed array sorting:
* Typed arrays like Int16Array always sort numerically ascending with a copy of the data.
* Reverse or custom ordering requires converting to plain arrays before sorting.
*/
let speeds = new Int16Array([320, 150, 480, 220])
let sortedSpeeds = Array.from(speeds).sort((a, b) => b - a)

console.log(speeds)
console.log(sortedSpeeds)

/*
* Mixed content sorting:
* Combine case folding and numeric parsing to keep humans happy with predictable ordering.
* Chain localeCompare and numeric fallback to handle strings like "Chapter 10" and "chapter 2".
*/
let chapters = ['Chapter 10', 'chapter 2', 'Chapter 1', 'chapter 12']

console.log(chapters.sort((a, b) => {
    let cleanA = a.toLowerCase()
    let cleanB = b.toLowerCase()
    let numberA = parseInt(cleanA.replace(/\D/g, '')) || 0
    let numberB = parseInt(cleanB.replace(/\D/g, '')) || 0
    if (numberA !== numberB) return numberA - numberB
    return cleanA.localeCompare(cleanB)
}))

/*
* Maintain sorted order incrementally:
* For streaming data insert into the correct spot instead of re-sorting entire array each time.
* Binary search locates the index quickly then splice keeps the array sorted with minimal work.
*/
let liveScores = [5, 12, 18, 27]
let newScore = 20

let insertIndex = liveScores.findIndex(score => score > newScore)
if (insertIndex === -1) {
    liveScores.push(newScore)
} else {
    liveScores.splice(insertIndex, 0, newScore)
}

console.log(liveScores)

