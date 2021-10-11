import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { CartWidget } from './CartWidget'
import "./Navbar.scss"




export const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                  <Navbar.Brand href="#home">AudioTienda</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Productos</Nav.Link>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                    </Nav>

                    <CartWidget/>

                </Container>
            </Navbar>
        </div>
    )
}
