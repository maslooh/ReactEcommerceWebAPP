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
    })
    return (
        
    )
}
export default ProductDetails