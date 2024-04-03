import react from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavLink from "react-bootstrap/esm/NavLink";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";



const MyNavBar = ({handleSignOut, user}) => {

     
  return (
    <Navbar bg="info" expand="lg" className="bg-info">
    <Container>
      <Navbar.Brand href="#home">Welcome</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Form inline>
            <Form.Control
              type="text"
              placeholder='gitikakalita16@gmail.com'
              aria-label="Disabled input example"
              disabled
              readOnly
            />
          </Form>
        </Nav>
        <Nav className="ml-auto">
          <Button className="btn btn-danger" onClick={handleSignOut}>LogOut</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default MyNavBar;