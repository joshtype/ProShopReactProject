import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/logoPS.png';

// Header component imported by App.js
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
            <Navbar.Brand href="/">
              <img src={ logo } alt="ProShop logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/cart"><FaShoppingCart /> SEE CART </Nav.Link>
                    <Nav.Link href="/login"><FaUser /> SIGN IN </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header