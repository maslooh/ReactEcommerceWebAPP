import categoriesCRUD from '../categories/dataModel'
import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import {  Modal,Button,CloseButton } from 'react-bootstrap';
function ProductList() {
    const [list, setList] = useState([])
    let params = useParams();
    useEffect(() => {
            categoriesCRUD.getCategoryProducts(params.id)
            .then((res) => res.json())
            .then(data => setList(data.products))
    },[])
    return (
        <div class="row row-cols-1 row-cols-md-4 g-4">
                {list.map(item => {
                    return (
                        <div class="col">
                            <Link class="card h-100 text-dark overflow-hidden" to={`/products/${item.id}`}>
                            {/* <div id='close' className="position-absolute p-2">
                                <CloseButton className="position-relative p-2 CloseButton" />
                            </div> */}
                                <img src={item.img} class="card-img-top h-100" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{item.name}</h5>
                                        <p class="card-text">{item.price}$</p>
                                        <p class="card-text"><small class="text-muted">{item.quantity} items in stock</small></p>
                                    </div>
                            </Link>
                        </div>
                    )
                })}
        </div>
    )
}
export default ProductList