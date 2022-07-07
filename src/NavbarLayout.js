import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

function NavbarLayout() {

  return (
    <>
      <h4 className='m-3 p-2'>Resource Manager</h4>
      <Navbar bg="success" expand="lg" className='m-1 p-1'>
        <Container>
          <NavDropdown
            title={
              <span className="text-white my-auto">Lookup</span>
            } id="basic-nav-dropdown">
              <NavDropdown.Item > <Link className="nav-link text-black" to="user">User</Link></NavDropdown.Item >
            <NavDropdown.Item > <Link className="nav-link text-black" to="Pc"> Project Cordinator</Link></NavDropdown.Item >
            <NavDropdown.Item><Link className="nav-link text-black" to="pm">Project Manager</Link></NavDropdown.Item >
            <NavDropdown.Item > <Link className="nav-link text-black" to="Project">Project Name</Link></NavDropdown.Item >

          </NavDropdown>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav >
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
    </>

  );
}

export default NavbarLayout;