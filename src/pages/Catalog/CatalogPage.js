import React, { useEffect } from "react";

import styles from "./CatalogPage.module.css";

import HeaderBig from "components/Header/HeaderBig";
import Filters from "./components/Filters/Filters";
import ProductsList from "components/ProductsList/ProductsList";

const CatalogPage = ({
  fetchProducts,
  getByFilter,
  filteredProducts,
  manufacturers,
  isError,
  isLoading,
  error
}) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const initFilters = { text: "", manufacture: "All" };

  return (
    <>
      <HeaderBig>Catalog</HeaderBig>
      {isError && <p>{error}</p>}
      {isLoading && <p>{error}</p>}
      {!isError && (
        <div className={styles.Catalog}>
          <div className={styles.ColumnLeft}>
            <Filters
              initValue={initFilters}
              getByFilter={getByFilter}
              manufacturers={manufacturers}
            />
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
