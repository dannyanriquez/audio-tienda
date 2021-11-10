import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Intercambiabilidad } from '../Cart/Intercambiabilidad';






export function ItemCount({stock,onAdd}) {   //las props vienen de item Detail, la traigo desde stock de productos

    const [contador, setContador] = useState(0);  // el valor inicial lo dejo en 0, no lo traigo mas por prop ya que la compra inicial comienza en cero
  

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
                    
                    { <Intercambiabilidad contador={contador} onAdd={onAdd}/>}
                      
                
                </div>
                <p className=" my-3"> Cantidad: {contador}</p>
            </div>
        </div>
    )
}
    
    
    
