import React, { useState } from 'react'
import { Button } from 'react-bootstrap';





export function ItemCount({stock, initial, onAdd}) {   //las props vienen de item Detail

    const [contador, setContador] = useState(initial);  //seteo un nuevo estado de contador, el valor initial viene del itemDetail en 0

    const sumarContador = () => {  //funcion agregar cantidad al producto

        contador < stock ? setContador(contador+1) : alert(`Supera el stock disponible`); //si contador es menor al stock declarado por prop, entonces setea el estado. Caso contrario alert

    }
    const restarContador = () => {  //funcion restar cantidad

        contador > 1 ? setContador(contador-1) : alert (`No puedes seleccionar menos de 1 unidad`); //si el estado contador es mayor a 1 se resta, caso contrario alert
        

    };


    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-md-12">
                    <Button variant="dark" size="md" className="mx-1" active onClick={sumarContador}>
                        +
                    </Button>
                    <Button variant="dark" size="md" className="mx-1" active onClick={restarContador}>
                        -
                    </Button>
                    <Button variant="dark" size="md" className="mx-1" active onClick={() => {
                        return onAdd(contador);
                    }}>
                    comprar                    
                    </Button>
                </div>
                <p className=" my-3"> Cantidad: {contador}</p>
            </div>
        </div>
    )
}
    
    
    
