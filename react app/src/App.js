//import logo from './logo.svg';
import './App.css';
//import List from './content/productList/producrtList';
import { Component } from "react"
import Header from './header/Header';
import Footer from './footer/Footer';
import AppRouter from './router/appRouter';
import { BrowserRouter } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <>
       
        <BrowserRouter>
        <Header />
            <div class="container my-5">
              <AppRouter/>
            </div>
          <Footer/>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
