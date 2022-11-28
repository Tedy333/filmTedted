import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <div>
        <Navbar variant="dark" >
            <Container >
                <Navbar.Brand href="/" className="navTitle">NONTON BIOSKOP  </Navbar.Brand>
            <Nav>
                <Nav.Link href="#trending">TERENDING</Nav.Link>
                <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar;