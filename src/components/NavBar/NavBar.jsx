import React, { useContext } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { BsCart4 } from "react-icons/bs";
import { CartContext } from '../../context/CartContext';






export const NavBar = () => {

    const {cantParcial} = useContext(CartContext)

    return (
        <div>
        
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">AudioTienda</Navbar.Brand>
                   
                    <Nav className="me-center">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>   
                            <Nav.Link as={Link} to="/categoria/audio">Audio Pro</Nav.Link>
                            <Nav.Link as={Link} to="/categoria/homestudio">Home Studio</Nav.Link>
                            { cantParcial === 0 ? <h1></h1> :
                                <Nav.Link as={Link} to="/Cart"><BsCart4/> {cantParcial} </Nav.Link>
                            }
                            
                    </Nav>
                      
                </Container>
            </Navbar>
         
        </div>
    )
}


//react-bootstrap proporciona un accesorio "AS" de renderizado en la mayoría de sus 
//componentes para especificar qué componente o elemento desea renderizar si no quiere el predeterminado