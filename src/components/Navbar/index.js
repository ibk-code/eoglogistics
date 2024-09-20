import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <React.Fragment>
      {/* <Container> */}
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/">
          <img
            src="./asset/img/logo.jpeg"
            className="logo"
            alt="Eoglogistics logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* </Container> */}
    </React.Fragment>
  );
}

export default Navigation;
