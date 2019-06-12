import React from "react";

import styles from "./ProductInCart.module.css";

const ProductInCart = ({ id, name, image, number, amount, deleteFromCart }) => {
  return (
    <div className={styles.Product}>
      <img className={styles.Image} src={image} alt={name} />
      <h3>{name}</h3>

      <p className={styles.Price}>{number}</p>
      <p className={styles.Price}>${amount}</p>
      <button
        type="button"
        className={styles.Button}
        onClick={() => deleteFromCart(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default ProductInCart;
