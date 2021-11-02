import { UnProducto } from "../components/data/productos";


export const getUnProducto = new Promise((resolve, reject) =>{    //traigo desde stock el array de productos
    
    resolve(UnProducto)  //doy como respuesta positiva el array de productos
    
})