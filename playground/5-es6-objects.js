// Object property shorthand

const name = 'Andrea'
const userAge = 24

const user = {
    name,
    age: userAge,
    location: 'Jakarta',
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 3
}

// const {label:productLabel, price, stock, salePrice, rating = 5} = product
// console.log(productLabel)
// console.log(rating)

const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)