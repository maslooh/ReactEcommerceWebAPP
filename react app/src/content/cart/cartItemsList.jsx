
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import cartCRUD from './dataModel'

const CartItemsList = (props) => {

    const [list, setList] = useState([])
    const [change, setChange] = useState(false)

    let getCartItems =() => {
        cartCRUD.getAllItems()
            .then(res => res.json())
            .then(data => setList(data))
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
                                    <div class="badge bg-light text-dark">Quantity:{item.quantity}</div>
                                    <Link t to={"/cart"} class="ms-2" onClick={() => {
                                        cartCRUD.deleteItem(item.id).then(getCartItems()).then(setChange(() => change?false:true)).then(props.updateRef)
                                    }} style={{ textDecoration: "underline", color: "blue", cursor: "pointer" }}>delete</Link>
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
    else 
    {
        return (
            <h1 className="text-muted text-center">No Items</h1>
        )
    }
}
 


export default CartItemsList;