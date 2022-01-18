import React, { useState,useEffect, memo } from 'react'
import { Item } from './Item'
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../services/getFirestore'

export const ItemList = memo (() => {  //envolviendo con memo el componente logro que si hago cambios en el compomponente padre rl listado de productos no vuelvan a renderizar
    
    const [loading, setLoading] = useState(true)  //se muestra un loading inicial en true
    const [products, setProducts] = useState([]) //creo un nuevo estado para guardar el resolve dentro de un array vacio


    const {idCategoria} = useParams() //Filtro para mostrar una o todas las categorias dentro del mismo componente ItemListContainer
    
    
    useEffect(() => {   

    const db = getFirestore() //llamo a la funcion de Firestore
    const dbQuery = db.collection("productos").where("categoria", "==", "audiopro").get()  //llamo a la coleccion de la database de Firestore, con get trae todo lo de la coleccion

    dbQuery
    .then(resp => setProducts(resp.docs.map(prod => ( { id: prod.id, ...prod.data()} ))))  //Seteo todos los productos que vienen de Firestore iterando en un array
            
    
    .catch(err => console.log(err)) //capturamos todos los errores posibles que vienen desde la promesa, en este caso de productos
    
    .finally() //cuando termina el ciclo setea el loading a falso y muestra el map   


            setTimeout(() => {
                setLoading(false)
            }, 1500);



    // getProductos
    //     .then(res => { 
    //         if(idCategoria){ //si getproductos recibe un parametro desde id categoria hace el filtro
    //             setProducts(res.filter(prod => prod.categoria === idCategoria)) //capturo el resultado positivo y lo seteo en el estado setProducts con un filtro por categoria. Devuelve array
            
            
    //         } else {
    //             setProducts(res) //capturo el resultado positivo y lo seteo en el estado setProducts
    //         }
    //     })
        
        
    },[idCategoria])

    

    return (
        <>

        <section className="container text-center my-5">
                <div className="row">  
                
                {
                    
                    loading ? <div  className="col-md-12">
                                    <Spinner animation="grow" /> 
                             </div>       
                                
                        :  //ternario: si loading es verdadero muestra el h1, cuando termina de cargar pasa el mapeo
                    
                    products.map((prod) => {
                        return <Item key={prod.id} producto={prod} />
                    })           
                        
                }
                </div>
        
        </section>
        </>
        
    )
})



        
            