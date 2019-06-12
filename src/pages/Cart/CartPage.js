import React from "react";

import styles from "./Cart.module.css";

import HeaderSmall from "components/Header/HeaderSmall";
import ProductInCartContainer from "containers/ProductInCartContainer";

const renderCart = cart => {
  let sum = 0;
  if (cart.length !== 0) {
    sum = cart
      .map(p => p.amount)
      .reduce((a, b) => a + b)
      .toFixed(2);
  }
  return (
    <div>
      {cart.map(product => {
        return <ProductInCartContainer key={product.id} {...product} />;
      })}

      <div className={styles.Sum}>
        <p>Sum: ${sum}</p>
      </div>
    </div>
  );
};

const CartPage = ({ cart }) => {
  return (
    <div className={styles.Cart}>
      <HeaderSmall>Your cart</HeaderSmall>
      {cart.length !== 0 ? (
        renderCart(cart)
      ) : (
        <div className={styles.EmptyCart}>No products in cart</div>
      )}
    </div>
  );
};

export default CartPage;
