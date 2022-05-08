let url="http://localhost:3000/cartItems"
let cartCRUD = {
    getAllItems(){
        return fetch(url)
    },
    deleteItem(_id) {
        return fetch(url+"/"+_id, {method: "DELETE"})
    },
    editItem(_id,params) {
        return fetch(url+"/"+_id, {
     
            // Adding method type
            method: "PATCH",
             
            // Adding body or contents to send
            body: JSON.stringify(params),
             
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }
}
export default cartCRUD

