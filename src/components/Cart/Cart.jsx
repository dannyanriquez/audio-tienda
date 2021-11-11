import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'



export const Cart = () => { 

    const {cartList} = useContext(CartContext)



    return (
        <>
        <Table striped bordered hover variant="dark my-5 container">
            <thead>
                    <tr>
                    <th>#</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                    </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td> 
                    </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>  
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
            </Table>
</>


    )
    
}
