import React from "react";
import { Button, Alert, Nav, Navbar, NavDropdown } from "react-bootstrap";
// this imports all of bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function Menu() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Master-Tech Service</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/2.1">
                Commercial Kitchen Hood Repair
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/2.2">
                Walk In Collers Repair
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/2.3">
                Commercial Air Conditioning Repair
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Resume</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Mission</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Benevolence
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
