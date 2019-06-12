import { connect } from "react-redux";

import Cart from "../pages/Cart/Cart";

const mapStateToProps = state => ({
  cart: state.products.cart
});

const CartContainer = connect(mapStateToProps)(Cart);

export default CartContainer;
