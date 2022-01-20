import React, { useContext, useState } from 'react'
import { Table, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import firebase from "firebase"
import 'firebase/firestore'

import {getFirestore} from "../../services/getFirestore"

export const Cart = () => { 

    const [formData, setFormData] = useState({  //hardcodeo un estado tipo formulario con los datos del coprador 
        name : 'comprador',
        phone: '12344567',
        email: 'prueba@gmail.com',
    })

    const {totalCart, cartList, clear, removeItem} = useContext(CartContext)  //traigo los context a utilizar en el carrito
    
    

    const generarOrden = (e) => {    //creo la funcion para generar la orden de compra, tomando los datos de los context como los productos, el total, etc.
       

        let orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date());
        orden.buyer = {name: "Daniel", phone: "12245723423", email: "prueba@gmail.com"};
        orden.totalPedido = totalCart; 
        orden.items = cartList.map(prod => {
            const id = prod.propproducto.id;
            const nombre = prod.propproducto.nombre
            const subTotal = prod.propproducto.precio * prod.cantidad
            const cantidad = prod.cantidad
        
        return {id, nombre, cantidad, subTotal}
        })


        const dbQuery = getFirestore()
        dbQuery.collection('orders').add(orden)
        .then(resp => console.log(resp))
    }

    


    return ( 
        
        totalCart === 0 
        ? 
        
        <div className="containter text-center my-5">
            <h1 >CARRITO VACIO</h1>
            <h3>No hay productos seleccionados</h3>
            <Button as={Link} to="/" variant="dark" size="md" className="mx-1 my-3" active>
            Empeza a comprar
            </Button>
        </div>
        :
        <>
            <Table striped bordered hover variant="dark my-5 container text-center">  
            <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Marca</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
            </thead>
            <tbody>
            { cartList.map(prod => //Mapeo el nuevo array cartlist tomando los datos de la prop original propproducto
                    <tr key={prod.propproducto.id}>
                        <td>< Card.Img style={{width:'5em'}} src={prod.propproducto.imga}/></td>
                        <td>{prod.propproducto.brand}</td>
                        <td>{prod.propproducto.nombre}</td>
                        <td>{prod.cantidad}</td>
                        <td>${prod.propproducto.precio * prod.cantidad}</td> 
                        <td><button className="btn btn-danger" onClick={() => removeItem(prod)}>X</button></td>
                    </tr>
                    
                    )}
            </tbody>
            </Table>
            <Table striped bordered hover variant="dark my-5 container text-center" size="sm">  
            <thead>
                    <tr>
                       
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>Total</th>
                        
                    </tr>
            </thead>
            <tbody>
           
                    <tr >
                        
                        <td>
                            <Button className="btn btn-danger" onClick={() =>clear()}>Limpiar carrito</Button>
                        </td>
                        <td>
                            <Button as={Link} to="/" variant="dark" size="md" className="mx-1" active>
                             Seguir comprando
                            </Button>
                        </td>
                        <td> 
                            <button className="btn btn-success" onClick={() => generarOrden()}>Finalizar compra</button>    
                        </td>
                            <td>${totalCart}</td>
                    </tr>
            </tbody>
            </Table>

            

        </>
    )
    
}
