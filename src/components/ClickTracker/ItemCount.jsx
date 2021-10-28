import React, { useState } from 'react'
import { Button } from 'react-bootstrap';





export function ItemCount({stock, initial, onAdd}) {
    const [contador, setContador] = useState(initial);

    const sumarContador = () => {

        contador < stock ? setContador(contador+1) : alert(`Supera el stock disponible`);

    }
    const restarContador = () => {

        contador > 1 ? setContador(contador-1) : alert (`No puedes seleccionar menos de 1 unidad`);
        

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
    
    
    
