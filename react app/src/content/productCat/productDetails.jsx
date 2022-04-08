import productsCRUD from './dataModel'
import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
function ProductDetails() {
    const [product, setProduct] = useState({})
    let params = useParams();
    useEffect(() => {
            productsCRUD.getProductById(params.id)
            .then((res) => res.json())
            .then(data => setProduct(data))
    },[])
    return (
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                <img src={product.img} class="img-fluid rounded-start" alt={product.name}/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                        <h5 class="card-title">{product.name}</h5>
                        <p class="card-text">{product.price}$</p>
                        <p class="card-text">{product.details}</p>
                        <p class="card-text"><small class="text-muted">{product.quantity} items in stock</small></p>
                        <a href="#" class="btn btn-primary"><i class="fa-solid h4 text-white fa-cart-shopping"></i> Add to cart</a>
                        <div class="input-group mt-3 col-2">
                            <span class="input-group-text" id="inputGroup-sizing-default">Qty:</span>
                            <input type="number" class="form-control" max={product.quantity} min={1} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetails