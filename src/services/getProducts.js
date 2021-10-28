import { productos } from "../components/data/productos";


export const getProductos = new Promise((resolve, reject) =>{    //traigo desde stock el array de productos
    
    resolve(productos)  //doy como respuesta positiva el array de productos
    
})