import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import { BsCart4 } from "react-icons/bs";





export const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">AudioTienda</Navbar.Brand>
                    <Nav className="me-center">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>   
                            <Nav.Link as={Link} to="/Audio">Audio</Nav.Link>
                            <Nav.Link as={Link} to="/homeStudio">Home Studio</Nav.Link>
                            <Nav.Link as={Link} to="/Cart"><BsCart4/></Nav.Link> 
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}


//react-bootstrap proporciona un accesorio "AS" de renderizado en la mayoría de sus 
//componentes para especificar qué componente o elemento desea renderizar si no quiere el predeterminado