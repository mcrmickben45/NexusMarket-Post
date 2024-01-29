function addToCart(product) {
    var cart = document.getElementById('cart-items');
    var newCartItem = document.createElement('li');
    newCartItem.innerHTML = `
        <img src="${product.image}" alt="${product.title}" />
        <span class="product-title">${product.title}</span>
        <span class="product-price">${product.price}</span>
        <button onclick="removeFromCart(this)">Remove</button>
    `;
    cart.appendChild(newCartItem);
}

function removeFromCart(button) {
    var cartItem = button.parentNode;
    cartItem.parentNode.removeChild(cartItem);
}
