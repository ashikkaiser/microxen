import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./page/index";
import Service from "./page/service";
import About from "./page/about";
import Contact from "./page/contact";
import WebDevelopment from "./page/services/WebDevelopment";

class Markup extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/service" exact component={Service} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/web-development" exact component={WebDevelopment} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Markup;
