import React from "react";

import styles from "./ProductsList.module.css";

import ProductContainer from "containers/ProductContainer";

const ProductsList = ({ products }) => (
  <div className={styles.Products}>
    {products.map(product => (
      <ProductContainer key={product.id} {...product} />
    ))}
  </div>
);

export default ProductsList;
