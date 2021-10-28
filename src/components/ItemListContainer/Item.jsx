import React from 'react'
import { useState,  useEffect } from 'react'
import EonOne from "../../assets/images/EonOne/JBL-EONone-angle-04b_original.jpeg"
import { Card, Button } from 'react-bootstrap'
import { getProductos } from '../../services/getProducts'



export const Item = () => {

    const [products, setProducts] = useState([]) //creo un nuevo estado para guardar el resolve dentro de un array vacio
    

    useEffect(() => {

        getProductos
        .then(res => setProducts(res)) //capturo el resultado positivo y lo seteo en el estado setProducts
        .catch(err => console.log(err)) //capturamos todos los errores posibles que vienen desde la promesa, en este caso de productos
        .finally() //cuando termina el ciclo setea el loading a falso y muestra el map
       
    },[]) //con la dependencia el loading se carga solo al inicio
            

       

    return (                                
        <>
            <div className="container text-center my-5">
            <div className="row">

        { 
              

            products.map(prod => <div key={prod.id} className="col-md-3 my-5">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={EonOne} />
                                            <Card.Body>
                                                <Card.Title>{prod.nombre}</Card.Title>
                                                    <Card.Text>
                                                        {prod.desc}
                                                    </Card.Text>
                                                    <Button variant="dark" size="md" className="mx-1" active>
                                                        MAS INFO
                                                    </Button>
                                            </Card.Body>
                                    </Card>
                                </div>  
                        ) 
        }     

        </div>     
        </div>
 
        </>

        
                                  
    )
}
