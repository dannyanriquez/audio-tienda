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

export const Intercambiabilidad = ({contador, onAdd}) => { 
        
const [input, setInput] = useState(true)


const handleInter = () => {

    setInput(false)
    
}


    return (

        <div onClick={handleInter} className="my-3">
        {
        input === true ? <ButtonAdd contador={contador} onAdd={onAdd}/> //le sigo pasando las props a la funcion que ejecuta 
          
          
        : <ContinueCart />
        } 
        </div>
    )
}

// revisar 