import React, { useState, useEffect } from 'react'
import { ItemDetail } from './ItemDetail'
import { getProductos } from '../../services/getProducts'
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router-dom'


export const ItemDetailContainer = () => {

    const {idItem} = useParams()

    const [detalleProducto, setDetalleProducto] = useState({}) //estado inicial objeto vacio
    const [loadingTwo, setLoadingTwo] = useState(true)  //se muestra un loading inicial en true

    useEffect(() => {
        getProductos
        .then(res => setDetalleProducto(res.find(prod => prod.id === parseInt(idItem)))) //capturo el resultado positivo y lo seteo en el estado setProducts con un filtro por categoria. Devuelve array pasado anumero
        .catch(err => console.log(err)) //capturamos todos los errores posibles que vienen desde la promesa, en este caso de productos
        .finally() //cuando termina el ciclo setea el loading a falso y muestra el map   

        
        setTimeout(() => {
            setLoadingTwo(false)
        }, 3000);

    }, [idItem])
    

    return (
        <>
           <section className="container text-center my-5">
            <div className="row">  
            {
            
            loadingTwo ? <div  className="col-md-12">
                                 <Spinner animation="grow" /> 
                         </div>   
            
            
            
            :  //ternario: si loading es verdadero muestra el h1, cuando termina de cargar pasa el mapeo
            
            <ItemDetail propproducto={detalleProducto}/>         
                
            }
            </div>
         </section> 
        </>
        
    )
}