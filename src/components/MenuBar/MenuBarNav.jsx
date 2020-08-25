import React from "react";
import { Link } from "react-router-dom";
import "../MenuBar/menubar.min.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function MenuBar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#1b6dae" }} className="mobilenotrqd" fixed="top">
      <Navbar.Brand href="/">
        <img
          width="150"
          height="120"
          className="d-inline-block align-top"
          src={require("../Footer/LBTC-Footer-Logo-W.png")}
          alt=""
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{ backgroundColor: "#1b6dae" }}>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/about" style={{ color: "white", textAlignLast: "center", fontSize: "1.1rem", fontWeight: "700" }}>About</Nav.Link>
          <Nav.Link as={Link} to="/gallery" style={{ color: "white", textAlignLast: "center", fontSize: "1.1rem", fontWeight: "700" }}>Gallery</Nav.Link>
          <Nav.Link as={Link} to="/events" style={{ color: "white", textAlignLast: "center", fontSize: "1.1rem", fontWeight: "700" }}>Events</Nav.Link>
          <Nav.Link as={Link} to="/contact" style={{ color: "white", textAlignLast: "center", fontSize: "1.1rem", fontWeight: "700" }}>Contact</Nav.Link>
          <Nav.Link as={Link} to="/blog" style={{ color: "white", textAlignLast: "center", fontSize: "1.1rem", fontWeight: "700" }}>Blog</Nav.Link>
          <Nav.Link href="https://bengaluruveeraru.org/ourwork/index.html" style={{ color: "white", textAlignLast: "center", fontSize: "1.1rem", fontWeight: "700" }}>Covid-19</Nav.Link>
          <Nav.Link href="https://milaap.org/fundraisers/cleanathon-by-lbtc" style={{ color: "white", textAlignLast: "center", fontSize: "1.1rem", fontWeight: "700" }}>Donate</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
        </Nav>
        {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MenuBar;