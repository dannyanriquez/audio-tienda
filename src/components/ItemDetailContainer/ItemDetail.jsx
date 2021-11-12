import { useContext, useState  } from 'react'
import { Carousel } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { ItemCount, ContinueCart } from '../ClickTracker/ItemCount'
import React from 'react'
import { CartContext } from '../../context/CartContext'



export const ItemDetail = ({propproducto}) => {

const [carrito, setCarrito] = useState(0)


const {AddToCart} = useContext(CartContext)


const onAdd = (contador) => {
    setCarrito(contador)
    AddToCart({propproducto,   //devuelvo un objeto con las caracteristicas que quiero mostrar en el carrito principal
        cantidad: contador, 
        nombre:propproducto.nombre,
        precio:propproducto.precio,
        categoria: propproducto.categoria,
        imagen: propproducto.imga
    }) //ejecuto la funcion que viene desde CartContext para agregar un objeto y la cantidad depende de la prop contador de ItemCount
   
}


    return (
        <>

        <section className="container text-center my-5">
                <div className="row">
                    {<>
                        <div>
                            <Card className="text-center">
                                <Card.Header>{propproducto.nombre} - {propproducto.descBreve}</Card.Header>
                                <Card.Body>
                                    <Carousel>
                                        <Carousel.Item interval={4000}>
                                            <img
                                                className="d-block w-100"
                                                src={propproducto.imga}
                                                alt="First slide" />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item interval={4000}>
                                            <img
                                                className="d-block w-100"
                                                src={propproducto.imgb}
                                                alt="Second slide" />
                                        </Carousel.Item>
                                        <Carousel.Item interval={4000}>
                                            <img
                                                className="d-block w-100"
                                                src={propproducto.imgc}
                                                alt="Third slide" />
                                        </Carousel.Item>
                                    </Carousel>
                                    <Card.Text className="my-3">
                                        {propproducto.descLong}
                                    </Card.Text>
                                    <Card.Title>Precio ${propproducto.precio}</Card.Title>
                                </Card.Body>

                                <div className="my-3">
                                    {
                                    carrito === 0 ? <ItemCount stock={propproducto.stock} onAdd={onAdd}/> //si carrito es igual a 0, muestra itemcount, cualquier valor superior cierra la compra 
                                    :
                                    <ContinueCart/>
                                    }
                                    </div>


                                <Card.Footer className="text-muted">2 days ago</Card.Footer>
                            </Card>
                        </div>
                    </>}

                </div>
            </section></>

    )
}
