import React from "react";
import { Provider } from "react-redux";
import store from "store/store";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "components/Nav/Nav";
import Container from "components/Container/Container";
import Footer from "components/Footer/Footer";

import AboutPage from "pages/About/AboutPage";
import CatalogPageContainer from "containers/CatalogPageContainer";
import HomePageContainer from "containers/HomePageContainer";

const App = () => (
  <Provider store={store}>
    <Router>
      <>
        <Nav />
        <Container>
          <Route exact path="/" component={HomePageContainer} />
          <Route path="/catalog" component={CatalogPageContainer} />
          <Route path="/about" component={AboutPage} />
        </Container>
        <Footer />
      </>
    </Router>
  </Provider>
);

export default App;
