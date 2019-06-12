import { connect } from "react-redux";

import CartPage from "../pages/Cart/CartPage";

const mapStateToProps = state => ({
  cart: state.products.cart
});

const CartContainer = connect(mapStateToProps)(CartPage);

export default CartContainer;
