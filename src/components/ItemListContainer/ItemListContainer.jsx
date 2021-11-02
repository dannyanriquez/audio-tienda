import React from 'react'
import {Card} from 'react-bootstrap'
import { ItemCount } from '../ClickTracker/ItemCount'
import { ItemList } from './ItemList'

import EonOne from "../../assets/images/EonOne/JBL-EONone-angle-04b_original.jpeg"
import Lsr305 from "../../assets/images/LSR305/mkii305-angle_z_original.jpeg"
import Prx818 from "../../assets/images/PRX818XLFW/prx818xlfw_front_grille_z_original.png"
import EonOneCompact from "../../assets/images/EonOneCompact/EonOneCompact_3-4_MonitorSide_original.png"



export const ItemListContainer = (props) => {

    const handleClick = (total) => {
        alert(`la cantidad agregada es ${total}`)
      }



    return (
        <>
        <section>

        <ItemList/>


            <div className="container my-5 text-center">
                <div className="row">
                    <h1 className="col-md-12">
                        {props.title}
                    </h1>
                    <h6 className="col-md-12 my-5">
                        Representantes en Argentina de productos de Harman, Bose & Peavey,
                        Contamos con un stock constante, el beneficio de
                        comprar en cuotas y recibirlo GRATIS en tu casa, hacemos envíos a todo el país.
                    </h6>
                </div>
            </div>
            <div className="container text-center my-5">
                <div className="row">
                    <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={EonOne} />
                            <Card.Body>
                                <Card.Title>EON ONE</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <ItemCount stock={4} initial={0} onAdd={handleClick}/>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Lsr305} />
                            <Card.Body>
                                <Card.Title>LSR 305 MKII</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <ItemCount stock={2} initial={0} onAdd={handleClick}/>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Prx818} />
                            <Card.Body>
                                <Card.Title>SUB PRX818XLFW</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <ItemCount stock={5} initial={0} onAdd={handleClick}/>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={EonOneCompact} />
                            <Card.Body>
                                <Card.Title>EON ONE compact</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <ItemCount stock={4} initial={0} onAdd={handleClick}/>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}
