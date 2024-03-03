// Array Methods

// i) Premitive Data types: i) Number ii) Symbol ii) String iv) Boolean v) NULL vi) Undefined
// ii) Non-Premitive Data types: i) Object

// Array:
// i) In JavaScript, Array is nothing but an Object
// ii) Array is a list of items (Any Data type)
// iii) Best practice to declare an array is using const keyword

// const nums = [1, 5, 4, 3]

// nums.push('India')
// nums.push([1, 2, 3])
// nums[11] = 9 // 9 will be assigned to the property of 11th index of the array and oters 7 items will be empty

// nums[2] = 7 // Updates the 2nd index of the array
// console.log(nums)

// i) Method1 - Iterator:

// for (let i of nums) {
//     console.log(i)
// }
// for (let i in nums) {
//     console.log(i)
// }


// ii) Method1 - Accessing the items:
const nums = [1, 5, 4, 3, 4, 8, 6, 8, 70, 75, 100]
// let len = nums.length
// console.log(nums[len - 1])
console.log(nums.at(-5))