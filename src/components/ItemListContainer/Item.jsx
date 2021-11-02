import React from 'react'
import { Card, Button } from 'react-bootstrap'



export const Item = ({producto}) => {
    
    
    return (                                
        <>
            {
                <div key={producto.id} className="col-md-3 my-5">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={producto.img} />
                        <Card.Body>
                            <Card.Title>{producto.nombre}</Card.Title>
                                <Card.Text>
                                    {producto.desc}
                                </Card.Text>
                                <Button variant="dark" size="md" className="mx-1" active>
                                    MAS INFO
                                </Button>
                        </Card.Body>
                </Card>
            </div>  
            }
        </>

        
                                  
    )
}
