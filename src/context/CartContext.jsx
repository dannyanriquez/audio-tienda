import { createContext, useState } from "react";


export const CartContext = createContext () //contexto creado

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])  //nuevo estado global, carrito

    function AddToCart(items) {
        setCartList([
              ...cartList, //con spread me suma lo que ya tiene cartlist al nuevo array
                    items  //se dispara la funcion y setea el carrito con lo recopilado
        ])
    }


    const ListView = () => {
        console.log(cartList)
    }

    return (
        <div>
            <CartContext.Provider value={{  //hago un provider en return para no pasar las values en app
                cartList,      //paso estados y funciones a consumir de forma global
                ListView,
                AddToCart     
            }}>
            {children}       
            </CartContext.Provider>
        </div>
    )
}
