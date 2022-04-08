import { Button, Modal } from 'react-bootstrap';
import { Component } from 'react';
class Edit extends Component {
    state = {
        product:this.props.product
    }
    render() {
        if (this.props.product != null) {
            return (
                <>
                    <Modal show={this.props.status} onHide={this.props._ref}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Product</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div class="mb-3">
                                <label for="" class="form-label">Product name</label>
                                <input type="text"
                                    class="form-control"  name="" id="" aria-describedby="helpId" onChange={(e)=>this.props.product.name=e.target.value} placeholder={this.props.product.name} />
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Product details</label>
                                <input type="text"
                                    class="form-control" name="" id="" aria-describedby="helpId" onChange={(e)=>this.props.product.detailes=e.target.value} placeholder={this.props.product.detailes} />
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Product code</label>
                                <input type="text"
                                    class="form-control" name="" id="" aria-describedby="helpId" onChange={(e)=> this.props.product.code=e.target.value} placeholder={this.props.product.code} />
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label">Product quantity</label>
                                <input type="text"
                                    class="form-control" name="" id="" aria-describedby="helpId" onChange={(e)=>this.props.product.quantity=e.target.value} placeholder={this.props.product.quantity} />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.props._ref}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={
                                () => {
                                    this.props._ref()
                                    this.props._editRef(this.props.product)
                                }}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            )
        };
    }
}
export default Edit;
