let url="http://localhost:3000/cartItems"
let cartCRUD = {
    getAllItems(){
        return fetch(url)
    }
}
export default cartCRUD