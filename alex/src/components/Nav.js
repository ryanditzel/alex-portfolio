import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const nav = () => {
  return (
    <Navbar fixed="top" bg="light" expand="md" variant="light">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/resume">Resume</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Media" id="basic-nav-dropdown">
              <NavDropdown.Item href="/photos">Photos</NavDropdown.Item>
              <NavDropdown.Item href="/videos">Videos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default nav;
