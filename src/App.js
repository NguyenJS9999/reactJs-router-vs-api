import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navigation } from "./components/navigation/Navigation";

import { Index } from "./components/Index";
import { Product } from "./components/Product";
import { ProductDetail } from "./components/ProductDetail";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import { WishList } from "./components/WishList";
import { ProjectDone } from "./components/ProjectDone";
import { Blog } from "./components/Blog";
import { About } from "./components/About";
import { BuildConfiguration } from "./components/BuildConfiguration";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {


  return (
    <>
      <Router>
        <div>
          <Navigation />

          {/* <nav className="container"> */}
            {/* <div> <Link to="/">Index</Link> </div> */}
            {/* <div> <Link to="/product">Product</Link> </div> */}
            {/* <div> <Link to="/productDetail">ProductDetail</Link> </div> */}
            {/* <div> <Link to="/shoppingCart">Cart</Link> </div> */}
            {/* <Link to="/wishList"></Link> */}
            {/* <Link to="/projectDone"></Link> */}
            {/* <Link to="/blog"></Link> */}
            {/* <Link to="/about"></Link> */}
            {/* <Link to="/build-configuration"></Link> */}
          {/* </nav> */}

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

          <Switch>
            <Route path="/product">
              <Product />
            </Route>

            <Route path="/product-detail/:slug/:id">
              <ProductDetail />
            </Route>

            <Route path="/shoppingCart">
              <ShoppingCart />
            </Route>

            <Route path="/wishList">
              <WishList />
            </Route>

            <Route path="/projectDone">
              <ProjectDone />
            </Route>

            <Route path="/blog">
              <Blog />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/build-configuration">
              <BuildConfiguration />
            </Route>

            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
