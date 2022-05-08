//import logo from './logo.svg';
import './App.css';
//import List from './content/productList/producrtList';
import { Component } from "react"
import Header from './header/Header';
import Footer from './footer/Footer';
import AppRouter from './router/appRouter';
import { BrowserRouter } from 'react-router-dom';
import cartCRUD from './content/cart/dataModel'

export class App extends Component {

  state = {
    cartItems:0
  }

  componentDidMount() {
    this.updateCartItems()
  }
  updateCartItems=()=> {
    cartCRUD.getAllItems()
      .then(res => res.json())
      .then(data => this.setState({ cartItems:data.length }))
  }
  render() {
    return (
      <>
        {/* <BrowserRouter> */}
          <div class="myContainer bg-light">
            <Header  cartItems={this.state.cartItems} />
              <div class="container my-5">
                <AppRouter updateRef={this.updateCartItems} cartItems={this.state.cartItems} />
              </div>
            <Footer/>
          </div>
        {/* </BrowserRouter> */}
      </>
    );
  }
}

export default App;
