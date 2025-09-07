import React from "react";
import './product_ban.css';

function ProductBan({ name, price ,amount}) {
  function handleAddToCart() {
    console.log(`Added ${name} to cart`);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.length++
      cart.push({ name, price, quantity: 1 });

    console.log(cart);
  }
  return (
    <div className="product-ban">
      <h1>{name}</h1>
      <h3>{amount}</h3>
      <p>NIS{price}</p>

      <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductBan;
