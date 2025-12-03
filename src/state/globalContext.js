import { createContext } from "react";

// GlobalContext defines context structure
const GlobalContext = createContext({
    cart: [], // Default cart is an empty array; will hold products later.
    user: {}, // Default user is an empty object; can store user information like name, email, age.

    addProductToCard: () => {}, // Placeholder function to add a product to the cart
    clearCart: () => {}, // Placeholder function to remove all items from the cart
    removeProcductFromCart: () => {} // Placeholder function to remove a specific item from the cart
 })

 // Export the context so it can not be used in other components
 export default GlobalContext