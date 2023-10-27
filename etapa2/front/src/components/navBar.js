import Container from "react-bootstrap/Container"
import NavBar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

function Navbar() {
    return (
        <div>
            <NavBar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                <Container fluid>
                    <NavBar.Brand href='/'><h1>Analizador de textos</h1></NavBar.Brand>
                    <NavBar.Toggle aria-controls='responsive-navbar-nav'/>
                    <NavBar.Collapse id='responsive-navbar-nav'>
                        <Nav className='mx-auto'>
                            <Nav.Link href='/about-us'><h3>About us</h3></Nav.Link>
                            <Nav.Link href='/classifier'><h3>Clasificador</h3></Nav.Link>
                        </Nav>
                    </NavBar.Collapse>
                </Container>
            </NavBar>
        </div>
    )
}

export default Navbar