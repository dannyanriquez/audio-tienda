import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';




export const ButtonAdd = () => {

    return (
        <Button variant="dark" size="md" className="mx-1" active>
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

export const Intercambiabilidad = () => { 
        
const [input, setInput] = useState(true)


const handleInter = () => {

    setInput(false)
    
}


    return (

        <div onClick={handleInter} className="my-3">
        {
        input === true ? <ButtonAdd/> 
          
          
        : <ContinueCart/>
        } 
        </div>
    )
}

// revisar 