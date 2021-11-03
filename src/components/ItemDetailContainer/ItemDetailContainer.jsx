import React, { useState, useEffect } from 'react'
import { ItemDetail } from './ItemDetail'
import { getProductos } from '../../services/getProducts'
import { useParams } from 'react-router-dom'




export const ItemDetailContainer = () => {

    const {id} = useParams()

    const [detailProduct, setDetailProduct] = useState({}) //estado inicial objeto vacio
    const [loadingTwo, setLoadingTwo] = useState(true)  //se muestra un loading inicial en true

    useEffect(() => {
        getProductos
        .then(res => setDetailProduct(res.find(prod => prod.id === parseInt(id)))) //capturo el resultado positivo y lo seteo en el estado setProducts con un filtro por categoria. Devuelve array pasado anumero
        .catch(err => console.log(err)) //capturamos todos los errores posibles que vienen desde la promesa, en este caso de productos
        .finally() //cuando termina el ciclo setea el loading a falso y muestra el map   


        
        setTimeout(() => {
            setLoadingTwo(false)
        }, 2000);

    }, [id])
    

    console.log(typeof id)

    return (
        <>
           <section className="container text-center my-5">
            <div className="row">  
            {
            
            loadingTwo ? <h1>Loading</h1> :  //ternario: si loading es verdadero muestra el h1, cuando termina de cargar pasa el mapeo
            
            <ItemDetail DetailProducto={detailProduct}/>         
                
            }
            </div>
         </section> 
        </>
        
    )
}