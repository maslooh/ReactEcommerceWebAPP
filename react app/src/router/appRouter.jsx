import CategoriesList from "../content/categories/categoriesList"
import ProductList from "../content/productCat/productList"
import ProductDetails from "../content/productCat/productDetails";
import { Route, Routes } from 'react-router-dom'

const AppRouter = () => {
    return (  
        <Routes>
            <Route path="/" element={<CategoriesList/>}/>
            <Route path="/:id" element={<ProductList />} />
            <Route path="/products" element={<CategoriesList />} />
            <Route path="/products/:id" element={<ProductDetails/>}/>
        </Routes>
    );
}
 
export default AppRouter;