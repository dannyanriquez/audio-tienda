import { Carousel, Button} from 'react-bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap'
import { ItemCount } from '../ClickTracker/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const ContinueCart = ({handleInter}) => {

    return (
        <Button as={Link} to={`/Cart`} variant="dark" size="md" className="mx-1" active>
            Terminar Compra
        </Button>
        )
    }

export const ItemDetail = ({propproducto}) => {

const [carrito, setCarrito] = useState(0)

const onAdd = (contador) => {
    setCarrito(contador)
}



console.log(carrito) //estado del carrito

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
