import React from 'react';
import {Nav,NavDropdown,Form,Button,FormControl}from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'

const PredictionNavbar=()=>{
    return(
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Dress </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Shop</Nav.Link>
            <NavDropdown title="Take A Tour" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">New to market</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Most Loved</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar> 
    )
};export default PredictionNavbar;