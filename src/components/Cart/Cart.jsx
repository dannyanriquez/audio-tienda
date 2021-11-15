import React, { useContext } from 'react'
import { Table, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'



export const Cart = () => { 

    const {totalCart, cartList, clear, removeItem} = useContext(CartContext)
    console.log(totalCart)

    return (
        <>
            <Table striped bordered hover variant="dark my-5 container text-center">  
            <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Categoria</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
            </thead>
            <tbody>
            { cartList.map(prod => //Mapeo el nuevo array cartlist tomando los datos de la prop original propproducto
                    <tr key={prod.propproducto.id}>
                        <td>< Card.Img style={{width:'5em'}} src={prod.propproducto.imga} rounded /></td>
                        <td>{prod.propproducto.categoria}</td>
                        <td>{prod.propproducto.nombre}</td>
                        <td>{prod.cantidad}</td>
                        <td>${prod.propproducto.precio * prod.cantidad}</td> 
                        <td><button className="btn btn-danger" onClick={() => removeItem(prod.propproducto.id)}>X</button></td>
                    </tr>
                    
                    )}
            </tbody>
            </Table>
            <Table striped bordered hover variant="dark my-5 container text-center" size="sm">  
            <thead>
                    <tr>
                       
                        <th></th>
                        <th></th>
                        <th>Total</th>
                        
                    </tr>
            </thead>
            <tbody>
           
                    <tr >
                        
                        <td><button className="btn btn-danger" onClick={() =>clear()}>Limpiar carrito</button></td>
                        <td> 
                            <a href="https://www.mercadopago.com.ar/">
                            <button className="btn btn-success">
                                Finalizar compra</button></a> </td>
                            <td>${totalCart}</td>
                    </tr>
            </tbody>
            </Table>
        </>
    )
    
}
