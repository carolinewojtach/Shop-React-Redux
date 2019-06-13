import { connect } from "react-redux";

import HomePage from "pages/Home/HomePage";
import { fetchProducts, getByFilter } from "../actions/actions";

const mapStateToProps = state => ({
  products: state.products.products,
  filteredProducts: state.products.filteredProducts
});

const mapDispatchToProps = {
  fetchProducts,
  getByFilter
};
const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomePageContainer;
