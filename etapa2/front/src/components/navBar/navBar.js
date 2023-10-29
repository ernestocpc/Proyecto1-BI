import Container from "react-bootstrap/Container"
import NavBar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

function Navbar() {
    return (
        <>
            <NavBar collapseOnSelect expand='lg' bg='dark' variant='dark' >
                <Container fluid>
                    <NavBar.Brand href='/' style={{ marginLeft: '1.5rem' }}><h5>Clasificador de textos</h5></NavBar.Brand>
                    <NavBar.Toggle aria-controls='responsive-navbar-nav' />
                    <NavBar.Collapse id='responsive-navbar-nav'>
                        <Nav className='ml-auto'>
                            <Nav.Link href='/about-us'>
                                <h5>Acerca de</h5>
                            </Nav.Link>
                            <Nav.Link href='/classifier'>
                                <h5>Clasificador</h5>
                            </Nav.Link>
                        </Nav>
                    </NavBar.Collapse>
                </Container>
            </NavBar>
        </>
    )
}

export default Navbar