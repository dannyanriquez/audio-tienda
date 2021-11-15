import { createContext, useState } from "react";


export const CartContext = createContext() //contexto creado


export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])  //nuevo estado global, array de carrito 
    const [totalCart, setTotalCart] = useState(0)
    
   

    function AddToCart(items) { //funcion para agregar productos al carrito global con prop recibida de Itemcount donde recibo las cantidades y el array del producto seleccionado

        setTotalCart(totalCart + (items.propproducto.precio * items.cantidad))

        const isInCart = cartList.find(res => res.propproducto.id === items.propproducto.id)
       
        if(isInCart){
            isInCart.cantidad = isInCart.cantidad + items.cantidad
            setCartList(cartList)
        }else {
            setCartList([
                ...cartList, //con spread me suma lo que ya tiene cartlist al nuevo array
                items,  //se dispara la funcion que viene desde ItemDetail y setea el carrito con lo recopilado en la prop item
                ])
        }
    }

   
    const clear = () => {
        setCartList([])
    }

    

    return (
            <CartContext.Provider value={{  //hago un provider en return para no pasar las values en app
                cartList,
                totalCart,      //paso primero los estados y luego funciones a consumir de forma global
                AddToCart,
                

            }}>
            {children}       
            </CartContext.Provider>
    )
}


