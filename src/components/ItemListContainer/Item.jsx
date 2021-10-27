import React from 'react'
import { productos } from '../data/productos'



const getFech = new Promise((resolve, reject) =>{
    resolve(productos)

    
})

export const Item = (productos) => {

        getFech
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err)) //capturamos todos los errores posibles que vienen desde la promesa

    return (
        

        
        <div>
            
        </div>
       
    )
}
