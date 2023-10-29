import Container from "react-bootstrap/Container";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navBar.css";

function Navbar() {
  return (
    <>
      <NavBar
        collapseOnSelect
        expand="lg"
        className="custom-navbar-color"
        variant="dark"
      >
        <Container fluid>
          <NavBar.Brand href="/" style={{ marginLeft: "1.5rem" }}>
            <h1>Analizador de textos</h1>
          </NavBar.Brand>
          <NavBar.Toggle aria-controls="responsive-navbar-nav" />
          <NavBar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/about-us">
                <h3>About us</h3>
              </Nav.Link>
              <Nav.Link href="/classifier">
                <h3>Clasificador</h3>
              </Nav.Link>
            </Nav>
          </NavBar.Collapse>
        </Container>
      </NavBar>
    </>
  );
}

export default Navbar;
