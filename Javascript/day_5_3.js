// const product = [
//     {
//         id: 123312314,
//         name: 'Cricket Bat',
//         category: 'sports',
//         price: 1000
//     },
//     {
//         id: 353453453,
//         name: 'Shampoo',
//         category: 'costume',
//         price: 200
//     },
//     {
//         id: 444423424,
//         name: 'Bag',
//         category: 'sports',
//         price: 500
//     },
//     {
//         id: 423423443,
//         name: 'Laptop',
//         category: 'gadgets',
//         specifications: {
//             RAM: '8 GB',
//             color: 'black',
//             SSD: '250 GB'
//         },
//         price: 45000
//     },
//     {
//         id: 423423444,
//         name: 'Laptop',
//         category: 'gadgets',
//         specifications: {
//             RAM: '16 GB',
//             color: 'black',
//             SSD: '550 GB'
//         },
//         price: 55600
//     },
//     {
//         id: 423423449,
//         name: 'Laptop',
//         category: 'gadgets',
//         specifications: {
//             RAM: '16 GB',
//             color: 'white',
//             SSD: '550 GB'
//         },
//         price: 45000
//     }
// ]

// const catregoryfilters = ["gadgets"]

// const filteredItems = product.filter((item, index) => catregoryfilters.indexOf(item.category) !== -1)
// console.log(filteredItems)

// const arr = [10,5,3,2,7,9,12]
// const evenNumber = arr.filter((item,index)=>item%2===0)
// console.log(evenNumber);

const numbers = [22, 25, 64, 34, 169, 625, 94, 100]


const giveSqrOfFlooredSqrt = (num) => {
    const flooredSqrt = Math.floor(Math.sqrt(num))
    return flooredSqrt * flooredSqrt
}

// console.log(giveFlooredSqrt(22))

const perfectSqrt = numbers.filter((num) => giveSqrOfFlooredSqrt(num) === num)
console.log(perfectSqrt)