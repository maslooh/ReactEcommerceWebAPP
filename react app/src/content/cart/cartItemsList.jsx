import { useEffect, useState } from "react"
import cartCRUD from './dataModel'

const CartItemsList = () => {
    
    const [list, setList] = useState([])
    useEffect(() => {
        cartCRUD.getAllItems().then(res=>res.json()).then(data=>setList(data))
    }, [])
    return ( 
        <>
            <div class="card p-2">
            <table class="table">
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td className="text-muted">Price</td>
                </tr>
                {list.map((item) => {
                    return (
                        <tr>
                            <td><img src={item.product.img} style={{width:100,height:100}} alt={item.product.name} /></td>
                            <td>
                                <b>{item.product.name}</b>
                                <p>{item.product.details}</p>
                                <div class="badge bg-light text-dark">Quantity:{item.quantity}</div>
                            </td>
                            <th>{item.totalPrice}$</th>
                        </tr>
                    )
                    
                })}
            </tbody>
            </table>
            </div>
            
        </>
     );
}
 


export default CartItemsList;