import "./style.css"
import { Button, Modal } from 'react-bootstrap';
let Details = (_props) => {
    if (_props.product != null) {
        return (
            <Modal show={_props.status} onHide={_props._ref}>
                    <Modal.Header closeButton>
                        <Modal.Title>{_props.product.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <img src={_props.product.img} class="card-img-top" alt="..."/>
                    </Modal.Body>
                    <Modal.Footer class="text-start">
                        <p class="ms-3">{_props.product.detailes}</p>
                    </Modal.Footer>
                </Modal>
        )
    }
}
export default Details;