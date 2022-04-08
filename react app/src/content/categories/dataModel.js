let url = "http://localhost:3000/categories/"

let categoriesCRUD = {
    getAllCategories() {
        return fetch (url)
    },
    getCategoryProducts(id) {
        return fetch(`${url+id}?_embed=products`)
    }
}
export default categoriesCRUD