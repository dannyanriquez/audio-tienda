import React from 'react'
import {Card, Button} from 'react-bootstrap'



export const Cards = () => {
    return (
        <section>
            <div className="container my-5">
                <div className="row">
                <h1 className="col-md-12">
                    SOMOS UNA TIENDA 100% ONLINE. 
                    TE OFRECEMOS VARIEDAD Y CALIDAD ACORDE PARA LOS 
                    USUARIOS MÁS EXIGENTES
                </h1>
                <h6 className="col-md-12 my-5">
                    Representantes en Argentina de productos de Harman, Bose & Peavey, 
                    Contamos con un stock constante, el beneficio de 
                    comprar en cuotas y recibirlo GRATIS en tu casa, hacemos envíos a todo el país.
                </h6>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./images/EonOneCompact/JBL_EonOneCompact_withTablet_original.png"/>
                            <Card.Body>
                                <Card.Title>EON ONE compact</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="dark">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./images/LSR305/mkii305-angle_z_original.jpeg"/>
                            <Card.Body>
                                <Card.Title>LSR 305 MKII</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="dark">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./images/PRX818XLFW/prx818xlfw_front_grille_z_original.png"/>
                            <Card.Body>
                                <Card.Title>SUB PRX818XLFW</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="dark">Comprar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
