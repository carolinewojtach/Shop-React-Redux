import { connect } from "react-redux";

import ProductInCart from "../components/ProductInCart/ProductInCart";
import { deleteFromCart } from "../actions/actions";

const mapDispatchToProps = {
  deleteFromCart
};

const ProductInCartContainer = connect(
  null,
  mapDispatchToProps
)(ProductInCart);

export default ProductInCartContainer;
