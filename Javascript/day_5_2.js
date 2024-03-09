const product = [
    {
        id: 123312314,
        name: 'Cricket Bat',
        category: 'sports',
        price: 1000
    },
    {
        id: 353453453,
        name: 'Shampoo',
        category: 'costume',
        price: 200
    },
    {
        id: 444423424,
        name: 'Bag',
        category: 'sports',
        price: 500
    },
    {
        id: 423423443,
        name: 'Laptop',
        category: 'gadgets',
        specifications: {
            RAM: '8 GB',
            color: 'black',
            SSD: '250 GB'
        },
        price: 45000
    },
    {
        id: 423423444,
        name: 'Laptop',
        category: 'gadgets',
        specifications: {
            RAM: '16 GB',
            color: 'black',
            SSD: '550 GB'
        },
        price: 55600
    },
    {
        id: 423423449,
        name: 'Laptop',
        category: 'gadgets',
        specifications: {
            RAM: '16 GB',
            color: 'white',
            SSD: '550 GB'
        },
        price: 45000
    }
]

const catregoryfilters = ['gadgets']
const priceFilter = {min: 10000, max: 50000}
const colorFilter = ['black', 'white']

const filteredItems = product.filter(pdt => catregoryfilters.includes(pdt.category) && (pdt.price >= priceFilter.min && pdt.price <= priceFilter.max) && colorFilter.includes(pdt.specifications.color))

console.log(filteredItems)

