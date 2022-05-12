
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import cartCRUD from './cartDataModel'
// import { Modal, Button } from 'react-bootstrap';
import { Popconfirm, message, Skeleton } from 'antd'

const CartItemsList = (props) => {
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([])
    // const [id, setId] = useState(0)
    const [change, setChange] = useState(false)

    let getCartItems =() => {
        cartCRUD.getAllItems()
            .then(res => res.json())
            .then(data => {
                setList(data)
                setLoading(false)
            })
    }
    let deleteItem=(_id) => {
        cartCRUD.deleteItem(_id)
            .then(props.updateRef)//to update cart icon status
            .then(setChange(!change))
            .then(confirm)
    }
    function confirm() {
        message.success({
            content: 'Item deleted successfully',
            duration: 1,
            className:"message"
        });
      }
    let editQuantity = (op,item) => {
        op == "+" ? ++item.quantity : --item.quantity;
        item.totalPrice=item.quantity*item.product["price"]
        cartCRUD.editItem(item.id, item)
        .then(props.updateRef) //updating header cart status
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
    if(loading)
    {
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
                    <tr>
                        <td className="col-1"> <Skeleton.Image /></td>
                        <td className="col-10">
                            <Skeleton active />
                        </td>
                        <th><Skeleton active paragraph={{ rows: 1 }}/></th>
                    </tr>
                </tbody>
                <tfoot>
                <td></td>
                        <td></td>
                            <td class="text-end">
                            <h4>Total Price:0$</h4>
                            </td>
                </tfoot>
            </table>
        </div>
    </>
            // <h1 className="text-muted text-center">No Items</h1>
        )
    }
    else if (list.length===0) {
        return (
            <h1 className="text-muted text-center">No Items</h1>
        )
    }
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
                                <div class="input-group mb-3">
                                    <button onClick={() => editQuantity("+", item)} class="input-group-text">+</button>
                                    <input value={item.quantity} type="text" style={{flex:"none"}} class="form-control w-25 bg-white" disabled />
                                    {item.quantity > 1 ?
                                        <button onClick={() => editQuantity("-", item)} class="input-group-text">-</button>
                                        :
                                        <button class="input-group-text">
                                            <Popconfirm
                                            title="Are you sure to delete this item?"
                                            onConfirm={()=>deleteItem(item.id)}
                                            okText="Yes"
                                            cancelText="No"
                                            placement="right"
                                            >
                                            <span class="fa-solid fa-trash-can"></span>
                                        </Popconfirm>
                                        </button>       
                                            }
                                </div>
                                <Popconfirm
                                    title="Are you sure to delete this item?"
                                    onConfirm={()=>deleteItem(item.id)}
                                    okText="Yes"
                                    cancelText="No"
                                    placement="rightTop"
                                >
                                    <span  style={{ textDecoration: "underline", color: "blue", cursor: "pointer" }}>delete</span>
                                </Popconfirm>
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
        </>
     );
    
}
 


export default CartItemsList;