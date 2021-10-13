import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar className="navBar">
  <Container>
    <Navbar.Brand href="#home">Natural Store</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Nosotros</Nav.Link>
        <NavDropdown title="Shop" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Frutas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Ensaladas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Licuados</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavBar
