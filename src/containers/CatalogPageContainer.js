import { connect } from "react-redux";

import CatalogPage from "pages/Catalog/CatalogPage";
import { fetchProducts, getByFilter } from "../actions/actions";

const mapStateToProps = state => ({
  manufacturers: [...new Set(state.products.products.map(p => p.manufacture))],
  filteredProducts: state.products.filteredProducts,
  isLoading: state.products.isLoading,
  isError: state.products.isError,
  error: state.products.error
});

const mapDispatchToProps = {
  fetchProducts,
  getByFilter
};
const CatalogPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogPage);

export default CatalogPageContainer;
