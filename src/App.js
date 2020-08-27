import React from "react";
import logo from "./logo.svg";

import "./App.css";
// import Button from 'react-bootstrap/Button'
// this just imports bootstrap button

import { Button, Alert } from "react-bootstrap";
// this imports all of bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MyNav from "./MyNav";
import Home from "./Home";
import Learning from "./Learning";
import WebDev from "./WebDev";
import Misc from "./Misc";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/webdev" component={WebDev} />
          <Route path="/learning" component={Learning} />
          <Route path="/misc" component={Misc} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
