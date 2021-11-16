import React, { useContext } from 'react'
import { Table, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'



export const Cart = () => { 

    const {totalCart, cartList, clear, removeItem} = useContext(CartContext)
    console.log(cartList)

    return (
        
        totalCart === 0 
        ? 
        
        <div className="containter text-center my-5">
            <h1 >CARRITO VACIO</h1>
            <h3>No hay productos seleccionados</h3>
            <Button as={Link} to="/" variant="dark" size="md" className="mx-1" active className="my-3">
            Empeza a comprar
            </Button>
        </div>
        :
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
                            <a href="https://www.mercadopago.com.ar/withdraw#from-section=home" target="_blank"><button className="btn btn-success">Finalizar compra</button></a>    
                        </td>
                            <td>${totalCart}</td>
                    </tr>
            </tbody>
            </Table>
        </>
    )
    
}
