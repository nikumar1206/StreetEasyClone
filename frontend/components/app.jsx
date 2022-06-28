import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

import ModalContainer from "./modal/modal_container";
import HomeSplashContainer from "./homesplash/homesplash_container";
import FooterComponent from "./headers/footer";
import ListingsIndexContainer from "./listings/listings_container";
import ListingShowContainer from "./listing/listingshow_container";
import Navs from "./headers/navs";
const App = () => (
  <div className="app">
    <ModalContainer />
    <Navs />
    <Switch>
      <Route exact path="/" component={HomeSplashContainer} />
      <Route path="/listings/:listingId" component={ListingShowContainer} />
      <Route path="/listings/" component={ListingsIndexContainer} />
    </Switch>
    <FooterComponent />
  </div>
);

export default App;
