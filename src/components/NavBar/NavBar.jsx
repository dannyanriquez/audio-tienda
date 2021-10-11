import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'



export const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                  <Navbar.Brand href="#home">AudioTienda</Navbar.Brand>
                    <Nav className="me-left">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Productos</Nav.Link>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
