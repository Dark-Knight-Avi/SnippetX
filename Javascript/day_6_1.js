// Promise creation:

// function display(name) {
//     return new Promise((resolve, reject) => {
//         resolve(['Hi!', name])
//     })
// }

// // Promise accept

// async function callDisplay(name) {
//     const response = await display(name).then((res) => res.join(' '))
//     console.log(response)
// }

// callDisplay('Abdul')

const product = [
    {
        id: 123312314,
        name: 'Cricket Bat',
        price: 1000
    },
    {
        id: 353453453,
        name: 'Shampoo',
        price: 200
    },
    {
        id: 444423424,
        name: 'Bag',
        price: 500
    },
    {
        id: 423423443,
        name: 'Laptop',
        price: 45000
    }
]

const fetchData = (id) => {
    return new Promise((resolve, reject) => {
        const res_pdt = product.find((item, index) => item.id === id)
        if(res_pdt) {
            resolve(res_pdt)
        } else {
            reject("Product not found")
        }
    })
}

const getProduct = async (id) => {
    try {
        const pdt = await fetchData(id).then(res => res)
        console.log(pdt)
    } catch (error) {
        console.log(error)
    }
}
getProduct(423423443)
