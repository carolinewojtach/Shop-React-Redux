import React from "react";
import { Provider } from "react-redux";
import store from "store/store";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Container from "components/Container/Container";
import Footer from "components/Footer/Footer";

import AboutPage from "pages/About/AboutPage";
import CatalogPageContainer from "containers/CatalogPageContainer";
import HomePageContainer from "containers/HomePageContainer";
import CartContainer from "containers/CartContainer";
import NavContainer from "containers/NavContainer";

const App = () => (
  <Provider store={store}>
    <Router>
      <>
        <NavContainer />
        <Container>
          <Route exact path="/" component={HomePageContainer} />
          <Route path="/catalog" component={CatalogPageContainer} />
          <Route path="/about" component={AboutPage} />
          <Route path="/cart" component={CartContainer} />
        </Container>
        <Footer />
      </>
    </Router>
  </Provider>
);

export default App;
