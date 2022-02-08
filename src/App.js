import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/home/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import "./App.css";
class App extends React.Component {
  render() {
    return (
      // <div className='App'>
      //   <HomePage/>
      // </div>
      <div>
        <Switch>
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
