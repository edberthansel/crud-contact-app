import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "reactstrap";
import HomeContainer from "./containers/HomeContainer";
import DetailContactContainer from "./containers/DetailContactContainer";
import CreateContactContainer from "./containers/CreateContactContainer";
import EditContactContainer from "./containers/EditContactContainer";
import NavbarComponent from "./components/NavbarComponent";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="App-body">
          <Container>
            <BrowserRouter>
              <Route path="/" exact component={HomeContainer} />
              <Route
                path="/detail/:id"
                exact
                component={DetailContactContainer}
              />
              <Route path="/create" exact component={CreateContactContainer} />
              <Route path="/edit/:id" exact component={EditContactContainer} />
            </BrowserRouter>
          </Container>
        </div>
      </div>
    );
  }
}
