// let, cons & var:

// console.log(b) => Error
console.log(c) // => undefined (Hoisting)


let b = 5 // Doesn't get Hoisted here
// let b = 8 // Not allowed to Re-declared here
console.log(b)
b = 9
var c = 7 // Gets Hoisted here
c = 17
console.log(c)
var c = "India"
console.log(b)
// console.log(d) => Error
const d = 8 // Doesn't get Hoisted
// const d = 10 // Not allowed to Re-declared here
// d = 9 // Not allowed to do Re-assignment here
console.log(d)