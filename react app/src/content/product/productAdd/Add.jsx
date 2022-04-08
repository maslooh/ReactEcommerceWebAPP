import { Button, Modal } from 'react-bootstrap';
import {Component} from 'react'

class Add extends Component  {
    state = {
        pName: "",
        pDetails: "",
        pCode: "",
        pQuantity: "",
        img:""
    }
    newProduct =()=> {
        let newProduct = {
            id:0,
            name: this.state.pName,
            detailes: this.state.pDetails,
            code: this.state.pCode,
            quantity:this.state.pQuantity,
            img:this.state.img
        }
        this.props._addRef(newProduct)
    }
    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        })
    }
    render() {
        return (
            <>
                <Modal show={this.props.status} onHide={this.props._ref}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div class="mb-3">
                            <label for="" class="form-label">Product name</label>
                            <input type="text"
                                class="form-control" name="pName" value={this.state.pName} aria-describedby="helpId" onChange={this.onChangeHandler} />
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">Product details</label>
                            <input type="text"
                                class="form-control" name="pDetails" value={this.state.pDetails} aria-describedby="helpId" onChange={this.onChangeHandler} />
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">Product code</label>
                            <input type="text"
                                class="form-control" name="pCode" value={this.state.pCode} aria-describedby="helpId" onChange={this.onChangeHandler} />
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">Product quantity</label>
                            <input type="text"
                                class="form-control" name="pQuantity" value={this.state.pQuantity} aria-describedby="helpId" onChange={this.onChangeHandler} />
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">Product image</label>
                            <input type="text"
                                class="form-control" name="img" value={this.state.img} aria-describedby="helpId" onChange={this.onChangeHandler} />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props._ref}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => {
                            this.newProduct()
                        }}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
    };
export default Add;
