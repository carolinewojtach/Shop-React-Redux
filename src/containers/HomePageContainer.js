import { connect } from "react-redux";

import HomePage from "pages/Home/HomePage";
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
const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomePageContainer;
