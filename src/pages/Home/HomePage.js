import React, { useEffect } from "react";

import HeaderBig from "components/Header/HeaderBig";
import HeaderSmall from "components/Header/HeaderSmall";

import ProductService from "services/ProductService";
import ProductsList from "components/ProductsList/ProductsList";

const ProductsSection = ({ title, featuredProducts }) => (
  <>
    <HeaderSmall>{title}</HeaderSmall>
    <ProductsList products={featuredProducts} />
  </>
);

const HomePage = ({ fetchProducts, products, isError, isLoading, error }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const featuredDesktop = ProductService.getProductsByFilter({
    products: products,
    category: "desktop",
    featured: true
  });

  const featuredTablet = ProductService.getProductsByFilter({
    products: products,
    category: "tablet",
    featured: true
  });

  return (
    <>
      <HeaderBig>Welcome to our store</HeaderBig>

      <ProductsSection title="Desktops" featuredProducts={featuredDesktop} />
      <ProductsSection title="Tablets" featuredProducts={featuredTablet} />
    </>
  );
};

export default HomePage;
