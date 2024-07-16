let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.product} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(itemDiv);
        total += item.price;
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}
