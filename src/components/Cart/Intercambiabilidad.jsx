import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';




export const ButtonAdd = ({contador, onAdd}) => { //esta funcion ejecuta el seteo del nuevo carrito

    return (
        <Button variant="dark" size="md" className="mx-1" active
        onClick={() => {
            onAdd(contador)
        }}>
            comprar                   
        </Button>
        )    
    }

export const ContinueCart = () => {

    return (
        <Button as={Link} to={`/Cart`} variant="dark" size="md" className="mx-1" active>
            Terminar Compra
        </Button>
        )
    }



