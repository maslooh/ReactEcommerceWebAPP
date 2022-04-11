let url = "http://localhost:3000/products/"
let cartUrl = "http://localhost:3000/cartItems/"

let productsCRUD = {
    getAllProducts() {
        return fetch (url)
    },
    getProductById(id) {
        return fetch(url+id)
    },
    sendToCart(cartItem) {
        fetch(cartUrl, {
     
            // Adding method type
            method: "POST",
             
            // Adding body or contents to send
            body: JSON.stringify(cartItem),
             
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }
}
export default productsCRUD