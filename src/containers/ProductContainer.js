import { connect } from "react-redux";

import Product from "../components/Product/Product";
import { addToCart } from "../actions/actions";

const mapDispatchToProps = {
  addToCart
};
const ProductContainer = connect(
  null,
  mapDispatchToProps
)(Product);

export default ProductContainer;
