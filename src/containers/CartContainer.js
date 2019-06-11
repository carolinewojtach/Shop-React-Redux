import { connect } from "react-redux";

import Cart from "../components/Cart/Cart";

const mapStateToProps = state => ({
  productsInCart: state.cart.productsInCart
});

const CartContainer = connect(mapStateToProps)(Cart);

export default CartContainer;
