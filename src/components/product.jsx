import { useState, useContext } from "react";
import GlobalContext from '../state/globalContext'

import "./product.css";
import QuantityPicker from "./quantityPicker";

function Product(props) {
    const [quantity, steQuantity] = useState(1);
    const globalAdd = useContext(GlobalContext).addProductToCart

    function handleQuantityChange(qty) {
        steQuantity(qty)
   }

   function handleQuantityChange(qty) {
    steQuantity(qty);
   }

   function getTotal() {
    let total = props.dataprice * quantity;
    return total.toFixed(2)
   }
   function onAdd() {
      console.log(props.data)
      let fixedProduct = {...props.data}
      fixedProduct.quantity = quantityglobalAdd(fixedProduct)
   }

    return (
        <div className="products">
            <img className="img" src={"/images/"+props.data.image} alt="Product Image" />
            <div className="product-details">
                <label className="product-name"> {props.data.title} </label>
                <label className="product-price"> {props.data.price} </label>
                <label className="Total-Price"> Total </label>
            </div>
            <QuantityPicker onChange={handleQuantityChange}/>
            <button className="btn btn-sm btn-outline-primary">Add</button>
             <span>Total: </span>
             <strong>${getTotal()}</strong>
        </div>
        </div>

        <div className="text-center mb-2">

        <button>Add</button>
    </div>

    }


export default Product;