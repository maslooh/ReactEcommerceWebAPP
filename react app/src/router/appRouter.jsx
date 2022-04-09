import CategoriesList from "../content/categories/categoriesList"
import ProductList from "../content/productCat/productList"
import ProductDetails from "../content/productCat/productDetails";
import { Route, Routes } from 'react-router-dom'
import CartItemsList from '../content/cart/cartItemsList'

const AppRouter = () => {
    return (  
        <Routes>
            <Route path="/" element={<CategoriesList/>}/>
            <Route path="/:id" element={<ProductList />} />
            <Route path="/products" element={<CategoriesList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartItemsList/>}/>
        </Routes>
    );
}
 
export default AppRouter;