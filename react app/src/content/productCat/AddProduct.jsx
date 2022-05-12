import productsCRUD from './productDataModel'
import categoriesCRUD from '../categories/categoryDataModel'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap';
import algoliasearch from 'algoliasearch';

const appId = 'XOWB64MIEO';
const apiKey = '4c45d6b127c5bffb9c32806a49bed100';
const searchClient = algoliasearch(appId, apiKey);
const index = searchClient.initIndex('Products')

const AddProduct = (props) => {

    const [list, setList] = useState([])
    const [modalShow, setModalShow] = useState(false);
    useEffect(() =>
        {categoriesCRUD.getAllCategories()
            .then(res => res.json())
            .then(data => setList(data))}
        , [])
    
    let product = {
        name: "",
        categoryId:"",
        details : "",
        code :"",
        quantity : "",
        img : "",
        price : ""
    }
    let changeHandler = (e) => {
        product[e.target.name]=e.target.value
    }

    let save = (e) => {
        e.preventDefault();
        try {
            productsCRUD.AddProduct(product)
                .then(res =>  res.json() )
                .then(data => {
                    console.log(data)
                    index.saveObject(data,{autoGenerateObjectIDIfNotExist: true})
                })
            setModalShow(true)
            setTimeout(() => {
                setModalShow(false)
            }, 1200);
        }
        catch(err){console.log("from error:",err)}
    }
    return (
        <>
<form class="row g-3">
  <div class="col-md-6">
    <label for="inputName" class="form-label">Name</label>
    <input type="text" onChange={changeHandler} name='name' class="form-control" id="inputName" required/>
  </div>
  <div class="col-md-3">
        <label for="inputCode" class="form-label">Code</label>
        <input type="text" onChange={changeHandler} name='code' class="form-control" id="inputCode" required/>
    </div>
    <div class="col-md-3">
    <label for="inputPrice" class="form-label">Price</label>
    <input type="number" onChange={changeHandler} min={1} name='price' class="form-control" id="inputPrice" required/>
  </div>
  <div class="col-12 form-floating">
  <textarea name="details" onChange={changeHandler} class="form-control" placeholder="Leave a comment here" id="floatingTextarea" required></textarea>
  <label for="floatingTextarea">Details</label>
  </div>
  <div class="col-md-6">
    <label for="inputImg" class="form-label">Image</label>
    <input type="text" name='img' onChange={changeHandler} class="form-control" id="inputImg" required/>
  </div>
  <div class="col-md-4">
    <label for="inputCategory" class="form-label">Category</label>
    <select id="inputCategory" onChange={changeHandler} placeholder='Choose...' name='categoryId' class="form-select" required>\
        <option value="" disabled selected>Select category</option>
        {list.map((item) => {
            return (
                <option value={item.id}>{item.name}</option>
            )
      })}
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputQuantity" class="form-label">Quantity</label>
    <input type="number" onChange={changeHandler} min={1} name='quantity' class="form-control" id="inputQuantity" required/>
  </div>
  <div class="col-12">
    <button  onClick={save} class="btn btn-primary">Add product</button>
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
</form>
        </>
    )
}
export default AddProduct
