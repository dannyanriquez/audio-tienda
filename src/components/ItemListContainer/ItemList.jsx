import React, { useState,useEffect } from 'react'
import { Item } from './Item'
import { getProductos } from '../../services/getProducts'
import { useParams } from 'react-router-dom'

export const ItemList = () => {
    
    const [loading, setLoading] = useState(true)  //se muestra un loading inicial en true
    const [products, setProducts] = useState([]) //creo un nuevo estado para guardar el resolve dentro de un array vacio


    const {id} = useParams() //Filtro para mostrar una o todas las categorias dentro del mismo componente ItemListContainer
    
    
    useEffect(() => {    //el useEffect demora 2 seg, luego setea el estado loading a falso. Muestra el mapeo
        
        if (id) {  

        getProductos
        .then(res => setProducts(res.filter(prod => prod.categoria === id ))) //capturo el resultado positivo y lo seteo en el estado setProducts con un filtro por categoria. Devuelve array
        .catch(err => console.log(err)) //capturamos todos los errores posibles que vienen desde la promesa, en este caso de productos
        .finally() //cuando termina el ciclo setea el loading a falso y muestra el map   

        
        setTimeout(() => {
            setLoading(false)
        }, 2000);
            
        }else {
        
        getProductos
        .then(res => setProducts(res)) //capturo el resultado positivo y lo seteo en el estado setProducts
        .catch(err => console.log(err)) //capturamos todos los errores posibles que vienen desde la promesa, en este caso de productos
        .finally() //cuando termina el ciclo setea el loading a falso y muestra el map   

        
        setTimeout(() => {
            setLoading(false)
        }, 2000);

    }
        
    },[id])

    return (
        <>

        <section className="container text-center my-5">
                <div className="row">  
                <h2 className="col-md-12">
                        PRODUCTOS DESTACADOS
                    </h2>
                {
                    
                    loading ? <h1>Loading</h1> :  //ternario: si loading es verdadero muestra el h1, cuando termina de cargar pasa el mapeo
                    
                    products.map( (prod) => <Item key={prod.id} producto={prod}/>)           
                        
                }
                </div>
        
        </section>
        </>
        
    )
}
