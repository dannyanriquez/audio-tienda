import React from 'react'
import { ItemList } from './ItemList'
import { NavBar } from '../NavBar/NavBar'
import { Carrousel } from '../Carousel/Carrousel'
import { BannerWeb } from '../Parallax/BannerWeb';



export const ItemListContainer = (props) => {

    return (
        <>
        <section>

        <NavBar/>
        <Carrousel/>
        
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

            <BannerWeb/>
        </section>
        
        </>
    )
}
