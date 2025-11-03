//* Generate a lookup table

//? Input
const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];

// 1. Create an empty obj
// 2. Get the key from postsArry
// 3. Assign the entire obj to the key

//? Output
// {
//   "p-101": { "id": "p-101", "title": "Intro to SQL", "author": "Alex" },
//   "p-102": { "id": "p-102", "title": "Data Structures in JS", "author": "Beth" },
//   "p-103": { "id": "p-103", "title": "Understanding Reduce", "author": "Chris" },
//   "p-104": { "id": "p-104", "title": "CSS Grid Tricks", "author": "Alex" }
// }

const lookUpTable = postsArray.reduce((table, post) => {
  const { id } = post;
  table[id] = post;
  console.log(table);
  return table;
}, {});

//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

//? Output
// { A: 5, C: 3, B: 5, D: 1 }

// 1. Create an empty obj
// 2. Find the response
// 3. Calculate the response count

const surveyResult = surveyResponses.reduce((result, response) => {
  if (result[response]) {
    result[response] = result[response] + 1;
  } else {
    result[response] = 1;
  }

  console.log(result);
  return result;
}, {});

//* Grouping and Aggregating Data

// Scenario: You have a flat array of sales data, and you need to group the sales by category,
// calculating the total revenue and the number of items sold for each.

const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

//? Output
// {
//   Electronics: {
//     totalRevenue: 1330,
//     itemCount: 4,
//   },
//   Books: {
//     totalRevenue: 110,
//     itemCount: 3,
//   },
//   Home: {
//     totalRevenue: 150,
//     itemCount: 1,
//   },
// };

// 1. Create an empty obj
// 2. Find category
// 3. Create key by the name of category
// 4. Assign a obj to the category => {totalRevenue:0,itemCount: 0,},
// 5. Calculate the revenue and total items sold

const salesReport = sales.reduce((report, sale) => {
  const { category, price, quantity } = sale;

  if (!report[category]) {
    report[category] = {
      totalRevenue: 0,
      itemCount: 0,
    };
  }
   report[category].totalRevenue += price * quantity
   report[category].itemCount += quantity



  console.log(report);
  return report;
}, {});

//* Denormalizing Data (Client-Side "Join")

// Scenario: You have an array of users and a separate array of posts.
// You want to create a new array of users where each user object contains a posts array of their own posts.

//? input
const users = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Charlie" },
];

const posts = [
  { id: 1, userId: 102, title: "My first post" },
  { id: 2, userId: 101, title: "React Hooks" },
  { id: 3, userId: 101, title: "Data Structures" },
  { id: 4, userId: 103, title: "CSS is fun" },
  { id: 5, userId: 102, title: "Node.js streams" },
];

//? output
// [
//   { id: 101, name: 'Alice', posts: [ { id: 2, ... }, { id: 3, ... } ] },
//   { id: 102, name: 'Bob', posts: [ { id: 1, ... }, { id: 5, ... } ] },
//   { id: 103, name: 'Charlie', posts: [ { id: 4, ... } ] }
// ]



// 1. find out how many post the user has
// 2. insert his posts into an array 
// posts : [ {id: p-1, userId: 1, title: 'post title'}, {id: p-1, userId: 1, title: 'post title'}]
// 3. insert the posts array to the user object


const getPostsByUser = posts.reduce((postsTable,post)=>{
    

  const {userId} = post

  if(!postsTable[userId]){
    postsTable[userId] = []
  }

  postsTable[userId].push(post)

  
  console.log(postsTable)
  return postsTable
},{})


const result = users.map(user =>{

  let result = {

    ...user,
    posts: getPostsByUser[user.id]


  }


  console.log(result)
  return result

})



//* Binning (Resampling) Time Series Data

// Scenario: You have a long list of user click events.
// You need to "bin" these events into 30-minute intervals and count them to see engagement over time.

//? Input
const events = [
  { timestamp: "2025-10-22T10:01:00Z", type: "click" },
  { timestamp: "2025-10-22T10:05:00Z", type: "scroll" },
  { timestamp: "2025-10-22T10:29:00Z", type: "click" },
  { timestamp: "2025-10-22T10:31:00Z", type: "click" },
  { timestamp: "2025-10-22T10:45:00Z", type: "scroll" },
  { timestamp: "2025-10-22T11:02:00Z", type: "click" },
];

//? Output
// binnedEvents = {
//   "2025-10-22T10:00:00.000Z": { "total": 3 },
//   "2025-10-22T10:30:00.000Z": { "total": 2 },
//   "2025-10-22T11:00:00.000Z": { "total": 1 }
// }


const interval = 30 * 60 * 1000

const getTimeStamp = (timeStamp)=>{

  const date = new Date(timeStamp)

  const flooredDate =  Math.floor(date.getTime() / interval) * interval

  return new Date(flooredDate).toISOString()
}

console.log(getTimeStamp("2025-10-22T10:45:00Z"))


const binnedEvents = events.reduce((result,event)=>{

  const binnedData = getTimeStamp(event.timestamp)

  if(!result[binnedData]){
    result[binnedData] = {total: 0}
  }

  result[binnedData].total += 1;

  console.log(result)
  return result

},{})






