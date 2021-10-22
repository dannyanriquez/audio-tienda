import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';




export function ItemCount() {
    const [contador, setContador] = useState(0);

    const aumentarContador = () => {
        setContador(contador + 1);
    };
    const restarContador = () => {
        setContador(contador - 1);
    };
    const resetContador = () => {
        setContador(0);
    };
    
    useEffect (function () {

            if (contador >= 0)
                ;
            else
                // eslint-disable-next-line no-unused-expressions
                (setContador(0), alert`NO SE CONTABILIZAN NUMEROS NEGATIVOS`)
           
        },[contador]);

    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-md-12 my-3">CONTADOR</div>
                <div className="col-md-12">
                    <Button variant="primary" size="md" className="mx-1" active onClick={aumentarContador}>
                        Sumar
                    </Button>
                    <Button variant="primary" size="md" className="mx-1" active onClick={restarContador}>
                        Restar
                    </Button>
                    <Button variant="primary" size="md" className="mx-1" active onClick={resetContador}>
                        Reset
                    </Button>
                </div>
                <p className=" my-3"> resultado: {contador}</p>
            </div>
        </div>
    )
}
    
    
    
    
