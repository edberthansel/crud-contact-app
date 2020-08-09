import React from "react";
import {
  Navbar,
  NavbarBrand,
  Container,
} from "reactstrap";
import "../App.css";

const NavbarComponent = (props) => {
  return (
    <div>
      <Navbar style={{backgroundColor: '#19D9FD'}} expand="md">
        <Container>
          <NavbarBrand style={{color: 'black'}} href="/">Jenius Contact App</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
