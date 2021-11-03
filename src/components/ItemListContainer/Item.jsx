import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'



export const Item = ({producto}) => {
    
    
    return (                                
        <>
            {
                <div className="col-md-3 my-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={producto.imga} />
                        <Card.Body>
                            <Card.Title>{producto.nombre}</Card.Title>
                                <Card.Text>
                                    {producto.descBreve}
                                </Card.Text>
                                <Button as={Link} to={`/details/ ${producto.id}`} variant="dark" size="md" className="mx-1" active>
                                    Ver Mas
                                </Button>
                        </Card.Body>
                </Card>
            </div>  
            }
        </>

        
                                  
    )
}
