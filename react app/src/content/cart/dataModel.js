let url="http://localhost:3000/cartItems"
let cartCRUD = {
    getAllItems(){
        return fetch(url)
    },
    deleteItem(_id) {
        return fetch(url+"/"+_id, {method: "DELETE"})
    }
}
export default cartCRUD

