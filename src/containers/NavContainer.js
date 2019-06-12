import { connect } from "react-redux";

import Nav from "components/Nav/Nav";

const mapStateToProps = state => ({
  cart: state.products.cart
});

const NavContainer = connect(mapStateToProps)(Nav);

export default NavContainer;
