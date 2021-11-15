import { createContext, useState } from "react";


export const CartContext = createContext() //contexto creado


export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])  //nuevo estado global, array de carrito 
    const [totalCart, setTotalCart] = useState(0) //estado global para la suma de los precios
    
   

    function AddToCart(items) { //funcion para agregar productos al carrito global con prop recibida de Itemcount donde recibo las cantidades y el array del producto seleccionado

        setTotalCart(totalCart + (items.propproducto.precio * items.cantidad)) //multiplico los precios por la cantidad traida del items

        const isInCart = cartList.find(res => res.propproducto.id === items.propproducto.id)  //pregunto si existe el producto en el cartList
       
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


    const removeItem = (IdItemRemove) => {
        setCartList(cartList.filter(data => data.propproducto.id !== IdItemRemove.propproducto.id ))
        setTotalCart(totalCart - (IdItemRemove.propproducto.precio * IdItemRemove.cantidad))
    }
   
    const clear = () => {  //seteo los nuevos estados a inicial
        setCartList([])
        setTotalCart(0)
    }

    

    return (
            <CartContext.Provider value={{  //hago un provider en return para no pasar las values en app
                cartList,
                totalCart,      //paso primero los estados y luego funciones a consumir de forma global
                AddToCart,
                clear,
                removeItem

            }}>
            {children}       
            </CartContext.Provider>
    )
}


