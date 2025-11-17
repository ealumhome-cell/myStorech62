import Product from "../components/product";
import "./catalog.css";
import { useEffect, useState } from "react";
import DataService from '../sevices/dataServices'

function Catalog() {

    const [products,setProducts]=useState([]);
    const [categories, setCategories] = useState([]) //Hold catergories list
    const [prodsToDisplay, setProdsToDisplay] = useState([]) //Hold products to show

    useEffect(() => {
        //Load your data
        console.log("Component loaded")
        loadCatalog()
    },[]) //The empty array [] menas this effect runs only ONCE

    function loadCatalog(){       
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data);
        setProdsToDisplay(data) // initially, display all products

        let cats = ["Beer", "Fruit", "Vegetable", "Dairy & Eggs", "Beverages"]
        setCategories(cats)
    }

    function filter(category){
        let list = []
        products.forEach(prod => {
            if(prod.category === category){
                list.push(prod)
                }
        })

        setProductsToDisplay(list)
    }
    
    function clearFilter(){
        setProdsToDisplay()
    }

    return (
        <div className="catalog">
            <h1>Check our {products.length} amazing products</h1>

            <div className="filters">
                <button onClick={clearFilter} className='btn btn-dark btn-filter'> All </button>
            </div>

            {categories.map(cat => <button key={cat} onClick={()=> filter(cat)}
             className='btn btn-primary btn-filter'>Filter </button>
            )}

            <div className="product-list">
               {products.map(prod => <Product key={prod._id} data={prod} /> )}
            </div>  
        </div>     
    );
}

export default Catalog;