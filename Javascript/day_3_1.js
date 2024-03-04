// Array methods:
// Properties:
// i) Iterates an array in most optimistic way.

const arr = ["Abdul", "Khalique", "Beta", "Lund", "Larbak", "Mitha"]
let length = arr.length
const reverseArr = arr.map((item, index) => {
    let temp = item
    item = arr[length - index - 1]
    arr[length - index - 1] = temp
    return item
})
console.log(reverseArr)
