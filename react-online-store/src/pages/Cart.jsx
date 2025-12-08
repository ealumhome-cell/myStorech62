import { useContext } from 'react'
import GlobaleContext from '../state/globalContext'

import './Cart.css'

function Cart() {
    const cart = useContext(GlobaleContext).cart

    function getTotalItems(){
        let sum =0;

        for(let i=0; i<cart.length; i++)
            sun = sum + cart[i].quantity;
    }

     return sum
}
    function getTotalPrice() {
        let total = 0

        for(let i=0; i<cart.length; i++)
            total += cart[i].quantity

        return total;
    }

    console.log(cart)
     
    return (
       <div>
         <h1>Are you ready to complete your purchase?</h1>

         {cart.map(product =>
            <div classNmae='border bg-white mb-4 p-4 d-flex justif-between align-items-between' key={product._id}>
                <img width={150} src={product.image} alt=""/>
                <h2>{product.name}</h2>
                <div className='badge text-bg-dark'>{product.category}</div>
                <div>Price: ${product.price}</div>
                <label>Total{product.price * product.quntity}</label>
                <label>QTY: {product.quantity}</label>
                
            </div>
        )}
        
             <h3>You have {getTotalItems()} Products in the cart. </h3>
             <h4>Total: <strong>${getTotalPrice()}</strong></h4>   

        </div>
    )
}

export default Cart