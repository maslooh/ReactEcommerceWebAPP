
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import cartCRUD from './dataModel'
import {  Modal,Button } from 'react-bootstrap';
const CartItemsList = (props) => {
    const [show, setShow] = useState(false);
    const [list, setList] = useState([])
    const [id, setId] = useState(0)
    const [change, setChange] = useState(false)

    let getCartItems =() => {
        cartCRUD.getAllItems()
            .then(res => res.json())
            .then(data => setList(data))
    }
    let deleteItem=(_id) => {
        cartCRUD.deleteItem(_id)
            .then(props.updateRef)
            .then(setChange(!change))
            .then(setShow(false))
    }
    let editQuantity = (op,item) => {
        op == "+" ? ++item.quantity : --item.quantity;
        cartCRUD.editItem(item.id, item)
        .then(props.updateRef)
    }
    useEffect(() => {
        getCartItems()
    }, [change])

    let TotalPriceCalc = () => {
        let totalPrice = 0
        list.forEach((item) => {
            totalPrice+=item.totalPrice
        })
        return (
            <h4>Total Price:{totalPrice}$</h4>
        )
    }

    if (list.length > 0) {
        return ( 
            <>
                <div class="card p-3">
                <h2>Shopping cart</h2>
                <table class="table">
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td className="text-muted text-end">Price</td>
                    </tr>
                    {list.map((item) => {
                        return (
                            <tr>
                                <td><img src={item.product.img} style={{width:100,height:100}} alt={item.product.name} /></td>
                                <td>
                                    <b>{item.product.name}</b>
                                    <p>{item.product.details}</p>
                                    {/* <div class="badge bg-light text-dark">Quantity:{item.quantity}</div> */}
                                    <div class="input-group mb-3">
                                        <button onClick={() => editQuantity("+", item)} class="input-group-text">+</button>
                                        <input value={item.quantity} type="text" style={{flex:"none"}} class="form-control w-25 bg-white" disabled />
                                        <button onClick={()=>editQuantity("-",item)} class="input-group-text">-</button>
                                    </div>
                                    <Link t to={"/cart"} onClick={() => { setShow(true); setId(item.id)}} style={{ textDecoration: "underline", color: "blue", cursor: "pointer" }}>delete</Link>
                                </td>
                                <th class="text-end">{item.totalPrice}$</th>
                            </tr>
                        )
                    })}
                        </tbody>
                        <tfoot>
                        <td></td>
                        <td></td>
                            <td class="text-end">
                                {TotalPriceCalc()}
                            </td>
                        </tfoot>
                    </table>
                </div>
                <Modal show={show} onHide={()=>setShow(false)} animation={false} centered>
                <Modal.Header closeButton>
                <Modal.Title>Delete Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>Delete this item?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>setShow(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>deleteItem(id)}>
                    Delete
                </Button>
                </Modal.Footer>
            </Modal>
            </>
         );
    }
    else 
    {
        return (
            <h1 className="text-muted text-center">No Items</h1>
        )
    }
}
 


export default CartItemsList;