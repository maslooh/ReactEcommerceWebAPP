let url = "http://localhost:3000/products/"

let productsCRUD = {
    getAllProducts() {
        return fetch (url)
    },
    getProductById(id) {
        return fetch(url+id)
    }
}
export default productsCRUD