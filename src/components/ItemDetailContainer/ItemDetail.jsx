import { Carousel} from 'react-bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap'
import { ItemCount } from '../ClickTracker/ItemCount'


export const ItemDetail = ({DetailProducto}) => {

    const handleClick = (total) => {   //funcion para agregar cantidades al carrito
        alert(`la cantidad agregada es ${total}`)
      }
          
    return (
        
        <section className="container text-center my-5">
        <div className="row">  
            {
            <>
            <div>
                            <Card className="text-center">
                                <Card.Header>{DetailProducto.nombre} - {DetailProducto.descBreve}</Card.Header>
                                <Card.Body>
                                    <Carousel>
                                        <Carousel.Item interval={4000}>
                                            <img
                                            className="d-block w-100"
                                            src= {DetailProducto.imga}
                                            alt="First slide"
                                            />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item interval={4000}>
                                            <img
                                            className="d-block w-100"
                                            src={DetailProducto.imgb}
                                            alt="Second slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item interval={4000}>
                                            <img
                                            className="d-block w-100"
                                            src={DetailProducto.imgc}
                                            alt="Third slide"
                                            />
                                        </Carousel.Item>
                                        </Carousel>
                                    <Card.Text className="my-3">
                                    {DetailProducto.descLong}
                                    </Card.Text>
                                    <Card.Title>Precio ${DetailProducto.precio}</Card.Title>
                                </Card.Body>
                                <ItemCount stock={4} initial={0} onAdd={handleClick}/>
                                <Card.Footer className="text-muted">2 days ago</Card.Footer>
                            </Card>
                        </div>
                 </>  
            }

        </div>
        </section>  

    )
}
