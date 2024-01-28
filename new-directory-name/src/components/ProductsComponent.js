import React, { useEffect, useState } from 'react';

const ProductsComponent = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: '{ products { id name description price } }' }),
        })
        .then(response => response.json())
        .then(data => setProducts(data.data.products))
        .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    {/* Add to cart button etc. */}
                </div>
            ))}
        </div>
    );
};

export default ProductsComponent;