import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

export function ItemCount(props) {
    const [contador, setContador] = useState(0);

    const aumentarContador = () => {
        // eslint-disable-next-line eqeqeq
        if (contador == props.stock )
            alert `Supera stock`;
            else setContador(contador + 1)
        
        ;
    };
    const restarContador = () => {

        // eslint-disable-next-line eqeqeq
        if (contador == 0 )
        alert `Numero negativo`;
        else setContador(contador - 1);

    };


    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-md-12 my-3">CONTADOR</div>
                <div className="col-md-12">
                    <Button variant="dark" size="md" className="mx-1" active onClick={aumentarContador}>
                        Sumar
                    </Button>
                    <Button variant="dark" size="md" className="mx-1" active onClick={restarContador}>
                        Restar
                    </Button>
                </div>
                <p className=" my-3"> resultado: {contador}</p>
            </div>
        </div>
    )
}
    
    
    
    
