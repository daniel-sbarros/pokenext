import Image from 'next/image';
import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <Image src="/images/pokeball.png" width="30" height="30" alt="Logo PokeNext" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">Sobre nós</Nav.Link>
                            <Nav.Link href="/contacts">Contatos</Nav.Link>
                            {/* <NavDropdown title="Produtos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/products/pants/bluepants">
                                    Calsa Azul
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/products/pants/redpants">
                                    Calsa Vermelha
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}