import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

function NavbarLayout() {
  return (
    <Navbar bg="danger" expand="lg">
      <Container>
        <Navbar.Brand className="navbar-brand text-white">Resource Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link text-white">Home</Link>
            <NavDropdown
              title={
                <span className="text-white my-auto">Department</span>
              }
              id="basic-nav-dropdown">
              <NavDropdown.Item > <Link className="nav-link text-black" to="Development">Development</Link></NavDropdown.Item >
              <NavDropdown.Item > <Link className="nav-link text-black" to="Designing"> Designing</Link></NavDropdown.Item >
              <NavDropdown.Item><Link className="nav-link text-black" to="Contentteam"> Content Team</Link></NavDropdown.Item >
              <NavDropdown.Item > <Link className="nav-link text-black" to="Digitalteam">Digitalteam</Link></NavDropdown.Item >
              <NavDropdown.Item > <Link className="nav-link text-black" to="Contractors">Contractors</Link></NavDropdown.Item >
              <NavDropdown.Item><Link className="nav-link text-black" to="QATeam">QA Team</Link></NavDropdown.Item >
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLayout;