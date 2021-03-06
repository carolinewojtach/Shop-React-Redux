import React from "react";

import styles from "./Product.module.css";

const Product = ({ id, name, image, amount, addToCart }) => (
  <div className={styles.Product}>
    <img className={styles.Image} src={image} alt={name} />
    <p className={styles.Price}>${amount}</p>
    <br />
    <button
      type="button"
      className={styles.Button}
      onClick={() => addToCart(id)}
    >
      Add to cart
    </button>
    <h3>{name}</h3>
  </div>
);

export default Product;
