import React, { useState, useEffect } from 'react'
import { ItemDetail } from './ItemDetail'
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../services/getFirestore'


export const ItemDetailContainer = () => {

    const {idItem} = useParams()

    const [detalleProducto, setDetalleProducto] = useState({}) //estado inicial objeto vacio
    const [loadingTwo, setLoadingTwo] = useState(true)  //se muestra un loading inicial en true

 

    useEffect(() => {

        const db = getFirestore() //llamo a la funcion de Firestore
        const dbQuery = db.collection("productos").doc(idItem).get()   //me muestra el producto IdItem seleccionado, traido desde la coleccion entera

        dbQuery
        .then(resp => setDetalleProducto( { id: resp.id, ...resp.data() }))

        
        .catch(err => console.log(err)) //capturamos todos los errores posibles que vienen desde la promesa, en este caso de productos
        .finally() 

        
        setTimeout(() => {
            setLoadingTwo(false)
        }, 1500);



        // getProductos (con un mock)
        // .then(res => setDetalleProducto(res.find(prod => prod.id === parseInt(id)))) //capturo el resultado positivo y lo seteo en el estado setProducts con un filtro por id. Devuelve array pasado anumero
        

    }, [idItem])
    

    return (
        <>
           <section className="container text-center my-5">
            <div className="row">  
            {
            
            loadingTwo ? <div  className="col-md-12"><Spinner animation="grow" />  </div> 
            :  //ternario: si loading es verdadero muestra el spinner, cuando termina de cargar muestra el ItemDetail
            <ItemDetail propproducto={detalleProducto}/>            
            }
            </div>
         </section> 
        </>
        
    )
}