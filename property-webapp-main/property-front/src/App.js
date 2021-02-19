import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import "./assets/css/app.css";
import Home from "./components/home/home";
import Auth from "./components/auth/auth";
import ViewProperty from "./components/view-property/view-property";
import Profile from "./components/profile/profile";

function App() {
  return (
    <Router>
      <div className="App container-fluid">
        <Switch>
          <Route exact path="/" ><Home></Home></Route>
          <Route exact path="/auth" ><Auth></Auth></Route>
          <Route exact path="/profile" ><Profile></Profile></Route>
          <Route exact path="/property/:id" ><ViewProperty></ViewProperty></Route>
        </Switch>
      </div>

    </Router>
    );
}

export default App;
