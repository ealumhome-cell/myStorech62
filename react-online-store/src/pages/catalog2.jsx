import Product from "../components/product";
import "./catalog.css";
import { useEffect, useState } from "react";
import DataService from '../sevices/dataServices'

function Catalog() {

    const [products,setProducts]=useState([]);

    useEffect(()=>{
        //load your data
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data);
    },[]);//the empty array [] means this effect runs only once

    return (
        <div className="catalog">
            <h1>Check our {products.length} amazing products</h1>
            {products.map(prod => <Product key={prod._id} data={prod} /> )}
             {/* <div id="example" ></div>  */}
        </div>       

    );
}

export default Catalog;