function addToCart(product) {
    var cart = document.getElementById('cart-items');
    var newCartItem = document.createElement('li');
    newCartItem.innerHTML = `
        <img src="${product.image}" alt="${product.title}" />
        <span class="product-title">${product.title}</span>
        <span class="product-price">$${product.price.toFixed(2)}</span>
        <button onclick="removeFromCart(this)">Remove</button>
    `;
    cart.appendChild(newCartItem);
}

function removeFromCart(button) {
    var cartItem = button.parentNode;
    cartItem.parentNode.removeChild(cartItem);
}

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(products => {
        const productList = document.getElementById('product-list');

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'card mb-2';
            productCard.innerHTML = `
                <img src="${product.image}" class="card-img-top" alt="Product Image">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">$${product.price.toFixed(2)}</p>
                    <button class="btn btn-success btn-block" onclick="addToCart(${JSON.stringify(product)})">Add to Cart</button>
                </div>
            `;

            productList.appendChild(productCard);
        });
    })
    .catch(error => console.error('Error fetching products:', error));
