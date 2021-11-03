import React from 'react'

import { ItemList } from './ItemList'
import { Carrousel } from '../Carousel/Carrousel'
import { BannerWeb } from '../Parallax/BannerWeb';


export const ItemListContainer = () => {

    return (
    
        <section>
        <Carrousel/>
        
            <div className="container my-5 text-center">
                <div className="row">
                    <h1 className="col-md-12">
                        SOMOS UNA TIENDA 100% ONLINE. TE OFRECEMOS VARIEDAD Y CALIDAD ACORDE PARA LOS USUARIOS MÁS EXIGENTES
                    </h1>
                    <h6 className="col-md-12 my-5">
                        Representantes en Argentina de productos de Harman, Bose & Peavey,
                        Contamos con un stock constante, el beneficio de
                        comprar en cuotas y recibirlo GRATIS en tu casa, hacemos envíos a todo el país.
                    </h6>
                </div>
            </div>

            <ItemList/>
            <BannerWeb/>
        </section>
    )
}
