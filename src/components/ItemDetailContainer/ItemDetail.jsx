import { Carousel} from 'react-bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap'
import { ItemCount } from '../ClickTracker/ItemCount'
import { useState } from 'react'


export const ItemDetail = ({propproducto}) => {

const [carrito, setCarrito] = useState(0)

const handleClick = (contador) => {
    setCarrito(contador)

}


console.log(carrito)
          
    return (
        
        <section className="container text-center my-5">
        <div className="row">  
            {
            <>
            <div>
                            <Card className="text-center">
                                <Card.Header>{propproducto.nombre} - {propproducto.descBreve}</Card.Header>
                                <Card.Body>
                                    <Carousel>
                                        <Carousel.Item interval={4000}>
                                            <img
                                            className="d-block w-100"
                                            src= {propproducto.imga}
                                            alt="First slide"
                                            />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item interval={4000}>
                                            <img
                                            className="d-block w-100"
                                            src={propproducto.imgb}
                                            alt="Second slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item interval={4000}>
                                            <img
                                            className="d-block w-100"
                                            src={propproducto.imgc}
                                            alt="Third slide"
                                            />
                                        </Carousel.Item>
                                        </Carousel>
                                    <Card.Text className="my-3">
                                    {propproducto.descLong}
                                    </Card.Text>
                                    <Card.Title>Precio ${propproducto.precio}</Card.Title>
                                </Card.Body>
                                <ItemCount stock={propproducto.stock} onAdd={handleClick}/>
                                <Card.Footer className="text-muted">2 days ago</Card.Footer>
                            </Card>
                        </div>
                 </>  
            }

        </div>
        </section>  

    )
}
