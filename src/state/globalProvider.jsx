import { useState } from 'react'
import GlobalContext from './globalContext'

// GlobalProvider provides real state and logic
function GlobalProvider(props){
   const [cart, setCart] = useState([]) // Creates a state varible for the cart
   const [user, setUser] = useState({id: 62, name: "Ashton"}) // Creates a state of varible for the user

   function addProductToCart(prod){
    let copy = [...cart] // Creates a copy of the current cart
    copy.push(prod) // Add the new product to the copy
    setCart(copy) // Update the cart state with the new copy
   }

   function clearCart(){
    setCart([])
   }

   function removeProductFromCart(){
    const updatedCart = cart.filter(item => item.id !==ProductId)
    setCart(updatedCart)
   }

   return(
    <GlobalContext.Provider value={{
        cart: cart,
        user: user,
        addProductToCart: addProductToCart,
        clearCart: clearCart,
        removeProductFromCart: removeProductFromCart

    }}>
        {props.children}
    </GlobalContext.Provider>
   )
}

export default GlobalProvider