import React, { useState, useEffect } from "react";

import styles from "./CatalogPage.module.css";

import ProductService from "services/ProductService";
import HeaderBig from "components/Header/HeaderBig";
import Filters from "./components/Filters/Filters";
import ProductsList from "components/ProductsList/ProductsList";

const CatalogPage = ({
  fetchProducts,
  products,
  isError,
  isLoading,
  error
}) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const manufacturers = ["All", ...ProductService.getManufactures(products)];
  const initFilters = { text: "", manufacture: "All" };

  let [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = filters => {
    let filtered = ProductService.getProductsByFilter({
      products: products,
      name: filters.text,
      manufacture: filters.manufacture === "All" ? null : filters.manufacture
    });

    setFilteredProducts(filtered);
  };

  return (
    <>
      <HeaderBig>Catalog</HeaderBig>
      {isError && <p>{error}</p>}
      {isLoading && <p> {error}</p>}
      {!isError && (
        <div className={styles.Catalog}>
          <div className={styles.ColumnLeft}>
            {/* <Filters
              initValue={initFilters}
              onChange={handleFilterChange}
              manufacturers={manufacturers}
            /> */}
          </div>

          <div className={styles.ColumnRight}>
            <ProductsList products={filteredProducts} />
          </div>
        </div>
      )}
    </>
  );
};

export default CatalogPage;
