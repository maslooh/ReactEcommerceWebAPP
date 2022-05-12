import categoriesCRUD from "./categoryDataModel"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap';

const AddCategorty = (props) => {

    const [modalShow, setModalShow] = useState(false);

    let category = {
        picture: "",
        name: "",
        description:""
    }

    let changeHandler = (e) => {
        category[e.target.name]=e.target.value
    }

    let save = (e) => {
        e.preventDefault()
        try {
            categoriesCRUD.addCategory(category)
            setModalShow(true)
            setTimeout(() => {
            setModalShow(false)
        }, 1200);
        } catch (err) {
            console.log("from error:",err)
        }
    }
    return (
        <>
<form class="row g-3">
  <div class="col-12">
    <label for="inputName" class="form-label">Name</label>
    <input type="text" onChange={changeHandler} name='name' class="form-control" id="inputName" required/>
  </div>
  <div class="col-12 form-floating">
  <textarea name="description" onChange={changeHandler} class="form-control" placeholder="Leave a comment here" id="floatingTextarea" required></textarea>
  <label for="floatingTextarea">Description</label>
  </div>
  <div class="col-12">
    <label for="inputImg" class="form-label">Image</label>
    <input type="text" name='picture' onChange={changeHandler} class="form-control" id="inputImg" required/>
  </div>
  <div class="col-12">
    <button  onClick={save} class="btn btn-primary">Add category</button>
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
export default AddCategorty;