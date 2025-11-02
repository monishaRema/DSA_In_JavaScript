//* Generate a lookup table

//? Input
const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];

const postLookUp = postsArray.reduce((result, item) => {

    result[item.id] = item

    return result;

}, {})

console.log(postLookUp)


// Order on n =>  o(n)
const post = postsArray.find(item => item.id == 'p-102')
console.log(post)


// Order of 1 => o(1)
const newPost = postLookUp["p-102"]
console.log(newPost)









