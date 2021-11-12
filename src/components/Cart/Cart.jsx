import React, { useContext } from 'react'
import { Table, Card } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'



export const Cart = () => { 

    const {cartList} = useContext(CartContext)
    console.log(cartList)


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
                        
                    </tr>
            </thead>
            <tbody>
            { cartList.map(prod => //Mapeo solo el cuerpo TBODY, los titulos principales quedan iguales
                    <tr>
                        <td><Card.Img style={{width:'6em'}} src={prod.imagen} rounded /></td>
                        <td>{prod.categoria}</td>
                        <td>{prod.nombre}</td>
                        <td>{prod.cantidad}</td>
                        <td>${prod.precio*prod.cantidad}</td> 
                    </tr>
                    
                    )}
            </tbody>
            </Table>
        </>
    )
    
}
