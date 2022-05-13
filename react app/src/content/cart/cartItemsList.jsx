
import { useEffect, useState,useReducer } from "react"
import cartCRUD from './cartDataModel'
import { DeleteOutlined } from '@ant-design/icons';
import { Popconfirm, message, Skeleton, Spin } from 'antd'

const inialState = {
    leftLoading: false,
    rightLoading:false
}//initialStates for useReducer

const reducer = (state,action) => {
    switch (action.type) {
        case "+":
            return {...state,leftLoading:!state.leftLoading}
        case "-":
            return { ...state,rightLoading: !state.rightLoading }
        default:
            return state
    }
}
const CartItemsList = (props) => {
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([])
    const [change, setChange] = useState(false)
    //using reducer for multibleStates
    const [state, dispatch] = useReducer(reducer, inialState)
    
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
            .then(() => {
                setChange(!change)
                confirm()
            })
            .then(props.updateRef)//to update cart icon status
    }
    function confirm() {
        message.success({
            content: 'Item deleted successfully',
            duration: 1,
            className:"message"
        });
      }
    let editQuantity = (op, item) => {
        dispatch({type:op})
        op == "+" ? ++item.quantity : --item.quantity;
        item.totalPrice=item.quantity*item.product["price"]
        cartCRUD.editItem(item.id, item)
        .then(dispatch({type:op}))
        .then(props.updateRef)//updating header cart status
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
                                    <button onClick={() => editQuantity("+", item)} class="input-group-text">
                                        {state.leftLoading?<Spin size="small" />:"+"}
                                    </button>
                                    <input value={item.quantity} type="text" style={{flex:"none"}} class="form-control w-25 bg-white" disabled />
                                    {item.quantity > 1 ?
                                        <button onClick={() => editQuantity("-", item)} class="input-group-text">
                                            {state.rightLoading?<Spin size="small" />:"-"}
                                        </button>
                                        :
                                        <button class="input-group-text">
                                            <Popconfirm
                                                title="Are you sure to delete this item?"
                                                onConfirm={() => deleteItem(item.id)}
                                                okText="Yes"
                                                cancelText="No"
                                                placement="right"
                                            >
                                                <DeleteOutlined />
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