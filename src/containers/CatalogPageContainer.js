import { connect } from "react-redux";

import CatalogPage from "pages/Catalog/CatalogPage";
import { fetchProducts } from "../actions/actions";

const mapStateToProps = state => ({
  products: state.products.products,
  isLoading: state.products.isLoading,
  isError: state.products.isError,
  error: state.products.error
});

const mapDispatchToProps = {
  fetchProducts
};
const CatalogPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogPage);

export default CatalogPageContainer;
