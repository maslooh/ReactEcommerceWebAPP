let url = "http://localhost:3000/categories/"

let categoriesCRUD = {
    getAllCategories() {
        return fetch (url)
    },
    getCategoryProducts(id) {
        return fetch(`${url+id}?_embed=products`)
    },
    addCategory(category){
        return fetch(url, {
     
            // Adding method type
            method: "POST",
             
            // Adding body or contents to send
            body: JSON.stringify(category),
             
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }
}
export default categoriesCRUD