import React from "react";

import styles from "./Cart.module.css";

import ProductInCart from "components/ProductInCart/ProductInCart";
import HeaderSmall from "components/Header/HeaderSmall";

const Cart = ({ cart }) => {
  console.log(cart);
  let sum = cart
    .map(p => +p.amount)
    .reduce((a, b) => a + b)
    .toFixed(2);

  return (
    <div className={styles.Cart}>
      <HeaderSmall>Your cart</HeaderSmall>
      {cart.map(product => (
        <ProductInCart key={product.id} {...product} />
      ))}
      <div className={styles.Sum}>
        <p> Sum: ${sum}</p>
      </div>
    </div>
  );
};

export default Cart;
