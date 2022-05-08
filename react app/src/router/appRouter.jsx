import CategoriesList from "../content/categories/categoriesList"
import ProductList from "../content/productCat/productList"
import ProductDetails from "../content/productCat/productDetails";
import { Route, Routes } from 'react-router-dom'
import CartItemsList from '../content/cart/cartItemsList'
import AddProduct from "../content/productCat/AddProduct";
import AddCategory from "../content/categories/AddCategory"
const AppRouter = (props) => {
    return (  
        <Routes>
            <Route path="/" element={<CategoriesList/>}/>
            <Route path="/:id" element={<ProductList />} />
            <Route path="/products" element={<CategoriesList/>} />
            <Route path="/products/:id" element={<ProductDetails updateRef={props.updateRef} cartItems={props.cartItems} />} />
            <Route path="/cart" element={<CartItemsList updateRef={props.updateRef} />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/addCategory" element={<AddCategory/>}/>
        </Routes>
    );
}

export default AppRouter;