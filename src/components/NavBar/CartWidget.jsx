import React, { useState } from 'react'
import { BsCart4 } from "react-icons/bs";



export const CartWidget = () => {
const [Carrito, setCarrito] = useState(0)

const AgregarCarrito = () => {
    setCarrito(Carrito + 1)
}

    return (
        <div>
            <BsCart4 className="BsCart4"/>
        </div>
    )
}
