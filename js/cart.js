const products = [
    { id: 1, image: 'product1.jpg', price: '$19.99' },
    { id: 2, image: 'product2.jpg', price: '$29.99' },
    { id: 3, image: 'product3.jpg', price: '$39.99' },
    { id: 4, image: 'product4.jpg', price: '$49.99' },
];

function calculateTotalPrice(products) {
    let totalPrice = 0;

    // Iterate through each product and add its price (converted to a number) to totalPrice
    products.forEach(product => {
        // Remove the '$' sign and convert to a number
        const price = parseFloat(product.price.replace('$', ''));
        totalPrice += price;
    });

    return totalPrice.toFixed(2); // Return the total price formatted to 2 decimal places
}

const total = calculateTotalPrice(products);
console.log('Total Price:', total);