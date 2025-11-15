import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props) {
    function handleQuantityChange(qty){
        console.log("Quantity changed: " + qty)
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
        </div>
    );
}


export default Product;