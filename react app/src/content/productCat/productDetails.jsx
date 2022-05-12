import productsCRUD from './productDataModel'
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {  Modal } from 'react-bootstrap';
import cartCRUD from "../cart/cartDataModel"
import {Skeleton} from "antd"
function ProductDetails(props) {
    const [product, setProduct] = useState({})
    const [modalShow, setModalShow] = useState(false);
    const [loading, setLoading] = useState(true)
    const [qty, setQty] = useState(1)
    let params = useParams();

    useEffect(() => {
        productsCRUD.getProductById(params.id)
            .then((res) => res.json())
            .then(data => {
                setProduct(data)
                setLoading(false)
            })
    }, [])

    let itemNotInCart = (product) => {
        return props.cartItems.find((item) =>
            item.product["id"] === product["id"]
        ) === undefined
    }
    let addnewCartItem = () => {
        let newCartItem = {
            product: product,
            quantity: qty,
            totalPrice:qty*product.price
        }   
        if (itemNotInCart(product)) {
            productsCRUD.sendToCart(newCartItem)
            .then(() => {
                props.updateRef()
                setModalShow(true)
                setTimeout(() => {
                    setModalShow(false)
                }, 1200);
            })
        }else{
            let existingItem = props.cartItems
                .find((item) => item.product["id"] === product["id"])
            console.log(existingItem)
            newCartItem.quantity =parseInt( existingItem.quantity)  + qty
            newCartItem.totalPrice=newCartItem.quantity*product.price
            cartCRUD.editItem(existingItem.id, newCartItem)
            .then(() => {
                props.updateRef()
                setModalShow(true)
                setTimeout(() => {
                setModalShow(false)
                }, 1200);
            })
        }
    }
    if (loading) {
        return (
            <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                <div  class="img-fluid rounded-start" style={{height:"300px"}}/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                        <Skeleton active paragraph={{ rows: 5 }}/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
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
                        <button class="btn btn-primary" onClick={addnewCartItem}><i class="fa-solid h4 text-white fa-cart-shopping"></i> Add to cart</button>
                        <div class="form-group row col-4 col-md-3">
                            <div class="input-group mt-3">
                                <span class="input-group-text" id="inputGroup-sizing-default">Qty:</span>
                                <input type="number" defaultValue={1} onChange={(e) => {
                                    if (+e.target.value < product.quantity)
                                    {
                                        console.log(+e.target.value)
                                        setQty(+e.target.value)
                                        }
                                    else {
                                        alert("enter quentity in stock");
                                        e.target.value = product.quantity
                                        setQty(+e.target.value)
                                    }
                                }} class="form-control" max={product.quantity} min={1} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </div>
                </div>
                </div>
            </div>
            <Modal
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                >
                <Modal.Body>
                    <h4>Successfully added  <i class="fa-solid h-1 text-success fa-check"></i></h4>
                </Modal.Body>
            </Modal>
            
        </div>
    )
}
export default ProductDetails