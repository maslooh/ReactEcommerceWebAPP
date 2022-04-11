import CategoriesList from "../content/categories/categoriesList"
import ProductList from "../content/productCat/productList"
import ProductDetails from "../content/productCat/productDetails";
import { Route, Routes } from 'react-router-dom'
import CartItemsList from '../content/cart/cartItemsList'

const AppRouter = (props) => {
    return (  
        <Routes>
            <Route path="/" element={<CategoriesList/>}/>
            <Route path="/:id" element={<ProductList />} />
            <Route path="/products" element={<CategoriesList/>} />
            <Route path="/products/:id" element={<ProductDetails updateRef={props.updateRef} />} />
            <Route path="/cart" element={<CartItemsList  updateRef={props.updateRef}/>}/>
        </Routes>
    );
}
 
export default AppRouter;