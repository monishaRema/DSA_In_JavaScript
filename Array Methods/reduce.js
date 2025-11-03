/*
  Reduce Refresher
  - reduce turns a list into a single value (number, object, array, etc.)
  - signature: array.reduce((accumulator, item, index, source) => nextAccumulator, initialValue)
  - always return the accumulator from the callback so the chain keeps going
  - lean on an initialValue so empty arrays do not break your logic
  - treat the accumulator like your running notebook: update it and hand it back each loop
*/

// --- Example 1: Summing up a shopping cart ---------------------------------
const cartItems = [
  { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
  { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
  { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
];

const subtotal = cartItems.reduce((runningTotal, item) => {
  // Each pass contributes the extended price of the current item.
  return runningTotal + item.price * item.quantity;
}, 0); // The initial subtotal is 0 so the loop always works, even on an empty cart.

console.log("Cart subtotal:", subtotal);

// --- Example 2: Tracking a running maximum ---------------------------------
const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];

const bestScorer = players.reduce((bestPlayerSoFar, player) => {
  // Keep the current champ when they are still winning.
  if (bestPlayerSoFar.score >= player.score) {
    return bestPlayerSoFar;
  }

  // Otherwise the new player takes the crown.
  return player;
}, players[0]); // Seed with the first player so we always have someone to compare against.

console.log("Top scorer:", bestScorer);

// --- Example 3: Building a lookup table (id -> post) ------------------------
// Think of a lookup table as a dictionary: look up any id without scanning the entire array.
const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];

const postLookUp = postsArray.reduce((table, post) => {
  table[post.id] = post; // Use the id as the dictionary key.
  return table;
}, {}); // Start with an empty object so we can tack on keys as we go.

console.log("Lookup table:", postLookUp);

// --- Example 4: Grouping and counting survey responses ----------------------
/*
  Survey Question: Will AI eat your job?
  A: Yes, it will
  B: No, it will not
  C: Not sure
  D: Maybe
*/
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

// Game plan:
// - Start with an empty object.
// - For every response letter, increment the matching bucket.
// - If we have not seen that letter before, set it to 1.
const surveyCounts = surveyResponses.reduce((tally, response) => {
  if (tally[response]) {
    tally[response] += 1;
  } else {
    tally[response] = 1;
  }

  return tally;
}, {});

console.log("Survey tally:", surveyCounts);

// Same idea, but in one expression using a default of 0 when the key is missing.
const surveyCountsCompact = surveyResponses.reduce((tally, response) => {
  tally[response] = (tally[response] || 0) + 1;
  return tally;
}, {});

console.log("Survey tally (compact):", surveyCountsCompact);

// --- Example 5: Grouping sales and aggregating totals -----------------------
// Scenario: Turn a flat list of sales into a report grouped by category.
const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

const totalSalesByCategory = sales.reduce((table, sale) => {
  const { category, price, quantity } = sale;

  // Create the bucket the first time we encounter a category.
  if (!table[category]) {
    table[category] = {
      totalRevenue: 0,
      itemCount: 0,
    };
  }

  table[category].totalRevenue += price * quantity;
  table[category].itemCount += quantity;

  return table;
}, {});

console.log("Sales table by category:", totalSalesByCategory);

// --- Example 6: Client-side "join" (users + posts) --------------------------
// We will create a lookup table keyed by userId and then enrich the users list.
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

const postByUserId = posts.reduce((table, post) => {
  const { userId } = post;

  if (!table[userId]) {
    table[userId] = [];
  }

  table[userId].push(post);

  // console.log("Table so far:", table); // Uncomment to peek while learning.
  return table;
}, {});

const usersWithPosts = users.map((user) => {
  const enrichedUser = {
    ...user,
    posts: postByUserId[user.id] || [],
  };

  // console.log("User with posts:", enrichedUser); // Uncomment for debugging.
  return enrichedUser;
});

console.log("Posts grouped by user:", usersWithPosts);

// --- Example 7: Binning time-series events into 30 minute windows -----------
// Goal: Count how many events land in each half-hour bucket so we can spot trends.
const events = [
  { timestamp: "2025-10-22T10:01:00Z", type: "click" },
  { timestamp: "2025-10-22T10:05:00Z", type: "scroll" },
  { timestamp: "2025-10-22T10:14:00Z", type: "click" },
  { timestamp: "2025-10-22T10:31:00Z", type: "click" },
  { timestamp: "2025-10-22T10:45:00Z", type: "scroll" },
  { timestamp: "2025-10-22T11:02:00Z", type: "click" },
];

const HALF_HOUR_MS = 30 * 60 * 1000;

const binnedEvents = events.reduce((bins, event) => {
  const eventTime = new Date(event.timestamp).getTime();
  const bucketStartMs = Math.floor(eventTime / HALF_HOUR_MS) * HALF_HOUR_MS;
  const bucketLabel = new Date(bucketStartMs).toISOString();

  if (!bins[bucketLabel]) {
    bins[bucketLabel] = {
      total: 0,
      events: [],
    };
  }

  bins[bucketLabel].total += 1;
  bins[bucketLabel].events.push(event);

  return bins;
}, {});

console.log("Binned events:", binnedEvents);



const Interval = 30 * 60 * 1000;

const getBiningTimestamp = (timestamp) => {
  const date = new Date(timestamp);

  console.log(date.getTime())
}

getBiningTimestamp("2025-10-22T10:01:00Z")




 