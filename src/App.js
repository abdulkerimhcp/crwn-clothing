import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./components/pages/homepage/homepage.component";
import ShopPage from "./components/pages/shop/shop.component";
import Header from "./components/header/header.component";
import SingInAndSingUpPage from "./components/pages/sing-in-and-sing-up/sing-in-and-sing-up.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/singin" component={SingInAndSingUpPage} />
      </Switch>
    </div>
  );
}

export default App;
