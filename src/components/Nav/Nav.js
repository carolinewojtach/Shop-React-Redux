import React from "react";
import { Link } from "react-router-dom";

import styles from "./Nav.module.css";

import Container from "components/Container/Container";

const Nav = ({ cart }) => {
  let numberOfProducts = 0;
  if (cart.length !== 0) {
    numberOfProducts = cart.map(e => e.number).reduce((a, b) => a + b);
  }
  return (
    <nav className={styles.Navbar}>
      <Container>
        <ul className={styles.Nav}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart">
              <div className={styles.Cart}>
                Cart
                <span className={styles.CartIcon}>
                  <i className="fas fa-shopping-cart" />
                </span>
                {cart.length !== 0 && <span>{numberOfProducts}</span>}
              </div>
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Nav;
