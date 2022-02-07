import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage.component";

import "./App.css";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

class App extends React.Component {
  render() {
    return (
      // <div className='App'>
      //   <HomePage/>
      // </div>
      <div>
        <Switch>
        <Route exact path="/shop/hats" component={HatsPage} />
        <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
