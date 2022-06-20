import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

import SignUpFormContainer from "./session/SignupFormContainer";
import LoginFormContainer from "./session/LoginFormContainer";
import Greeting from "./greeting";
import ModelContainer from "./modal/model_container";

export const App = () => (
  <div>
    <ModelContainer />
    <Greeting />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;
