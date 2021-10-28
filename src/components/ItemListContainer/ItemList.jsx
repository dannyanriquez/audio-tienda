import React, { useState,useEffect } from 'react'
import { Item } from './Item'


export const ItemList = () => {

    const [loading, setLoading] = useState(true)  //se muestra un loading inicial en true

    useEffect(() => {    //el useEffect demora 2 seg, luego setea el estado loading a falso. Se renderiza item
        setTimeout(() => {
            setLoading(false)
        }, 2000);
       
        
    },[])

    return (
        <>

        <section className="container text-center my-5">
        {
            
            loading ? <h1>Loading</h1> : <Item/>   //ternario: si loading es verdadero muestra el h1, cuando termina de cargar pasa el useEffect
        
        }
        </section>
        </>
        
    )
}
