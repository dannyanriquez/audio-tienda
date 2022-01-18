import { useContext, useState  } from 'react'
import { Carousel } from 'react-bootstrap'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ItemCount, ContinueCart } from '../ClickTracker/ItemCount'
import React from 'react'
import { CartContext } from '../../context/CartContext'




export const ItemDetail = ({propproducto}) => {

const [carrito, setCarrito] = useState(0)

const {AddToCart} = useContext(CartContext) //uso el contexto Cartcontext y traigo la funcion AddToCart

const onAdd = (contador) => {
    setCarrito(contador)
    AddToCart({   // disparo la funcion y devuelvo un objeto con las caracteristicas que quiero mostrar en el carrito principal
        propproducto, 
        cantidad: contador
    }) //devuelve un objeto con las nuevas claves y sus valores los capturo de la prop propproducto. La cantidad depende de la prop contador de ItemCount
   
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
                                        <Carousel.Item interval={2000}>
                                            <img
                                                className="d-block w-100"
                                                src={propproducto.imga}
                                                alt="First slide" />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item interval={2000}>
                                            <img
                                                className="d-block w-100"
                                                src={propproducto.imgb}
                                                alt="Second slide" />
                                        </Carousel.Item>
                                        <Carousel.Item interval={2000}>
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
                                    <ContinueCart stock={propproducto.stock} onAdd={onAdd}/>
                                    }
                                    </div>


                                <Card.Footer><Button as={Link} to="/" variant="dark" size="md" className="mx-1" active>
                             inicio
                            </Button></Card.Footer>
                            </Card>
                        </div>
                        <div></div>
                    </>}

                </div>
            </section></>

    )
}
