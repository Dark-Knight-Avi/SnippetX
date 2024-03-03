// Question: In which case var doesn't get chance to be hoisted?
console.log(a) // Hoisted
var a = 78 // assignment
console.log(a)
var a = 76 // redclare + reassignment
console.log(a)